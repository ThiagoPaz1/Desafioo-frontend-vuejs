<template>
  <div>
    <HeaderComp />
    <section>
      <AsideComp />
      <MainComp />
    </section>  
  </div>
</template>

<script>
  import HeaderComp from './HeaderComp.vue';
  import AsideComp from './AsideComp.vue';
  import MainComp from './main/MainComp.vue';

  export default {
    name: 'DashboardComp',
    components: {
      HeaderComp,
      AsideComp,
      MainComp
    }
  }
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
  }

  section {
    display: flex;
  }
</style>