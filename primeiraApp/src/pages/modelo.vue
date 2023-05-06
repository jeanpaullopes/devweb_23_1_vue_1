
<template>

</template>

<script>
export default {
  name: "NomeDoComponente",
  components:{},
  props: {
    nomeTag: Object
  },
  data(){
    return {
      dadoLocal: Object
    }
  },
  methods: {
    metodo1() {}
  },
  created() {
    // é chamado quando o objeto é criado
  },
  mounted() {
    // chamado quando o componente é montado
  },
  computed:{
    atributosComputados() {
      return valorComputado
    }
  }
}
</script>

<style>

</style>
