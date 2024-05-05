import express, { response } from 'express';
import {soma, subtracao, divicao, mutiplicacao} from './services/calculadora.js';

const app = express();
app.use(express.json());

app.get('/api/calculo/:valor', (request, response) => {
    return response.status(200).json({message:})
})

app.post('/api/calculo', (request, response) => {
    if (request.body.operacao == "+") {
        resultado: soma(request.body.n1, request.body.n2) 
    }
    else if  (request.body.operacao == "-") {
        resultado: subtracao(request.body.n1, request.body.n2) 
    }
    else if (request.body.operacao== "*") {
        resultado: mutiplicacao(request.body.n1, request.body.n2) 
    }
    else if (request.body.operacao== "/") {
        resultado: divicao(request.body.n1, request.body.n2) 
    }
})