<template>
  <main>
    <AddCeps />
  </main>
</template>

<script>
  import AddCeps from './AddCeps.vue';

  export default {
    name: 'MainComp',
    components: {
      AddCeps,
    }
  }
</script>

<style scoped>
  main {
    margin-left: 47px;
    margin-top: 25px;
  }
</style>