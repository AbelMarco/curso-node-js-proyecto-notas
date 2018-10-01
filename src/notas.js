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
  const duplicado = jsonNotes.filter((notes) => notes.title === title)
  if (!duplicado.length){
    jsonNotes.push(note)
    fs.writeFileSync('./src/notas.json', JSON.stringify(jsonNotes))
    devolver = `He a añadido la nota con titulo: ${title}\ny cuerpo: ${body}`
  } else {
    devolver = `Ya existe una nota con el titulo: ${title}`
  }
  return devolver
}

const removeNote = (title) => {
  

  const duplicado = jsonNotes.filter((notes) => notes.title !== title)
  if (duplicado.length === jsonNotes.length){
    devolver= `No existe nota con titulo ${title}`
  } else {
    fs.writeFileSync('./src/notas.json', JSON.stringify(duplicado))
    devolver = `He eliminado la nota con titulo: ${title}`
  }
  
  
  
  
  return devolver
}

const readNote = (title) => {
  
  const duplicado = jsonNotes.filter((notes) => notes.title === title)
  if (!duplicado.length){
    devolver= `No existe nota con titulo ${title}`
  } else {
    for (var key in duplicado){
      console.log (`Nota número: ${parseInt(key+1)}`)
      console.log(`Titulo: ${duplicado[key].title}\ny Cuerpo: ${duplicado[key].body}`)
    }
    devolver = `Te he leido la nota con titulo: ${title}`
  }
  return devolver
}

const listNotes = () => {
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