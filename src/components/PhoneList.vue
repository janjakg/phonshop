<template>
  <div class="phonelist">

    <body>
      <div class="phones">
        <h3>{{ name }}</h3>
        <img class="menu-item__image" :src="image.source" :alt="image.alt" />
        <p>{{ price }}$</p>
        <div>
          <label for="add-item-quantity">Quantité :</label>
          <input v-model.number="quantity" id="add-item-quantity" type="number">
          <BaseButton @click="updateShoppingCart(quantity)">Ajouter au panier</BaseButton>
        </div>

      </div>
    </body>
  </div>
</template>

<script>
import BaseButton from "./BaseButton"
import {mapActions} from 'vuex'
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
    height: 200px;
    border: 1px solid black;
  }
</style>