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
    <div class="cellPhones">
      <PhoneList v-for="item in phonelisting" :name="item.name" :image="item.image" :price="item.price"
        :key="item.name" />
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
        phonelisting: [{
            name: "Galaxy A20",
            price: 300,
            image: {
              source: "./images/galaxyA20.jpg",
              alt: "galaxy A20",
            }
          },
          {
            name: "Galaxy Flip",
            price: 500,
            image: {
              source: "./images/galaxyFlip.jpg",
              alt: "galaxy Flip",
            }
          },
          {
            name: "Galaxy S9",
            price: 450,
            image: {
              source: "./images/galaxyS9.jpg",
              alt: "galaxy S9",
            }
          },
          {
            name: "Galaxy S20",
            price: 900,
            image: {
              source: "./images/galaxyS20.jpeg",
              alt: "galaxy S20",
            }
          },
          {
            name: "Iphone 11",
            price: 850,
            image: {
              source: "./images/Iphone11.jpg",
              alt: "Iphone11",
            }
          },
          {
            name: "IphoneSe",
            price: 880,
            image: {
              source: "./images/IphoneSe.jpg",
              alt: "IphoneSe",
            }
          },
          {
            name: "IphoneXr",
            price: 770,
            image: {
              source: "./images/IphoneXr.jpg",
              alt: "IphoneXr",
            }
          },
          {
            name: "SonyXperiaZ1",
            price: 680,
            image: {
              source: "./images/SonyXperiaZ1.jpg",
              alt: "SonyXperiaZ1",
            }
          },
          {
            name: "XiaomiRedmi9S",
            price: 590,
            image: {
              source: "./images/XiaomiRedmi9S.jpg",
              alt: "XiaomiRedmi9S",
            }
          },
        ]
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
  .cellPhones{
    border:1px solid red;
  }
  .title{
    text-align: left;
  }
</style>