import { BehaviorSubject } from "rxjs";
import { handleLoginResponse, checkWindowTabId } from "@/helpers";
import { authLoginURL } from "@/services/api";
import jwt_decode from "jwt-decode";

let x = checkWindowTabId();
const currentUserSubject = new BehaviorSubject("");

export const authenticationService = {
  login,
  logout,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  },
};

function login(reqData) {
  const headerOption = {
    "Content-Type": "application/json",
  };

  const requestOption = {
    method: "POST",
    headers: headerOption,
    body: JSON.stringify(reqData),
  };
  const URL = authLoginURL();

  return fetch(URL, requestOption)
    .then(handleLoginResponse)
    .then((response) => {
      // console.log("auth res => ", response);
      if (response["responseStatus"] === 200) {
        let decoded = jwt_decode(response["responseObject"]["access_token"]);
        let refreshToken = jwt_decode(
          response["responseObject"]["refresh_token"]
        );
        decoded["token"] = response["responseObject"]["access_token"];
        decoded["status"] = response["responseStatus"];
        localStorage.setItem(`${x}-hrms-currentUser`, JSON.stringify(decoded));
        localStorage.setItem(
          `${x}-hrms-refreshToken`,
          JSON.stringify(refreshToken)
        );

        currentUserSubject.next(decoded);

        return response;
      } else {
        return response;
      }
    });
}

function logout() {
  // localStorage.clear();
  localStorage.removeItem(`${x}-hrms-currentUser`);
  localStorage.removeItem(`${x}-hrms-refreshToken`);
  currentUserSubject.next(null);
}
