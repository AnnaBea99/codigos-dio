//Desafio 02

/*
    Faça um programa para calcular o valor de uma viagem.

    Terá 5 variáveis. Sendo elas:
    1- Preço do etanol;
    2- Preço da gasolina
    3- Tipo de combustivel que está no carro 
    4- Gasto médio de combustível do carro por KM;
    5- Distância em KM da viagem;

    Imprima no consle o valor que será gasto de combustível para realizar esta viagem.
*/

const PrecEtanol = 3.8;
const PrecGasolina = 5.6;
const gasto_medio = 1/10;
const Distancia = 100;
let carro = "gasolina";

if (carro === "etanol") {
  total = (Distancia * gasto_medio) * PrecEtanol;
} else if (carro === "gasolina") {
  total = (Distancia * gasto_medio) * PrecGasolina;
}

console.log(total)
