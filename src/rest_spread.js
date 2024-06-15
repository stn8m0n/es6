const { log } = require("console");

function somar () {
    let soma = 0;

    for ( let i=0; i< arguments.length; i++){
        soma += arguments[i];
    }

    return soma;

    // arguments.map
    // console.log(arguments)
    // return a + b + c;
}

console.log (somar(10, 20, 30))

//Somando com REST
//Obervações não podemos ter dois argumento utilizando o Rest
//É necessário buildar antes de chamar o argumento, pq neste caso ele é um elemento do ecma, rest.


function somarComRest (...numeros){
    const soma = numeros.reduce((total, numeroAtual) =>{
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log( somarComRest(10, 20, 30))

//SPREAD
//Usado para fazer concatenações, console.log, preenchimento de objetos.
//Podemos destribuir/espalhar os dados de um array ou objeto.
const numeros = [1,2,3,4]
console.log(...numeros)

//Concatenando
const timesDeFutebolDeSp = ['santos', 'palmeiras', 'bragantino', 'sao paulo'];
const timesDeFutebolDoRio = ['vasco', 'botafogo', 'flamengo', 'fluminense'];

//const timesDeFutebol = timesDeFutebolDeSp.concat(timesDeFutebolDoRio);
const timesDeFutebol = [...timesDeFutebolDeSp, ...timesDeFutebolDoRio];

console.log(timesDeFutebol)

//Copiando atributos e subescrevendo 1 deles
const carroDaJulia = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}

const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8
}

console.log(carroDaAna);

//Desestruturação
//const motorDoCarroDaAna = carroDaAna.motor;
const {motor: motorDoCarroDaAna} = carroDaAna;
const {motor: motorDoCarroDaJulia} = carroDaJulia;

console.log(motorDoCarroDaAna);
console.log(motorDoCarroDaJulia)

//Desestruturação de um array
const [item1, item2, item3, ...outroTimes] = timesDeFutebol;

console.log(item1)
console.log(item2)
console.log(item3)
console.log(outroTimes)