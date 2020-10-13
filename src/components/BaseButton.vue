<template>
<!-- v-on nous permettra d'asigner les évènements à un élément du composant afin que Vue sache où écouter pour les évènements-->
  <button v-on="$listeners">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'BaseButton'
  }
</script>