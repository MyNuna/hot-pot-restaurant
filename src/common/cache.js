import storage from "good-storage";
const DEFAULT_LANGUAGE = 'DEFAULT_LANGUAGE'

export function getLanguage() {
    return storage.get(DEFAULT_LANGUAGE, "auto");
};
export function setLanguage(val) {
    return storage.set(DEFAULT_LANGUAGE, val);
};