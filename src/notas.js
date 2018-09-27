console.log("Modulo de notas")

const addNote = (title,body)=> {
  console.log("Voy a añadir una nota")
  console.log(`${title} \n${body}`) 
}

const removeNote = (id) => {
  console.log("Voy a eliminar una nota")
  console.log(id)
}

const readNotes = (id) => {
  console.log("Te voy a enseñar las nota que has pedido")
  console.log(id)
}

const listNotes = () => {
  console.log("Te voy a enseñar las notas que hay hasta ahora")
}

module.exports = {
  addNote,
  removeNote,
  readNotes,
  listNotes
}