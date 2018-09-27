console.log("Este programa sirve para guardar tus notas")

const notas = require ('./notas')
const añadirNota = notas.addNote
const eliminarNota = notas.removeNote
const leerNota = notas.leerNotas
const leerTodas = notas.listNotes

var { argv } = require('yargs')

var command = argv._[0]

if (command ==="add") {
  añadirNota(argv.title, argv.body)

} else if (command ==="remove"){

} else if (command ==="read"){
  
} else if (command ==="all"){
  
} else {
  console.log ("Comando no reconocido")
}
