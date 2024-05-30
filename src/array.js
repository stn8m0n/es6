const redesSociais = ['Facebook', 'Instagram', 'Twitter'];      /*criando um array para teste*/
                                                                /* o for abaixo é para criar uma string Dizendo que vc tem um rede social em...*/
for(let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}

// Explicação do for:
// i é o indice, inicio de um array, ai começamos acontar por 0 1 e 2 (nesta caso de 3 itens).
//sendo assim quando o i é 0, o i é facebook, e por isso a gente i++ incrementa ele, a passar a primeira vez o i assume o primeiro valor 1 e passa a ser Instagram e assim ele segue
//até que o i seja menor que a quantidade de itens que temos no array. O Array ..length vai te dar os 3 resultados enquanto o i for menor que TAMANHO array da nossa const REDESSOCIAS,
//por isso o  i < redesSociais.length, nome deste processo = laço, iteração pelo array.

//Com o ES EcmaScript 6, usamos o forEach que faz a mesma coisa mas precisa usar o segundo argunto que é indice do item atual.

redesSociais.forEach(function(nomeDaRedeSocial, indice){
    console.log(`#${indice}Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})

//retorno
// #0Eu tenho perfil na rede social: Facebook
// #1Eu tenho perfil na rede social: Instagram
// #2Eu tenho perfil na rede social: Twitter

// Método Map
//Podemos literar por um array,

//const alunos = ['Maicon','Tatiane', 'Andressa', 'Jessica']; //'' sãu usados pq o conteudo da variavel é uma string. '' Não é necessário para numeros INT
//e apartir disso criar um novo array

//const alunos2 =  alunos.map(function(itemAtual){
//    itemAtual = {
//        nome: itemAtual, //aqui quando usamos item atual ele ainda se referencia com as string do array alunos 'Maicon'...
//        curso: 'FrontEnd' //atribuindo o novo falor para aquela string,
//    }
//    return itemAtual; //e alunos2 sera a const que iremos criar para armazenar tudo isso aqui.
//})

//itemAtual = {
//     nome: itemAtual,
//     curso: 'FrontEnd'
// } isso daqui é um objeto liberal e nesta função que iremos transformas as strings acima em objetos.
//console.log(alunos2);

//Retorno
// [
//     { nome: 'Maicon', curso: 'FrontEnd' },
//     { nome: 'Tatiane', curso: 'FrontEnd' },
//     { nome: 'Andressa', curso: 'FrontEnd' },
//     { nome: 'Jessica', curso: 'FrontEnd' }
//   ] Aqui nos temos o array dentro dos colchetes [], os objetos entre chaves {}, com as propriedades: Nome e Curso.

const numeros = [1, 2, 3, 4, 5];
const dobloDosNumeros = numeros.map(function (numeroAtual){
    numeroAtual = numeroAtual * 2;
    return numeroAtual;
})
console.log(dobloDosNumeros);

//retorno
//[ 2, 4, 6, 8, 10 ]
//Outro médoto é fazendo o calculo dentro do próprio return
// const numeros = [1, 2, 3, 4, 5];
// const dobloDosNumeros = numeros.map(function (numeroAtual){
//     return numeroAtual * 2;
// })
// console.log(dobloDosNumeros);

// //Podendo também ser atribuído no retorno de aluno
// const alunos2 =  alunos.map(function(itemAtual){
// return {
//     nome: itemAtual,
//     curso: 'FrontEnd'
// }
// })
// console.log(alunos2);

//procurar um item dentro de um array
const alunos = ['Maicon','Tatiane', 'Iara', 'Jessica'];
const alunos2 =  alunos.map(function(itemAtual){
return {
    nome: itemAtual,
    curso: 'EngFrontEnd'
}
})
console.log(alunos2);

//Função de buscar FIND
const maicon = alunos2.find(function(item){
    return item.nome == 'Maicon' // essa função retorna um booleano, TRUE OR FALSE (itemAtual.nome == 'Paula' = PREDICADO)
})
console.log(maicon)
//{ nome: 'Maicon', curso: 'EngFrontEnd' } Quando ele não encontra este predicado o retorno é UNDEFINED

//Outro método que não retorna o item, retorna o INDICE do item
const indiceDoIara = alunos2.findIndex(function(item){
    return item.nome == 'Iara' 
})
console.log(indiceDoIara)
// retorno 2
//findIndex quando não encontra o predicado buscado ao inves de retornar UNDEFINED, o retorno é de -1.

//Every
alunos2.push({
    nome: 'Lucio',
    curso: 'Backend'
})

const todosOsAlunoSaoDeEngFrontEnd = alunos2.every(function(item){ //item () é chamado de argumento
    return item.curso === 'EngFrontEnd' // o retorno será um valor booleano (SIM / NÃO) então temos que armazena-lo. const todosOsAlunos....
})

console.log(todosOsAlunoSaoDeEngFrontEnd);
//true 1 consulta.

const existeAlgumAlunoDeBackend = alunos2.some(function(item){
    return item.curso === 'Backend' && item.curso === 'EngFrontEnd' //usar mais de uma comparação, && item.curso === 'EngFrontEnd'
})
console.log(existeAlgumAlunoDeBackend);

//Filtrar , neste caso vamos filtrar os aluno de Backend
function filtraAlunosDeBackend(aluno){
    return aluno.curso === 'Backend';
}

const alunosDeBackend = alunos2.filter(filtraAlunosDeBackend) //function(item)
//     return item.curso === 'Backend';
// })
console.log(alunosDeBackend); //Esse tipo de função que executamos aqui chamamos de função anonima. Função que não recebe um nome.

//REDUCE , reduz o conteudo do array em um unico conteudo
const nums = [10, 20, 30, 10]

const soma = nums.reduce(function(acumulador, itemAtual){
    acumulador += itemAtual; //pega acumulado e incrementa com o itemAtual
    return acumulador;
    
}, 0) //depois da função colocar , e passar o valor inicial neste caso o 0, o acumulador vai ter como valor inicial o 0, vai passar pelo 10 e somar e sequir...ate somar todos os nmro do array

console.log(soma);

//Fazendo o acumuladar sem o babel com o for
let somaComFor = 0;

for (let i = 0; i < nums.length; i++){
    somaComFor += nums[i];
}

console.log(somaComFor);


//DIK DE OURO ESSAS CASOS AQUI CAEM EM ENTREVISTAS DE ARRAY.
// FOR EACH SO ITERA NÃO RETORNA NADA, DIFERENTE DO MAP.
//NO MAP A AGENTE CONSEGUE ITERAR NO ARRAY(COLOCAR +) FAZER MODIFICAÇÕES E AINDA RETORNAR O ARRAY MODIFICADO.
// FOREACH AQUI É O UNICO MÉTODO QUE NÃO RETORNA NADA.
//FIND PROCURAR.
//FIND INDEX RETORNO O INDICE DENTRO DE UM ARRAY
//EVARY SE TODOS OS ITEM DENTRO DO ARRAY SATISFAZEM UM PREDICADO.
//SOME PRECISA APENAS QUE UM ITEM SAFISTAÇA A CONDIÇÃO
//PASSANDO UM FUNÇÃO DIRETAMENTE COMO CALLBACK, ITEM QUE ESTA SENDO ITERADO.
//FILTER FILTRAR ITENS
//REDUCE PARA FAZER AGRAGAÇÃO DE VALORES,

const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual){
    acumulador += `${itemAtual.nome} `; // aqui o acumulador vai fazer uma concatenação as strings , somaria se num fossem. ` foi adicionada apaneas para dar um espaço entre eles.
    return acumulador
}, '') // retorno inicial será uma string vazia por isso so as ''.
console.log(nomesDosAlunos);
// Maicon Tatiane Iara Jessica Lucio