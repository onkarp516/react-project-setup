import config from "config";

export function authLoginURL() {
  return `${config.apiUrl}/authenticate`;
}
