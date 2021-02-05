<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
export default {
  name: 'App',
  // components 의 {}가 없으면 안됨.(json 형식!)
  components: { Nav },
  mounted() {
   console.log(this.$store); 
  }
}
</script>