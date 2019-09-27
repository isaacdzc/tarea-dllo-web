const express = require('express')
const app = express()
const port=3000

const enrutadorOperaciones = require('./routes/operaciones.js')

app.use('/', (request, response, next) => {
    console.log("Paso por acá")
    next()
})

// app.use('/calcular/:n1/:n2', (request, response) => {
//     console.log(request)
//     let n1 = request.params.n1
//     let n2 = request.params.n2
//     console.log(n1)
//     console.log(n2)
//     let suma = parseInt(n1+n2)
//     let json ={datos: "Suma de dos numeros y su resultado", numero1: n1, numero2: n2, suma}
//     response.send(json)
// })

app.use(enrutadorOperaciones)

app.use('/', (request, response, next) => {
    console.log("No se encontró")
    response.status(404).send("No fue posible encontrarlo")
})

app.listen(port, ()=>{
    console.log("Mi API corre en: http://localhost:"+port)
})