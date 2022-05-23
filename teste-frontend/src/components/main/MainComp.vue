<template>
  <main>
    <AddCeps />
    <ListAddress />
  </main>
</template>

<script>
  import AddCeps from './AddCeps.vue';
  import ListAddress from './ListAddress.vue';

  export default {
    name: 'MainComp',
    components: {
      AddCeps,
      ListAddress
    }
  }
</script>

<style scoped>
  main {
    margin-left: 47px;
    margin-top: 25px;
  }
</style>