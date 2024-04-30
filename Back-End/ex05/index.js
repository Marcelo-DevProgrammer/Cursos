const express = require('express')

const server = express()

server.get('/usuarios', (request, response) => {
    const usuarios = [
        {nome: 'Eduardo'},
        {nome: 'Israel'},
        {nome: 'Izabella'}
    ]
    return response.send(usuarios);
})



server.listen(3000)

