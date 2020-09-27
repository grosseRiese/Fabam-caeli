<template>
  <section  class="overlay">
    <img
      src="../assets/img/close.svg"
      alt="close" class="closebtn"
      @click="()=>$router.push('menu')" />
    <div class="overlay-content">
      <button v-on:click="()=>$router.push('menu')">Meny</button>
      <button v-on:click="()=>$router.push('about')">VårtKaffe</button>
      <button href="#">Min Profile</button>
      <button v-on:click="()=>$router.push('status')">Orderstatus</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Nav",
  methods:{
  }
}
</script>

<style lang="scss">
@import './../scss/variables';
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=Work+Sans:wght@400;600&display=swap');
  .overlay{
    background-color:$ab-brown;
    //background-color: rgba(0, 0, 0, 0.792);
    margin-top:0% !important;
    width: 35%;
    margin: auto;
    height: 95vh;
    position: relative;
    

    img.closebtn{
      position: absolute;
      left: 10px;
      top: 10px;
      width: 40px;
      height: 40px;
      opacity: 0.7;
      border-radius: 50%;
      background: $ab-white;
      cursor: pointer;

        &:hover {
          opacity: 1;
        }
        &:before,
        &:after {
          position: absolute;
          left: 15px;
          content: " ";
          height: 33px;
          width: 2px;
          background-color: #333;
        }
        &:before {
          transform: rotate(45deg);
        }
        &:after {
          transform: rotate(-45deg);
        }
    }
    
    .overlay-content{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20%;
      justify-content: space-around;
      color: $ab-landing-bgc;
    
      button{
        font-family: PT Serif;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 38px;
        letter-spacing: 0em;
        text-align: center;
        background: transparent;
        border: none;
        margin: 20px auto 0;
        display: block;
        outline: none;
        color: $ab-white;
        position: relative;
        transition: 0.3s;
        padding: 10px; 
        cursor: pointer;

        &:before {
          content: "";
          padding: 0 60px;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          margin: 0, auto;
          width: 0;
          transition: 0.3s;
        }
        &:hover:before {
          width: 100%;
          padding: 0; 
        }
        &:active {
          background: $ab-orange;
          color: $ab-white;
          transition: none;
        }
      }
    }
  }
</style>