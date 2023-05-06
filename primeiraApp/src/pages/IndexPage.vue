<template>
  <q-page class="flex flex-center">
    <!--<input v-model="arrContatos[0].email"/>
    -->
    <button @click="incluir">+</button>

    <card-contato texto="texto" :contato="cont"
    v-for="cont in arrContatos" v-bind:key="cont.id"
    @excluir="exclusao"
    />
    <!--
      <input v-model="arrContatos[2].nome"/>
    <card-contato texto="contato 1" :contato="andrinel"/>
    <card-contato texto="contato 2" :contato="arrContatos[2]"/>
    -->
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import CardContato from '../components/CardContato.vue'
import services from '../services'

export default defineComponent({
  components: { CardContato },
  name: 'IndexPage',

  data(){
    return {
      arrContatos: []
    }
  },
  created() {
    services.getAllContatos( (dados) =>this.arrContatos = dados )

  },
  methods:{
    incluir() {
      let tmp = {id: 0, nome: "Recruta", email: "recruta@penguinsmadagascar.com", fone: "666.666"}
      services.saveContato(tmp, (dado)=> this.arrContatos.push(dado))
      console.log(tmp)

    },
    exclusao(arg1) {
      alert("na exlcusão "+arg1)
      services.deleteContato(arg1)
      let tmp = []
      this.arrContatos = this.arrContatos.filter(cnt => cnt.id != arg1)

    }
  }
})
</script>
