import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { getLanguage } from '@/common/cache.js'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
import zh from './zh-CN.json'
import en from './en.json'

Vue.use(VueI18n)

let lang = getLanguage();
if (lang === "auto") {
    lang = "zh";
}
const message = {
    "zh": zh,
    "en": en,
};
const i18n = new VueI18n({
    locale: lang,
    messages: {
        "zh": {...zh, ...elementZhLocale },
        "en": {...en, ...elementEnLocale },
    },
    fallbackLocale: 'zh',
})
export default i18n;