
const argv = require('./config/yargs').argv
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const colors = require('colors')


// console.log(process.argv)

// let argv2 = process.argv

// console.log(argv.base)
// console.log('Límite', argv.limite)
// let parametro = argv[2]
// let base = parametro.split('=')[1]

// console.log(base)


let comando = argv._[0]

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(lista => console.log(lista))
            .catch(e => console.log(e))
        break
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch(e => console.log(e))
        break
    default:
        console.log('Comando no reconocido')
}

