const http = require('http')

const servidor = http.createServer()

const porta = 5000

servidor.listen(porta, ()=>{
    console.log('')
})