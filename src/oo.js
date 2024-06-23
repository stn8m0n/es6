//Funções contrutoras Orientação a Objeto antigamente. Esta é uma função construtora
// function Pokemon(nome, tipo) {
//     this.nome = nome;
//     thistipo = tipo;
// }

// const pikachu = new Pokemon("Pikachu", "elétrico") //Pikachu instacia de 1 pokemon

//EcmaSCript6 podemos criar uma classe e não 1 construtor
//Não é mais uma função e passa a ser um objeto.
//Para transformar um atributo em privado # ele só é acessado dentro da sua classe.
class Pokemon {  
    #hp = 100;
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

    recebeuAtaque() {
        this.#hp -= 10;
    }
    //criar um método que só ele irá acessar pokemon

    exibeHp() {
        console.log(this.#hp)
    }


} 
//Neste exemplo de pikachu nós fizemos a herança e o polimorfismo. Vamos criar um novo atributo na classe mãe
class Pikachu extends Pokemon {
    constructor(){
        super('Pikachu', 'Elétrico')
    }

    atacar(){
        console.log(`${this.nome} atacou com choque do trovão`)
    }

    recebeuAtaque(){
        this.hp -= 10;
    }
}

const pikachuDoAsh = new Pikachu();

pikachuDoAsh.recebeuAtaque();
pikachuDoAsh.hp = 5000; //essa função agora depois de ternar o hp privado, está criando e atribuindo um novo hp.

console.log(pikachuDoAsh.hp)

pikachuDoAsh.atacar()

pikachuDoAsh.exibeHp()

const pikachu = new Pokemon('pikachu', 'elétrico');
// pikachu.atacar('choque do trovão')
// pikachu.nome = 'pikachu';
// pikachu.tipo = 'elétrico';

    console.log(pikachu);
    console.log(pikachuDoAsh);

    console.log(pikachuDoAsh instanceof Pikachu);
    console.log(pikachuDoAsh instanceof Pokemon);

    