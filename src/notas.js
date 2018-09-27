console.log("Modulo de notas")

const Note = {
  title:"title",
  body:"body",
  Note: (title,body) => {
    this.title=title
    this.body=body
  }
}
var devolver

const addNote = (title,body)=> {
  var nota = Note.Note(title,body)
  console.log(nota.title)
  devolver = `He a añadido la nota con titulo: ${title}\ny cuerpo: ${body}`
  return devolver
}

const removeNote = (title) => {
  
  devolver = `Voy a eliminar la nota con titulo: ${title}`
  return devolver
}

const readNote = (title) => {
  
  devolver = `Voy a leer la nota con titulo: ${title}`
  return devolver
}

const listNotes = () => {
  
  devolver = `Voy a leer todas las notas`
  return devolver
}

module.exports = {
  addNote,
  removeNote,
  readNote,
  listNotes
}