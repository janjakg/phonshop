<template>
<div class="contact">
  <h1>Contactez nous:</h1>
  <p>Adresse : {{ adress }} </p>
  <p>Email : {{ email }} </p>
  <p>Téléphone : {{ phone }} </p>
</div>  
</template>

<script>
export default {
  name : 'Contact',
  data(){
    return{
      adress:'1 rue de l\'unique source de vérité, 75001 Paris',
      email:'phonshop@gmail.com',
      phone: '01 02 03 44 55'
    }
  }
}
</script>