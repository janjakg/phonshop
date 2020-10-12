<template>
  <div class="detail">
    <h1>Détails du téléphone</h1>
    <PhoneList v-for="item in phonelisting" :key="item.name"/>
    <p>Prix:{{  }}</p>
    <p>Couleur:{{ }}</p>
    <p>Stockage:{{ }}Go</p>
  </div>
</template>

<script>
import PhoneList from '@/components/PhoneList.vue'
  export default {
    name: 'DetailItem',
    components :{
      PhoneList
    },
    data(){
      return{
        phonelisting:[{
          name: "Galaxy",
          price:2,
          color:"blue",
          capacity:150,
        }]
      }
    }
  }
</script>

<style scoped>

</style>