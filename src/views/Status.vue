<template>
  <section class="stats-confirmation">
      <article class="order-number">
        <span class="order-num-text">Order number : </span>
        <span class="ticket"> 
          <img class="img-barcode" src="../assets/img/barcode.png" alt="" >
          <p class="code-num">{{orderStatus.orderNr}} </p>
        </span>
      </article><!--//end-of.order-number-->
      <article class="drone-img">
        <img src="./../assets/img/drone.svg" alt="flying drone" />
      </article><!--//end-of.drone-img-->
      <article class="order-text">
        <h1>Din beställning är på väg!</h1>
      </article><!--//end-of.order-text-->
      <article class="eta-text">
          <h3> <b> {{ orderStatus.eta }}</b> <small>minuter</small> </h3>
      </article><!--//end-of.eta-text-->
      <article class="btn-area">
        <a href="#" class="btn-cool" @click="$router.push('/menu')"><b> OK, Cool!</b></a>
      </article><!--//end-of.btn-area-->
      
  </section>
</template>

<script>
export default {
  name: 'Status',
  computed: {
    orderStatus(){
      return this.$store.state.confirmed;
    }
  }
}
</script>

<style lang="scss">
 @import './../scss/variables';
 @import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=Work+Sans:wght@400;600&display=swap');

.stats-confirmation{
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: auto;
      grid-template-areas:"order-number"
                          "drone-img"
                          "order-text"
                          "eta-text"
                          "btn-area";
      justify-content: center;
      margin: auto;                    
      background-color:$ab-orange;
      min-height:95vh;
      /**/width: 35%;
      max-width: 35%;
      min-width: 35%;
      height:auto;
      width:auto;

      .order-number{
        grid-area: order-number;
        display:grid;
        grid-template-columns: auto;
        grid-template-rows: auto;
        grid-template-areas:"area-1"
                          "area-2";
        justify-self: center;

        .order-num-text{
          grid-area: area-1;
          justify-self: center;
          color: rgb(55, 54, 54);
          max-width: 100%;
          padding-top: 1.5rem;
          font-weight: bold;
          font-size: 1.6vw;
          letter-spacing: 0.3em;
          text-transform: uppercase;

        }
        .ticket{
          grid-area: area-2;
          color: black;
          text-align: center;
          font-family:'Franklin Gothic Medium', 'Arial Narrow',Arial, sans-serif;
          font-style: normal;
          font-weight: bold;
          letter-spacing: 0.3em;
          font-size:1.2vw;

          .img-barcode{
            text-align: center;
            color: rgba(0, 0, 0, 0.8);
            padding: 0;
            width:97%;
            height:auto;
          }
          .code-num{
            color:$ab-white;
          }
        }
      }
      .drone-img{
        grid-area:drone-img;
        justify-self: center;
        img{
          padding-top: 1.72rem;
          width: 20rem;
          animation: flying 3s linear infinite;
        }
        @keyframes flying {
          0% {
            transform: translateY(0) rotateZ(0deg);
          }
          25% {
            transform: translateY(0.25rem) rotateZ(1deg);
          }
          50% {
            transform: translateY(0.5rem) rotateZ(0deg);
          }
          75% {
            transform: translateY(0.25rem) rotateZ(-1deg);
          }
          100% {
            transform: translateY(0) rotateZ(0deg);
          }
        }
      }
      .order-text{
        grid-area:order-text;
        justify-self: center;

        h1{
          font-size: 3vw;
          font-family: "PT Serif";
          color:$ab-white;
          width:auto;
          text-align: center;
          padding: 0 2.8vw;
        }
      }
      .eta-text{
        grid-area:eta-text;
        justify-self: center;

        font-size: 1.4vw;
        font-family: "Work Sans";
        color:$ab-white;
      }
      .btn-area{
        grid-area:btn-area;
        justify-self: center;
        padding-bottom: 2rem;

        .btn-cool{
          display: flex;
          max-width: 16rem;
          font-family: "PT Serif", serif;
          font-size: 1.94rem;
          text-decoration: none;
          height: 5rem;
          width: 16rem;
          margin: auto;
          justify-content: center;
          align-items: center;
          color:$ab-brown;
          border-radius: 999rem;
          background: $ab-white;
          
        }
      }



}

</style>