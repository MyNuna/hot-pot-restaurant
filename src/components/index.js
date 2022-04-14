import Vue from "vue";
import Header from "./header.vue";
import Menu from "./menu.vue";
import Foot from "./foot.vue";
import Icon from "./icon.vue";
import happyMenu from "./happy-menu.vue"


Vue.component('page-header', Header)
Vue.component('page-menu', Menu)
Vue.component('page-foot', Foot)
Vue.component('icon', Icon)
Vue.component('happy-menu', happyMenu)