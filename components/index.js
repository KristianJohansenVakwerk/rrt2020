/*
This file is used to register all global Vue components
*/
import Vue from 'vue'

import Footer from './site-footer/Footer.vue'
import Header from './site-header/Header.vue'
import info from './info/info.vue'
import page from './page/page.vue'
import svgLoader from './svgLoader/svgLoader.vue'
import draggable from './draggable/draggable.vue'
import indexes from './indexes/indexes.vue'
import indexesItem from './indexes/indexesItem.vue'
import slideshow from './slideshow/slideshow.vue'
import shareContainer from './shareContainer/shareContainer.vue'
import share from './share/share.vue'

Vue.component('siteFooter', Footer)
Vue.component('siteHeader', Header)
Vue.component('info', info)
Vue.component('page', page)
Vue.component('indexes', indexes)
Vue.component('indexesItem', indexesItem)
Vue.component('slideshow', slideshow)
Vue.component('share', share)
Vue.component('shareContainer', shareContainer)
Vue.component('svg-loader', svgLoader)
Vue.component('draggable', draggable)
