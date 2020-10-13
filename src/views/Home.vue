<template>
  <div class="home">
    <nav>
      <h4>Navbar</h4>
    </nav>
    <h1>PHONESHOP</h1>
    <header>Slider</header>

    <h2>
      <div class="title">Nos téléphones :</div>
    </h2>

    <div class="container">

      <div class="cellPhones">
        <PhoneList v-for="item in phonelisting"  :name="item.name"
          :image="item.image" :price="item.price" :quantity="item.quantity" :shoppingCart="item.shoppingCart"
          :key="item.name" />
      </div>

      <div class="shoppingCart">
        <aside class="shopping-cart">Votre panier d'achat :{{ shoppingCart }} téléphone(s)</aside>
      </div>

    </div>

  </div>
</template>

<script>
  import PhoneList from '@/components/PhoneList.vue'
  import {mapState} from 'vuex'
  export default {
    name: 'Home',
    components: {
      PhoneList
    },
    
    computed: {
      ...mapState({
        shoppingCart:'shoppingCart',
        phonelisting:'phonelisting'

      })
    },
       
   /* methods: {
      addToShoppingCart(amount) {
        this.shoppingCart += amount
      }
    }*/

  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    /* grid-template: auto 1fr auto/auto 1fr auto;*/

  }

  .cellPhones,
  .shopping-cart {
    border: 1px solid grey;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
  }

  .title {
    text-align: left;
  }
</style>