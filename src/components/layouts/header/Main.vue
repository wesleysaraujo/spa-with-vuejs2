<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <nav-brand @navBarCollapseAction="changeNavBarCollapseIn"/>
        <div class="navbar-collapse collapse"
             id="navbar-main"
             :class="{in: navBarCollapseIn}">
          <nav-left />
          <nav-right />
        </div>
      </div>
  </nav>
</template>
<script>
import NavBrand from './NavBrand'
import NavLeft from './NavLeft'
import NavRight from './NavRight'

export default {
  name: 'header-main',
  components: {
    NavBrand,
    NavLeft,
    NavRight
  },
  data () {
    return {
      navBarCollapseIn: false
    }
  },
  methods: {
    changeNavBarCollapseIn () {
      this.navBarCollapseIn = !this.navBarCollapseIn
    }
  }
}
</script>
