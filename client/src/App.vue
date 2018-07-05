<template>
  <v-app>
    <div id="app">
      <nav-header></nav-header>
      <div id="nav">
        <router-link to="/">Home</router-link> 
        <router-link to="/about">About</router-link> 
      </div>
      <router-view/>
    </div>
  </v-app>
</template>

<script>
import NavHeader from '@/components/Header'
export default {
  components: {
    NavHeader
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
