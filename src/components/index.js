import Vue from "vue";
import Header from "./header.vue";
import Menu from "./menu.vue";
import Foot from "./foot.vue";
import Icon from "./icon.vue";
import codeBox from "./codeBox.vue"
import Swipe from "./swipe.vue"


Vue.component('page-header', Header)
Vue.component('page-menu', Menu)
Vue.component('page-foot', Foot)
Vue.component('icon', Icon)
Vue.component('code-box', codeBox)
Vue.component('swipe', Swipe)