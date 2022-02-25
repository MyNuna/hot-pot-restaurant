import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { getLanguage } from '@/common/cache.js'
import zh from './zh-CN.json'
import en from './en.json'

Vue.use(VueI18n)

// function loadLocaleMessages() {
//     const locales = require.context('./', true, /[A-Za-z0-9-_,\s]+\.json$/i)
//     const messages = {}
//     locales.keys().forEach(key => {
//         const matched = key.match(/([A-Za-z0-9-_]+)\./i)
//         if (matched && matched.length > 1) {
//             const locale = matched[1]
//             messages[locale] = locales(key)
//         }
//     })
//     return messages
// }
let lang = getLanguage();
if (lang === "auto") {
    lang = "zh";
}
const i18n = new VueI18n({
    locale: lang,
    messages: {
        "zh": zh,
        "en": en,
    },
    fallbackLocale: 'zh',
})
export default i18n;