import express, { request } from 'express';

const server = express();
server.use(express.json);

server.get('/api/products', (request,response => {
    const {
        name,
        Sho
    } = request
    console.log('cheguei no get');
    return response.status(200).json({ message: '[GET] - Deu certo!'})
}))
server.post('/api/products', (request,response => {
    console.log('cheguei no post');
    return response.status(201).json({ message: '[POST] - Deu certo!'})
}))
server.put('/api/products', (request,response => {
    console.log('cheguei no put');
    return response.status(200).json({ message: '[PUT] - Deu certo!'})
}))
server.delete('/api/products', (request,response => {
    console.log('cheguei no delete');
    return response.status(204).json({ message: '[DELETE] - Deu certo!'})
}))

server.listen(1234);