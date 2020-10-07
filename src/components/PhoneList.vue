<template>
  <div class="phonelist">

    <body>
      <div class="phones">
        <h3>{{ name }}</h3>
        <img class="menu-item__image" :src="image.source" :alt="image.alt"  />
        <p>{{ price }}$</p>
      </div>
    </body>
  </div>
</template>

<script>
  export default {
    name: 'PhoneList',
    props: ["image", "name","price"]
  }
</script>

<style scoped>
  .phones {
 
    width: 500px;
  }

  .phonelist {
    box-sizing: border-box;
    display: inline-block;
    flex-direction: row;
  }

  .menu-item__image {
    width: 150px;
    height: 200px;
    border: 1px solid black;
  }
</style>