//variável boolean

/*const camisetaAnnaAzul = true;
const camisetaEdAzul = false;
*/

//Número par
// == ignora o tipo da váriavel
// === não converte valores em texto

//------------EXEMPLO 1 -----------
/*
const numero = 10;
const isNumeroPar = numero % 2 === 0;
//console.log(isNumeroPar);

//IF
if (isNumeroPar) {
  console.log("Par");
} else {
  console.log("Ímpar");
}
*/

//------------EXEMPLO 2 -----------

const numero = 0;
const NumeroDivisivelPor5 = numero % 5 === 0;
//console.log(NumeroPar);

//IF
if (numero === 0) {
  console.log("O número é inválido");
} else if (NumeroDivisivelPor5) {
  console.log("Sim");
} else {
  console.log("Não");
}
