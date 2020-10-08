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
          <button @click="addToShoppingCart(quantity)">Ajouter au panier</button>
        </div>

      </div>
    </body>
  </div>
</template>

<script>
  export default {
    name: 'PhoneList',
    props: ["image", "name", "price", "quantity", "addToShoppingCart"]
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