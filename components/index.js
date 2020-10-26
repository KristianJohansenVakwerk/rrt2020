/*
This file is used to register all global Vue components
*/
import Vue from 'vue'

import svgLoader from './svgLoader/svgLoader.vue'
import draggable from './draggable/draggable.vue'

Vue.component('svg-loader', svgLoader)
Vue.component('draggable', draggable)
