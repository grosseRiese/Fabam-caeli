<template>
  <section class="Landing-Page">
    <img class="left-img" src="../assets/img/intro-graphic-left.svg" alt="">
    <img
        src="../assets/img/airbean-landing.svg"
        alt="landing"
        class="abl-img-btn-cntr"
        v-on:click="()=>$router.push('/menu')"
    />
    <img class="right-img" src="../assets/img/intro-graphic-right.svg" alt="">
  </section>
</template>

<script>
export default {
  name: 'Landing',
  components: {
    
  }

}
</script>

<style lang="scss" scoped>
@import './../scss/variables';
  .Landing-Page {
    display: grid;
    grid-template-columns:  auto auto auto;
    grid-template-rows: auto;
    grid-template-areas:"lft . rht"
                        "lft . rht"
                        "lft img-btn rht"
                        "lft . rht"
                        "lft . rht";

    align-content: center;
    margin: auto;                    
    background-color:$ab-landing-bgc;
    min-height:95vh;
    height: auto; 
    width:auto;

    .left-img{
      grid-area: lft;
      height: 100vh;
    
    }

    .abl-img-btn-cntr{
      grid-area: img-btn;

      display: flex;
      justify-self: center;
      align-self: center;
      height: auto;
      
      &:hover{
        cursor: pointer;
        border: 0.1rem solid $ab-pink;
      }

    }
    
    .right-img{
      grid-area: rht;
      height: 100vh;
    }

}
</style>
