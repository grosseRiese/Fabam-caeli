<template>
  <div id="app">
    <!--<div id="">
      <router-link to="/">Landning</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
   components:{
  },
    beforeMount(){
    this.$store.dispatch('getCoffeeList');
  }
};
</script>

<style lang="scss">
@import './scss/main';
  #app{
      display: grid;
      grid-template-columns:  auto ;
      grid-template-rows: auto;
      margin: auto;
      transition: 0.3s;
      height: 100vh;
      margin-top: 5%; 
      margin-bottom: 5%; 
      padding-bottom: 0.321rem;
  }
</style>
