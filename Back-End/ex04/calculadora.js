const ERROR = 'ERROR';
const MENSAGEM_ERRO = "Não é possivel fazer o calculo"

// function adicao(n1, n2) {
//     let resultado = Number(n1)+Number(n2)
//     return resultado;
// }
// function multiplicao(n1, n2) {
//     let resultado = Number(n1)*Number(n2)
//     return resultado;
// }
// function subtracao(n1, n2) {
//     let resultado = Number(n1)-Number(n2)
//     return resultado;
// }
// function divisao(n1, n2) {
//     if (n2 == 0) {
//         return 'ERROR';
//     }
//     let resultado = Number(n1)/Number(n2)
//     return resultado;
// }
    
// const adicao = function (n1,n2) {
//     const resultado = Number(n1)+Number(n2)
//     return resultado;
// }
// const multiplicao = function (n1,n2) {
//     const resultado = Number(n1)*Number(n2)
//     return resultado;
// }
// const subtracao = function (n1,n2) {
//     const resultado = Number(n1)-Number(n2)
//     return resultado;
// }
// const divisao = function (n1,n2) {
//     if (n2 == 0) {
//         return 'ERROR';
//     }
//     const resultado = Number(n1)/Number(n2)
//     return resultado;
// }
const adicao = (n1,n2) => Number(n1)+Number(n2);
const multiplicacao = (n1,n2) => Number(n1)*Number(n2);
const subtracao = (n1,n2) => Number(n1)-Number(n2);
const divisao = (n1,n2) => {
    if (n2 == 0) {
        return ERROR;
    }
    const resultado = Number(n1)/Number(n2)
    return resultado;
};

const resultadoAdicao = adicao(10,10);
const resultadoMultiplicao = multiplicacao(10,10);
const resultadoSubtracao = subtracao(10,10);
let resultadoDivisao = divisao(10,10);
resultadoDivisao = resultadoDivisao != ERROR ? resultadoDivisao : MENSAGEM_ERRO;
console.log(`O resultado da adição foi: ${resultadoAdicao}`);

console.log(`O resultado da multiplição foi: ${resultadoMultiplicao}`);

console.log(`O resultado da subtração foi: ${resultadoSubtracao}`);

console.log(`O resultado da divisão foi: ${resultadoDivisao}`);
