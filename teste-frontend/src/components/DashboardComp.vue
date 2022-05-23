<template>
  <div>
    <HeaderComp />
    <AsideComp />
  </div>
</template>

<script>
  import HeaderComp from './HeaderComp.vue';
  import AsideComp from './AsideComp.vue';

  export default {
    name: 'DashboardComp',
    components: {
      HeaderComp,
      AsideComp
    }
  }
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
  }
</style>