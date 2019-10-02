
// requireds
const fs = require('fs');
// const fs = require('express');
// const fs = require('./fs');
const colors = require('colors')


let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido '${base}' no es un número`)
            return
        }

        console.log('========================='.green)
        console.log(`Tabla del ${base}`.green)
        console.log('========================='.green)

        let data = ''
    
        for (let i = 1; i < limite + 1; i++) {
            data += `${base} * ${i} = ${base * i}\n`
        }

        resolve(data)
    })
}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido '${base}' no es un número`)
            return
        }

        let data = ''

        for (let i = 1; i < limite + 1; i++) {
            data += `${base} * ${i} = ${base * i}\n`
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
          if (err)
            reject(err)
          else 
              resolve(`tabla-${base}.txt`)
        })
    })
}


module.exports = {
    crearArchivo,
    listarTabla
}