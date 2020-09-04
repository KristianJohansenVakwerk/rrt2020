<template>
  <header class="SiteHeader" :class="{ '-menu-open': menuOpen }">
    <nav
      class="SiteHeader__Bar grid container"
      :style="{ '--header-opacity': opacity }"
    >
      <h1 class="SiteHeader__Bar__Logo col-6">
        <nuxt-link to="/">Bigert &amp; Bergström</nuxt-link>
      </h1>
      <QuickNav class="col-6" :menu="menu" />
      <Burger :on-toggle="handleBurgerClick" class="-hide-desktop" />
    </nav>
    <MainMenu ref="mainMenuRef" :menu="menu" />
  </header>
</template>

<script>
import { mapState } from 'vuex'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from 'body-scroll-lock'

import MainMenu from './main-menu/MainMenu'
import QuickNav from './quick-nav/QuickNav'
import Burger from './burger/Burger'

export default {
  components: { MainMenu, QuickNav, Burger },
  data() {
    return {
      menu: [
        { slug: 'works', title: 'Works' },
        { slug: 'exhibitions', title: 'Exhibitions' },
        { slug: 'about', title: 'About' },
        { slug: 'news', title: 'News' },
        { slug: 'biography', title: 'Biography' },
        { slug: 'bibliography', title: 'Bibliography' }
      ]
    }
  },

  computed: mapState({
    opacity: state => state.ui.header.opacity,
    menuOpen: state => state.ui.header.menuOpen
  }),

  watch: {
    '$route.fullPath': function() {
      setTimeout(() => {
        this.$store.commit('ui/setMenuOpen', false)
      })
    },
    menuOpen(menuOpen) {
      const mainMenu = this.$refs.mainMenuRef.$el

      if (menuOpen) {
        disableBodyScroll(mainMenu)
      } else {
        clearAllBodyScrollLocks()
      }
    }
  },

  methods: {
    handleBurgerClick() {
      this.$store.commit(
        'ui/setMenuOpen',
        !this.$store.state.ui.header.menuOpen
      )
    }
  }
}
</script>
<style lang="scss" src="./Header.scss" />
