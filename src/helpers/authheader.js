import { checkWindowTabId } from "./preload";

// let x = 6;
// if (window.tabId) {
//   console.log("if window.tabId", window.tabId);
//   x = window.tabId;
// } else {
//   loadTabId();
//   console.log("else window.tabId", window.tabId);
//   x = window.tabId;
// }

let x = checkWindowTabId();
export function authHeader() {
  const token = localStorage.getItem(`${x}-authenticationService`);
  return {
    // "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export function authLogin() {
  return {
    "Content-Type": "application/json",
    token: "",
    trantype: "",
    client_id: "",
    user_id: "",
  };
}

export function getHeader() {
  const token = localStorage.getItem(`${x}-authenticationService`);
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export function getToken() {
  const token = localStorage.getItem(`${x}-authenticationService`);
  if (token == undefined) {
    token = 100;
  }
  return token;
}

// !Handle Login Response

export function handleLoginResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && {
        message: data.message,
        status: data.status,
      }) || { message: response.statusText, status: 500 };
      return Promise.reject(error);
    }
    return data;
  });
}

export function handleFileResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (response.status !== 200) {
      const error = data && { message: data.message, status: data.status };
      return Promise.reject(error);
    } else {
      if (!response.ok) {
        const error = data && {
          message: response.statusText,
          status: response.status,
        };
        return Promise.reject(error);
      }
    }
    return text;
  });
}
