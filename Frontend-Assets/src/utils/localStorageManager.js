export const KEY_ACCESS_TOKEN = "access_token";

export function getItem(key) {
    return localStorage.getItem(key); // used when checking login or not
}

export function setItem(key, value) {
    localStorage.setItem(key, value); //used to set the access token
}

export function removeItem(key) {
    localStorage.removeItem(key); //while logingout we remove the access token using this function
}
