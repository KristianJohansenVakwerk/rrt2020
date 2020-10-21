/*
This file is used to register all global Vue components
*/
import Vue from 'vue'

import svgLoader from './svgLoader/svgLoader.vue'
import svgRect from './svgRect/svgRect.vue'
import draggable from './draggable/draggable.vue'

Vue.component('svg-loader', svgLoader)
Vue.component('svg-rect', svgRect)
Vue.component('draggable', draggable)
