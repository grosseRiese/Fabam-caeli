<template>
    <li class="li-item"> 
       <img src="../assets/img/add.svg" class="add-btn-cart" @click.prevent="addToCart" />
      <article class="desc-Title"> 
        <h3 class="title">
          <span>{{product.title}}</span>
        </h3>
        <p class="desc">{{product.desc}}</p>
      </article>
      <span class="price"><b>{{product.price}} kr</b></span>
    
    </li>
</template>

<script>
export default {
  name: 'Product',
  props:{
    product : Object
  },
  methods: {
    addToCart(){
      // vuex add to cart mutation
      //this.$store.commit('addToCart', this.product);
      this.$store.commit('addToCart',{
          product: this.product,
          quantity:1,
      });
      console.log('added to cart!!', this.product);
    }
  },
  computed:{
  },
}
</script>


