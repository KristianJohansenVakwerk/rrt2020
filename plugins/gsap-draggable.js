import Vue from 'vue'
import { gsap } from 'gsap/dist/gsap'
import { Draggable } from 'gsap/dist/Draggable'

gsap.registerPlugin(Draggable)

Vue.use(gsap)
