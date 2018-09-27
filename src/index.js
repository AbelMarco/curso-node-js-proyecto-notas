console.log("Este programa sirve para guardar tus notas")

const notas = require ('./notas')
const añadirNota = notas.addNote
const eliminarNota = notas.removeNote
const leerNota = notas.readNote
const leerTodas = notas.listNotes

var { argv } = require('yargs')

var command = argv._[0]

if (command === 'add' ) {
  console.log (añadirNota(argv.title, argv.body))
} else if (command === 'remove' ){
  console.log (eliminarNota(argv.title))
} else if (command === 'read' ){
  console.log (leerNota(argv.title))
} else if (command === 'all' ){
  console.log (leerTodas())
} else {
  console.log ('Comando no reconocido')
}
