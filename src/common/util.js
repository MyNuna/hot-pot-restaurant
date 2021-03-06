import { setLanguage } from "./cache";
export function getSystemLanguage() {
    let type = navigator.appName;
    let lang;
    if (type == "Netscape") {
        lang = navigator.language;
    } else {
        lang = navigator.userLanguage;
    }
    lang = lang.slice(0, 2);
    setLanguage(lang);
    return lang;
}
export function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}