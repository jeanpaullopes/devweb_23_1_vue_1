<template>
  <q-card class="card q-ma-md q-pa-sm bg-secondary text-white">
    <q-card-section>
    <h5>{{ texto }}</h5>
    nome:<br/>
    {{contato.nome}}<br/>
    Fone: <br/>
    {{contato.fone}}<br/>
    <span v-show="contato.email != ''">
      email:<br/>
      {{contato.email}}
    </span>
    </q-card-section>
    <q-separator />
    <q-card-actions vertical>
        <q-btn flat>Action 1</q-btn>
        <q-btn flat @click="excluir(contato.id)">Excluir</q-btn>
      </q-card-actions>

  </q-card>
</template>

<script>
import servicos from 'src/services';
export default {
  props:{
    texto: String,
    contato: Object
  },
  methods: {
    excluir(id) {
      //console.log("excluir o id: "+id)
      this.$emit('excluir', id)

    }
  }

}
</script>

<style>
 .card {
  height: 50vh;
  max-height: 50vh;
  min-height: 50vh;
  overflow: hidden;

 }
</style>
