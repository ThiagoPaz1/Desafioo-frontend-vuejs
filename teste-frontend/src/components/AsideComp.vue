<template>
  <aside>
    <div>
      <img src="../assets/img/icone-busca.svg" alt="icone de busca">
      <img src="../assets/img/icone-folder2.svg" alt="icone de pasta">
    </div>
    <img src="../assets/img/icone-ajuste.svg" alt="icone de ajuste">
  </aside>
</template>

<script>
  export default {
    name: 'AsideComp',
  }
</script>

<style scoped>
  aside {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 96px;
    height: 488px;
    background-color: #F7F7F7;
  }

  div {
    display: flex;
    flex-direction: column; 
  }

  div img {
    align-self: center;
    width: 33px;
    height: 33px;
  }
  div img:first-child {
    margin-top: 30px;
  }

  div img + img {
    margin-top: 50px;
  }

  div + img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
    background-color: #20272C;
    border-radius: 5px;
  }
</style>