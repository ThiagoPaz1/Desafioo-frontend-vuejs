<template>
  <div>
    <form>
      <input v-model="textCep" type="text" placeholder="Insira o CEP">
      <span @click="AddCep">
        <img src="../../assets/img/icone-plus.svg" alt="icone de plus">
        <h6>Adicionar endereço</h6>
      </span>
    </form>
    <ul>
      <li :key="i" v-for="(cep, i) in listCeps">
        <img src="../../assets/img/icone-lugar.svg" alt="icone lugar">
        <span>
          <h3>CEP</h3>
          <h3>{{ cep }}</h3>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'AddCeps',
    data() {
      return {
        textCep: '',
        listCeps: [],
      }
    },
    methods: {
      AddCep() {
        const { commit } = this.$store;

        if (this.textCep) {
          this.listCeps.push(this.textCep);
          this.textCep = '';
          commit('newCeps', this.listCeps);
        } 
      }
    }
  }
</script>

<style scoped>
  form {
    display: flex;
  }

  form input {
    width: 293px;
    height: 48px;
    padding-left: 16px;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    color: #75818C;
    border: 2px #BBC4CE solid;
    border-radius: 10px;
  }

  form span {
    display: flex;
    width: 293px;
    height: 52px;
    margin-left: 24px;
    color: white;
    background-color: #B600EE;
    border-color: #B600EE;
    border-radius: 10px;
    cursor: pointer;
  }

  span img {
    align-self: center;
    width: 30px;
    height: 30px;
    margin-left: 33.5px;
  }

  span h6 {
    align-self: center;
    font-weight: 700;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 13px;
  }

  /* LISTA DE CPF ADICIONADOS */
  ul {
    margin-top: 30px;
  }

  li {
    display: flex;
    margin-top: 16px;
    list-style: none;
  }

  li img {
    align-self: center;
    width: 40px;
    height: 40px;
  }

  li span {
    display: flex;
    margin-left: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    font-size: 20px;
  }

  span h3 {
    margin-top: 7px;
    color: #20272C;
  }

  span h3 + h3 {
    margin-left: 7.5px;
    color: #A4A4A4;
  }
</style>