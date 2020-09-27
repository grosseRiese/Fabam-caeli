<template>
<section class="main-content"> 
    <h4 class="hed-4">Din beställning</h4>
      <table class="table table-borderless">
        <thead >
          <tr>
            <th style="width:50%"></th>
            <th style="width:20%;"></th>
            <th style="width:25%"></th>
            <th style="width:5%"></th>
          </tr>
        </thead>
        <tbody class ="eventsTbl" v-for="(item) in cart" :key="item.product.id" :data-id= parseInt(item.productid)>
          <tr class="choosen" >
            <td class="event-date">
                {{ item.product.title }}
								<br>
								<small class="event-price">{{item.product.price * item.quantity}} &emsp;<i>kr</i></small>
            </td>
						<td >
								<span class="">....................</span>
            </td>
						<td></td>
            <td class="event-desc">
								<small>
									<img @click="increaseQnt(item)" src="@/assets/img/arrow-up.svg" class="arrow-up" />
										{{ item.quantity }}
									<img @click="decreaseQnt(item)" src="@/assets/img/arrow-down.svg" class="arrow-down" />
								</small> 
            </td>
          </tr>
        </tbody>
      </table>

			<section class="total-amount">
				<h3>
					Total
					<span class="dots"></span>
					{{ totalCost }} kr
				</h3>
				<p>Inkl moms + drönarleverans</p>
			</section>
          
      <a href="#" v-if="cart.length !=0" class="btn" :disabled='true' @click.prevent="sendOrder">Take my money!</a>
  </section>
</template>

<script>
export default {
  name: 'Cart',
  methods: {
        sendOrder(){
            this.$store.dispatch('sendOrder');
				},
				increaseQnt(item){
					item.quantity++;
				},
					decreaseQnt(item){
					item.quantity--;
					if (item.quantity === 0) {
						this.$store.commit("removeItemFromCart",item);
					}
				},
		},
		computed: {
     cart(){
       return this.$store.state.cart;
     },
     totalCost(){
							return this.$store.getters.cartTotalPrice;
     },
				cartTotalQuantity(){
					return this.$store.getters.cartTotalQuantity;
				},
		},
}
</script>

<style lang="scss">

@import './../scss/variables';
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=Work+Sans:wght@400;600&display=swap');
 
	.main-content{
			background:$ab-white;
			width:auto;
			min-width:auto;
			max-width:auto;
			height: auto;
			margin-left: -28rem;
			margin-right:0rem;
			width: calc(100% - -28rem);
			margin-top:0.5rem;
			box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2), 0 0 4rem rgba(0, 0, 0, 0.2);
			padding-bottom: 3rem;

    .hed-4{
			display:flex;
			justify-content: center;
			text-align: center;
			font-family: PT Serif;
			font-style: normal;
			font-weight: bold;
			font-size: 1.8rem;
			line-height: 120%;
			margin:2.2rem 0 1rem 0;
			padding:4rem 0;
      
    }
    .btn{
				display: flex;
				font-size: 1.4rem;
				width: 50%;
				text-decoration: none;
				height: 3rem;
				margin: 0.7rem auto;
				justify-content: center;
				align-items: center;
				color: $ab-white;
				border-radius: 50px;
				background: $ab-brown;

        &:hover{
          color:$ab-white;
          background-color:$ab-orange ;
        }
    }
    .btn:disabled{
      background-color: rgba(220, 219, 219, 0.452);
      appearance: none;
      display: none;
      cursor:none;
    }

		.table.table-borderless{
				margin:0.6rem 1rem;
				margin: 0 23px;

				tbody tr{
					font-size: 1.3rem;
					font-weight: bold;
				}
				dl,ol,ul{
						list-style: none !important;
						margin-left: 0rem;
						padding-left: 1.3rem;
				}
		}	
		.total-amount{
			display: flex;
			flex-direction: column;

			margin: 2rem 1rem;
			h3 {
				display: flex;
				margin: 0;

				.dots {
					display: flex;
					justify-content: center;
					align-items: center;
					flex: 1;
					border-bottom: 2px dotted black;
					margin: 3px;
				}
			}
			p {
				display: flex;
				justify-content: flex-start;
				margin: 0 0 0 5px;
				padding: 0;
				font-size:1.2vw;
			}	
		}
  }
</style>