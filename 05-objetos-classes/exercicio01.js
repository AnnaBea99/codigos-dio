/*
    1- Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por KM rodado.
    Crie um método que dado a quantidade de KM e o preço do combustível nos dê o valor gasto
    em reais para realizar este percurso.

*/

class Carro{
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    calcularGasto (distanciaKM, precoCombustivel){
        return distanciaKM * this.gastoMedio * precoCombustivel;
    }
}

const classic = new Carro('Chevrolet', 'Preto', 1/15);
console.log(classic.calcularGasto(120, 5.6));

const astra = new Carro('Chevrolet', 'Prata', 1/17);
console.log(astra.calcularGasto(40, 5.6));