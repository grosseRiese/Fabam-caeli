import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import router from './../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: 'http://localhost:5000',
    menu: [],
    cart: [],
    confirmed: Object,
  },
  mutations: {
    
    updateMenuListItems(state,data){
      state.menu = data;
    },
    addToCart(state, {product,quantity}){
      let productInCart = state.cart.find(item => {
        return item.product.id === product.id;
      });
      if(productInCart){
        productInCart.quantity += quantity;
        return;
      }
      state.cart.push({product,quantity})
    },
    orderConfirmed(state, confirm){
      state.confirmed = confirm.data;
    },
    emptyCart(state){
      state.cart = [];
      // Route to confirmation
      router.push('/status')
    },
    removeItemFromCart(state,product){
      let index = state.cart.indexOf(product);
      state.cart.splice(index, 1);
    },

  },
  actions: {
      //get
      async getCoffeeList(ctx) {
        try{
          /***/
          axios.get(`${ctx.state.apiUrl}/api/v1/airbeans`)
            .then(response =>response.data)
            .then(data =>{
              console.log('Log dat: ',data.coffeemenu);
              ctx.commit('updateMenuListItems', data.coffeemenu);
          });
        } catch(err) {
          console.error(err)
        }
      },
      //post
      async sendOrder(ctx){
        try {
          let data = await axios.post(`${ctx.state.apiUrl}/api/v1/airbeans/order`, {
            items: ctx.state.cart
          });

          // Show order has been successful
          ctx.commit('orderConfirmed', data)
          
          // Empty cart
          ctx.commit('emptyCart');

        }catch (err) {
          console.log(`Somthing went wrong: ${err}`);
        }
      },
  },
  getters:{
    menu:(state) =>{
      return state.menu;
    },
    cartItemCount:(state) => {
      console.log(state.cart.length)
      return state.cart.length;
    },
    cartTotalPrice : (state) =>{
      let total = 0;
      state.cart.forEach(item => {
          total += item.product.price * item.quantity;
      })
      return total;
    },
    cartTotalQuantity : (state) =>{
      let itemQuantity = 0;
      state.cart.forEach(item => {
        itemQuantity += item.quantity;
      })
      return itemQuantity;
    },
  },

  modules: {
  }
})
