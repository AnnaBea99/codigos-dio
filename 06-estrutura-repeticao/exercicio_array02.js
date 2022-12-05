// 2 - Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const numeros = [1, 2 , 4, 9, 14, 20, 50, 35, 47, 100];


for(let i = 0; i < numeros.length; i++){
    let numero = numeros[i];

    let restoDivsao = numero % 2;

    if(restoDivsao === 0){
        console.log(numero);
    }
    
}
