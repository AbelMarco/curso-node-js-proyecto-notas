console.log("Modulo de notas")
const fs = require ('fs')
let jsonNotes = []
var stringNotes = fs.readFileSync('./src/notas.json')
try {
 jsonNotes = JSON.parse(stringNotes)
} catch (error) {

}
var devolver

const addNote = (title,body)=> {
  const note = {
    title,
    body
  }
  jsonNotes.push(note)
  fs.writeFileSync('./src/notas.json', JSON.stringify(jsonNotes))
  devolver = `He a añadido la nota con titulo: ${title}\ny cuerpo: ${body}`
  return devolver
}

const removeNote = (title) => {
  
  devolver = `Voy a eliminar la nota con titulo: ${title}`
  return devolver
}

const readNote = (title) => {
  
  devolver = `Te he leido la nota con titulo: ${title}`
  return devolver
}

const listNotes = () => {
  console.log(jsonNotes)
  for (var key in jsonNotes) {
    console.log(`Titulo: ${jsonNotes[key].title}\nCuerpo: ${jsonNotes[key].body}`)
  }
  devolver = `Te he leido todas las notas`
  return devolver
}

module.exports = {
  addNote,
  removeNote,
  readNote,
  listNotes
}