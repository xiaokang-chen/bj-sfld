import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import "swiper/swiper-bundle.css"
Vue.use(VueAwesomeSwiper, /* { default options with global component } */ )

import Swiper2, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper'
Swiper2.use([Navigation, Pagination, EffectFade, Autoplay])