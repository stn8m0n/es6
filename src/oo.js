//Funções contrutoras Orientação a Objeto antigamente. Esta é uma função construtora
// function Pokemon(nome, tipo) {
//     this.nome = nome;
//     thistipo = tipo;
// }

// const pikachu = new Pokemon("Pikachu", "elétrico") //Pikachu instacia de 1 pokemon

//EcmaSCript6 podemos criar uma classe e não 1 construtor
//Não é mais uma função e passa a ser um objeto.
class Pokemon {  
    // nome = '';
    // tipo = '';
//quanto utilizado construtores não precisa inicializar com vazio, isso ocorre quando foi instaciado o objeto.
    constructor (nomeDoPokemon, tipoDoPokemon){
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }
    atacar(nomedoAtaque) {
        console.log(`${this.nome} atacou com ${nomedoAtaque}`)
    }
} 

class Pikachu extends Pokemon {

}

const pikachuDoAsh = new Pikachu('pikachu', 'elétrico');
const pikachu = new Pokemon('pikachu', 'elétrico');
// pikachu.atacar('choque do trovão')
// pikachu.nome = 'pikachu';
// pikachu.tipo = 'elétrico';

    console.log(pikachu);
    console.log(pikachuDoAsh);

    console.log(pikachuDoAsh instanceof Pikachu);

    //parei aqui 14:01