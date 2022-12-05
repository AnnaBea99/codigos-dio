
function escreverNome(nome){
    return nome;
}

// escreverNome('Anna');


function verificaIdade(idade){
    if (idade >= 18) {
        console.log(escreverNome('Anna') +' é maior de idade!');
    }else{
        console.log('É menor de idade')
    }
}

verificaIdade(23);