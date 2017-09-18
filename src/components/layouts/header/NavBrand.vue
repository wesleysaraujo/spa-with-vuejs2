<template>
  <div class="navbar-header">
    <router-link to="/" class="navbar-brand">SocialC</router-link>
		<button
			class="navbar-toggle"
			type="button"
      @click.prevent="toggleNavBarCollapse">
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		</button>
  </div>
</template>
<script>
export default {
  name: 'header-nav-brand',
  data () {
    return {}
  },
  methods: {
    toggleNavBarCollapse () {
      this.$emit('navBarCollapseAction')
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
