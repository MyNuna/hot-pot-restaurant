import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { getLanguage } from '@/common/cache.js'
import zh from './zh-CN.json'
import en from './en.json'

Vue.use(VueI18n)

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