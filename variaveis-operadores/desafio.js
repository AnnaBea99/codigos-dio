//DESAFIO 1
/*
    Faça um programa para calcular o valor de uma viagem.

    Terá 3 variáveis. Sendo elas:
    1- Preço do combustível;
    2- gasto médio de combustível do carro por KM;
    3- Distância em KM da viagem;

    Imprima no consle o valor que será gasto de combustível para realizar esta viagem.
 */

let valor_combus = 5.6;
let gasto_medio = 1 / 10;
let distancia = 150;

let total = distancia * gasto_medio * valor_combus;

console.log(total.toFixed(2));
