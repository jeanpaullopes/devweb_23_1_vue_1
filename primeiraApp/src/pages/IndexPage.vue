<template>
  <q-page class="flex flex-center">
    <input v-model="arrContatos[0].email"/>
    <button @click="incluir">+</button>
    <card-contato texto="texto" :contato="cont" v-for="cont in arrContatos" v-bind:key="cont.fone"/>
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

export default defineComponent({
  components: { CardContato },
  name: 'IndexPage',
  methods: {
    incluir() {
      this.arrContatos.push( {nome: "Recruta", email: "recruta@penguinsmadagascar.com", fone: "666.666"} )
    }
  },
  data(){
    return {
      andrinel: {
                  nome: "Andrinel Rodriguez",
                  sobrenome: "Rodrigez",
                  fone: "11 123155",
                  email: "andrinel@gmail.com"
                },
      arrContatos: [
                {
                    nome: "Andrinel Rodriguez",
                    sobrenome: "Rodrigez",
                    fone: "11 123155",
                    email: ""
                },
                {
                    nome: "João2",
                    sobrenome: "Silva2",
                    fone: "55 55555.55552",
                    email: "joaosilva2@gmail.com"
                },

                {
                    nome: "João3",
                    sobrenome: "Silva",
                    fone: "55 55555.5555",
                    email: "joaosilva@gmail.com"
                },
                {
                    nome: "João4",
                    sobrenome: "Silva2",
                    fone: "55 55555.552",
                    email: "joaosilva2@gmail.com"
                }]
    }
  }
})
</script>
