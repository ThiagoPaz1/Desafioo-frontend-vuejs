<template>
  <div>
    <section class="content-btnGenerate">
      <span @click="generateAddress" class="btn-generate">
        <h6>Gerar endereços</h6>
      </span>
      <h1>{{ message }}</h1>
    </section>
    <hr>
    <ul>
      <li :key="i" v-for="(item, i) in listAddress">
        <section>
          <img src="../../assets/img/icone-lugar.svg" alt="icone de lugar">
          <div>
            <h3>{{ item.logradouro }}</h3>
            <h6>{{ item.localidade }} - {{ item.uf }}</h6>
          </div>
        </section>
        <section>
          <span> 
            {{ item.cep }} 
          </span>
          <img src="../../assets/img/icone-lixo.svg" alt="icone de lixo">
        </section>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';
 
  export default {
    name: 'ListAdress',    
    data() {
      return {
        listAddress: [],
        message: '',
      }
    },
    methods: {
      generateAddress() {
        const { ceps } = this.$store.state;
        const notFound = 'Não a CEPs na lista, adicione CEPs, para gerar endereços';

        if (!ceps.length) {
          return this.message = notFound;
        }

        for (let i in ceps) {
          axios.get(`https://viacep.com.br/ws/${ceps[i]}/json/`)
          .then(({ data }) => {
            this.listAddress.push(data);
          })
          .catch(() => console.log('Erro'));
        }
      }
    }
  }
</script>

<style scoped>
  .content-btnGenerate {
    display: flex;
    justify-content: flex-end;
    margin-top: 40px;
  }

  .btn-generate {
    display: flex;
    width: 292px;
    height: 52px;
    color: white;
    background: #B600EE;
    border-radius: 8px;
    cursor: pointer;
  }

  .btn-generate h6 {
    align-self: center;
    margin-left: 80px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    font-size: 16px;
  }

  hr {
    margin-top: 30px;
  }

  ul {
    margin-top: 25px;
  }

  li {
    display: flex;
    width: 550px;
    height: 100px;
    margin-top: 7.5px;
    box-shadow: 0px 4px 20px rgba(32, 39, 44, 0.1);
    list-style: none;
    border-radius: 8px;
  }

  li section:first-child {
    align-self: center;
    margin-left: 20px;
    color: #424E59;
  }

  li section:first-child img {
    width: 22px;
    height: 22px;
    margin-top: 7px;
    margin-left: 8px;
  }

  li section:first-child div {
    margin-left: 10px;
    font-family: Arial, Helvetica, sans-serif;
  }

  li section:first-child + section {
    display: flex;
    margin-left: 171px;
  }

  li section:first-child + section span {
    align-self: center;
    width: 80px;
    height: 22px;
    padding-right: 16px;
    font-weight: 400;
    font-size: 16px;
    color: #B600EE;
    border-right: 2px #E0E6EA solid;
  }

  li section:first-child + section img {
    align-self: center;
    width: 16.5px;
    height: 18.33px;
    margin-left: 23.75px;
  }
</style>