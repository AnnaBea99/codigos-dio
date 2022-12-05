//----------------------- CLASSES ------------------------

class Pessoa{
    nome;
    idade;
    anoDeNasc;

    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNasc = 2022 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

//Instanciar a classe

//Exemplo 2
const anna = new Pessoa('Anna', 23);
const junior = new Pessoa('Junior', 23);

console.log(anna);

//Exempol 1
/*
const anna = new Pessoa();

anna.nome = 'Anna Beatriz';
anna.idade = 23;

const edson = new Pessoa();

edson.nome = 'Edson Junior';
edson.idade = 23;

anna.descrever();
edson.descrever();
*/