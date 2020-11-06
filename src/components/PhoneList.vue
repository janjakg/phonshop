<template>
  <div class="phonelist">

    <body>
      <div class="phones">
        <h3>{{ name }}</h3>
        <router-link to="/detail"> <div class="pictureBox"><img class="menu-item__image" :src="image.source" :alt="image.alt" /></div></router-link>
        <router-view/>
        <p>{{ price }}$</p>
        <div>
          <label for="add-item-quantity">Quantité :</label>
          <input v-model.number="quantity" id="add-item-quantity" type="number">
          <BaseButton @click="updateShoppingCart(quantity)" class="test">Ajouter au panier</BaseButton>
   
        </div>

      </div>
    </body>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import BaseButton from "./BaseButton"
  export default {
    name: 'PhoneList',

    components: {
      BaseButton
    },

    props: {
      image: {
        type: Object,
        required : true
      },
      name: {
        type: String,
        required : true
      },
      price: {
        type: Number,
        required : true
      },
      quantity: {
        type: Number,
        default:0
      },
     
    },
    methods:{
     ...mapActions(["updateShoppingCart"])
      }   

  }
</script>

<style scoped>
  .phones {
    width: 500px;
  }

  .phonelist {
    display: inline-block;
  }

  .menu-item__image {
    width: 150px;   
   
  }
  .pictureBox{
    display: flex;
    justify-content:center ;
    align-items: center;
    width: 500px;
    height: 320px;
    border: 1px solid black; 

  }
</style>