// ------------ OBJETOS -------

const pessoa = {
    nome: 'Anna Beatriz',
    idade: 23,

    descrever: function (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
       
    }
};

const atributo = 'idade';

console.log(pessoa[atributo]);






/*
pessoa.descrever = function(){
    console.log(`Meu nome é ${this.nome}`);
}


pessoa.descrever();
*/


//CHAMANDO O OBJETO
/*
console.log(anna.nome);
console.log(anna.idade);
console.log(anna);
*/

//INCREMENTAR
//anna.altura = 1.72;

//console.log(anna);

//excluir algo do objeto

// delete anna.nome;