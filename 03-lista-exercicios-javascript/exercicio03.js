/*
 3) Elabore um algoritmo que caulcule o que deve ser pago por um produto,considerando o preço normal de etiqueta e a escolha da condição de pagamento.
 Utilize os códigos da tabela a seguir para ler qual a condição de pagamneto escolhida e efetuar o cálculo adequado.

 Códico condição de pagamento:
 - À vista débito, recebe 10% de desconto;
 - À vista dinheiro ou Pix, recebe 15% de desconto;
 - Em duas vezes, preço normal de etiqueta sem juros;
 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const valor = 100;
const FormaPag = 4;

if(FormaPag === 1){
    console.log("Pagamento Débito " + valor - (valor * 0.1));

}else if(FormaPag === 2){
    console.log("Pagamento Dinheiro ou Pix " + valor - (valor * 0.15));

}else if(FormaPag === 3){
    console.log("Parcelado em 2 vezes de: " + valor / 2);
    

}else if(FormaPag === 4){
    const valorJuros = valor * (10 / 100);
    const valorFinal = valor + valorJuros;
    console.log("Pagamentocom 10 % de juros: " + valorFinal);
    
}
