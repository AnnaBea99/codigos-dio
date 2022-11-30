/* -----------EXERCICIO 1-------------
1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a sua média e sua classificação conforme a tabela abaixo:

Média = (nota1 + nota2 + nota3) / 3;

Classificação:
-Média menor que 5, reprovado;
-Média entre 5 e 7, recuperação;
-Média acima de 7, passou de semestre;
*/

const nota1 = 7;
const nota2 = 8;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;

if(media < 5){
    console.log('REPROVADO');

}else if((media >= 5) && (media <= 7 )){
    console.log('RECUPERAÇÃO');

}else if(media > 7){
    console.log('APROVADO!')

}
console.log(media)