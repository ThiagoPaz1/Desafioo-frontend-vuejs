<template>
  <header class="headerStyle">
    <section>
      <img class="imgLogo" src="../assets/img/logo.svg" alt="logo">
      <div>
        <h3>Surreal São Paulo</h3>
        <h6>VTEX</h6>
      </div>
    </section>
    <section>
      <img class="imgBell" src="../assets/img/icone-bell.svg" alt="icone de sino">
      <div>
        <h3>Olá, Joaquim</h3>
        <img src="../assets/img/usuario.svg" alt="usuario">
      </div>
    </section>  
  </header>
</template>

<script>
  export default {
    name: 'HeaderComp'
  }
</script>

<style scoped>
  /* GERAL */
  .headerStyle {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    background-color: #9206E9;
  }

  .headerStyle section {
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    color: white;
  }

  /* SECTION 1 */
  .imgLogo {
    width: 50px;
    height: 50px;
    margin-left: 24px;
    margin-top: 14px;
    margin-right: 24px;
  }

  .imgLogo + div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 287px;
    height: 58px;
    margin-top: 10px;
    border: 2px solid #FFFFFF;
    border-radius: 10px;
  }

  .imgLogo + div h3 {
    margin-left: 16px;
  }

  .imgLogo + div h6 {
    margin-left: 16px;
  }

  /* SECTION 2 */
  .imgBell {
    width: 28px;
    height: 28px;
    margin-top: 28px;
    margin-right: 37.33px;
  }

  .imgBell + div {
    display: flex;
    height: 80px;
    border-left: 2px #9F81F7 solid;
  }

  .imgBell + div h3 {
    padding-left: 31px;
    margin-top: 29px;
    margin-right: 16px;
  }

  .imgBell + div img {
    width: 54px;
    height: 54px;
    margin-top: 13px;
    margin-right: 56px;
    margin-bottom: 13px; 
  }
</style>