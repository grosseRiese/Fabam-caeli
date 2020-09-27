<template>
  <section class="menu-section">
      <img src="../assets/img/graphics-header.svg" alt="" class="top-menu">
        <button class="btn-menu" @click="$router.push('/Nav')">
          <img src="../assets/img/navicon.svg" /> 
        </button>
        
        <span class="btn-handbag">
          <i class="order-amount">
            {{ cartItemCount }} 
          </i>
            <img src="../assets/img/bag.svg" alt="" class="img-handbag" 
            v-on:click="showCart =! showCart" >
            <Cart v-if="showCart"/> 
        </span>

    <article class="db-items">
        <h1 class="h1-menu">Meny</h1>
        <ul class="ul-content">
          <Product v-for="(item) in menu" :key="item.id" :product="item" />
        </ul>
    </article>

    <img src="../assets/img/graphics-footer.svg" class="foot-menu" alt="">
  </section>
</template>

<script>
import Product from '@/components/Product';
import Cart from '@/components/Cart';

export default {
  name:"Menu",
  components: {
    Product,
    Cart
  },
  data() {
    return {
      showCart: false
    };
  },
  computed: {
    menu(){
      return this.$store.getters.menu;
    }, cartItemCount(){
      return this.$store.getters.cartItemCount;
    }
  }
}
</script>

<style lang="scss" >
  @import './../scss/variables';
  @import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=Work+Sans:wght@400;600&display=swap');

  .menu-section {
      display: grid;
      grid-template-columns:  auto auto auto;
      grid-template-rows: auto;
      grid-template-areas:"img-top img-top img-top"
                          "article-cntr article-cntr article-cntr"
                          "img-fot img-fot img-fot";
      align-content: center;
      margin: auto;                    
      background-color:$ab-pink;
      min-height:95vh;
      /**/width: 35%;
      max-width: 35%;
      min-width: 35%;
      height:auto;
      width:auto;

      .top-menu{
        grid-area: img-top;
        position: relative;
        min-width: auto;
        width: 100%;
      }

        .btn-menu{
          position: absolute; 
          margin-top: 1rem;
          margin-left: 1rem;
          border: none;
          text-decoration: none;
          display: inline-block;
          font-size: 1.6vw;
          cursor: pointer;
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background-color: white;
      }

      .btn-handbag{
          position: absolute; 
          margin-top: 1rem;
          margin-left: 29rem;
          border: none;
          text-decoration: none;
          display: inline-block;
          font-size: 1.6vw;
          cursor: pointer;
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background-color: black;
         margin: 1% 30%;
          //margin-right:auto;

          .order-amount{
            position: absolute;
            width: 1.2rem;
            height: 1.2rem;
            color: $ab-white;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 100%;
            background: $ab-orange;
            font-size: 1rem;
            font-weight: 700;
            //z-index: 2;
            margin-left: 25px;
            margin-bottom:25px;
          }
          .img-handbag{
            align-content: center;
            padding-left: 16px;
            padding-top: 14px;
          }
        }

    
  

      .db-items{
        grid-area: article-cntr ;
        display: grid;
        grid-template-columns:  auto auto auto;
        grid-template-rows: auto;
        grid-template-areas:"title title title"
                          "db-content db-content db-content"
                          "db-content db-content db-content"
                          "db-content db-content db-content";
        margin: 0rem 2rem;
        height:95vh;

          .h1-menu{
            grid-area: title;
            font-family: 'PT Serif', serif;
            font-weight: bold;
            font-size: 42px;
            text-align: center;
          }

          .ul-content{
            grid-area:db-content;
            list-style: none;
            padding-inline-start: 0.8rem !important;

            .li-item{
                display: grid;
                grid-template-columns: auto;
                grid-template-rows: auto;
                grid-template-areas: 
                  "btn descTitle descTitle price";

                .add-btn-cart{
                  grid-area: btn;
                  justify-self: center;
                  cursor: pointer;
                  //align-self: center;
                  padding:0.4rem;
                  height: 1.2rem;
                  border-radius: 50%;
                  border-color: black;
                  background-color: black;
                }

                .desc-Title{
                  grid-area: descTitle;
                  display: grid;
                  grid-template-columns: auto;
                  grid-template-rows: auto;
                  grid-template-areas: 
                      "Title"
                      "description";
                  margin-bottom: 1rem;
                    .title{
                      grid-area:Title;
                      font-size: 23px;
                      margin: 0 0 0;
                    }
                    .desc{
                      grid-area:description;
                      font-size: 12px;
                      margin: 0;
                    }
                }
                .price{
                  grid-area: price;
                  justify-self: center;
                  align-self: center;
                  font-size: 1.2rem;
                  margin: 0 0 0 10px;
                }
                
            }
          }
      }
      
      .foot-menu{
        grid-area:img-fot;
        width: 100%;
      }

  }
</style>