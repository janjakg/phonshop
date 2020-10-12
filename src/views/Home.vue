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
        <PhoneList v-for="item in phonelisting" @add-items-to-cart="addToShoppingCart" :name="item.name"
          :image="item.image" :price="item.price" :quantity="item.quantity" :shoppinCart="item.shoppinCart"
          :key="item.name" />
      </div>

      <div class="shoppinCart">
        <aside class="shopping-cart">Votre panier d'achat :{{ shoppinCart }} téléphone(s)</aside>
      </div>

    </div>

  </div>
</template>

<script>
  import PhoneList from '@/components/PhoneList.vue'
  export default {
    name: 'Home',
    components: {
      PhoneList
    },
    data() {
      return {
        shoppinCart: 0,
        phonelisting: [{
            name: "Galaxy A20",
            price: 300,
            image: {
              source: "./images/galaxyA20.jpg",
              alt: "galaxy A20",
            },
            quantity: 1,
          },
          {
            name: "Galaxy Flip",
            price: 500,
            image: {
              source: "./images/galaxyFlip.jpg",
              alt: "galaxy Flip",
            },
            quantity: 1
          },
          {
            name: "Galaxy S9",
            price: 450,
            image: {
              source: "./images/galaxyS9.jpg",
              alt: "galaxy S9",
            },
            quantity: 1
          },
          {
            name: "Galaxy S20",
            price: 900,
            image: {
              source: "./images/galaxyS20.jpeg",
              alt: "galaxy S20",
            },
            quantity: 1
          },
          {
            name: "Iphone 11",
            price: 850,
            image: {
              source: "./images/Iphone11.jpg",
              alt: "Iphone11",
            },
            quantity: 1
          },
          {
            name: "IphoneSe",
            price: 880,
            image: {
              source: "./images/IphoneSe.jpg",
              alt: "IphoneSe",
            },
            quantity: 1
          },
          {
            name: "IphoneXr",
            price: 770,
            image: {
              source: "./images/IphoneXr.jpg",
              alt: "IphoneXr",
            },
            quantity: 1
          },
          {
            name: "SonyXperiaZ1",
            price: 680,
            image: {
              source: "./images/SonyXperiaZ1.jpg",
              alt: "SonyXperiaZ1",
            },
            quantity: 1
          },
          {
            name: "XiaomiRedmi9S",
            price: 590,
            image: {
              source: "./images/XiaomiRedmi9S.jpg",
              alt: "XiaomiRedmi9S",
            },
            quantity: 1
          },
        ]
      }
    },
    methods: {
      addToShoppingCart(amount) {
        this.shoppingCart += amount
      }
    }

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