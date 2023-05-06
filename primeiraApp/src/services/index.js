
import apiSexta from "./api"
const servicos = {
  getAllContatos( callbackFnc ) {
    apiSexta.get('contatos').then(resposta => {
      if (callbackFnc != undefined) {
        callbackFnc(resposta.data)
      }
    })
  },
  saveContato(contato, callback ) {
    console.log(contato)
    apiSexta.post('contatos', contato).then( resposta =>{
      if (callback != undefined) {
        callback(resposta.data)
      }
    })
  },
  deleteContato(id) {
    apiSexta.delete("contatos/"+id).then(resposta=>console.log(resposta.data))
  }
}

export default servicos
