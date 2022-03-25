import storage from "good-storage";
const DEFAULT_LANGUAGE = 'DEFAULT_LANGUAGE'
const TOKEN_KEY = 'TOKEN_KEY'

export function getToken() {
    return storage.get(TOKEN_KEY);
};
export function setToken(value) {
    return storage.set(TOKEN_KEY, value);
}
export function getLanguage() {
    return storage.get(DEFAULT_LANGUAGE, "auto");
};
export function setLanguage(val) {
    return storage.set(DEFAULT_LANGUAGE, val);
};