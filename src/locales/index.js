import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { getLanguage } from '@/common/cache.js'
import { getSystemLanguage } from '../common/util'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
import zh from './zh-CN.json'
import en from './en.json'

Vue.use(VueI18n)

let lang = getLanguage();
if (lang === "auto") {
    lang = getSystemLanguage();
    let option = ['zh', 'en'];
    if (!option.includes(lang)) {
        lang = 'zh';
    }
}
const message = {
    "zh": {...zh, ...elementZhLocale },
    "en": {...en, ...elementEnLocale },
};
const i18n = new VueI18n({
    locale: lang,
    messages: message,
    fallbackLocale: 'zh',
})
export default i18n;