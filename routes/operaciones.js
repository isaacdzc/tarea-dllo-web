const express = require('express')
const enrutador = express.Router()

// const app = express()
// const port=3000

module.exports = enrutador

enrutador.get('/suma/:n1/:n2', (request, response) => {
    let n1 = request.params.n1
    let n2 = request.params.n2
    let suma = parseFloat(n1+n2)
    let json ={datos: "Suma de dos numeros y su resultado", numero1: n1, numero2: n2, suma}
    response.send(json)
})

enrutador.get('/resta/:n1/:n2', (request, response) => {
    let n1 = request.params.n1
    let n2 = request.params.n2
    let resta = parseFloat(n1-n2)
    let json ={datos: "Resta de dos numeros y su resultado", numero1: n1, numero2: n2, resta}
    response.send(json)
})

enrutador.get('/multiplicacion/:n1/:n2', (request, response) => {
    let n1 = request.params.n1
    let n2 = request.params.n2
    let multiplicacion = parseFloat(n1*n2)
    let json ={datos: "Multiplicación de dos numeros y su resultado", numero1: n1, numero2: n2, multiplicacion}
    response.send(json)
})

enrutador.get('/division/:n1/:n2', (request, response) => {
    let n1 = request.params.n1
    let n2 = request.params.n2
    let json
    if(n2 != 0){
        let division = parseFloat(n1/n2)
        json ={datos: "Resta de dos numeros y su resultado", numero1: n1, numero2: n2, division}
    }else{
        json ={datos: "No hay division por cero", numero1: n1, numero2: n2}
    }
    response.send(json)
})
