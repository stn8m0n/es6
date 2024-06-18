//MAP retorna todos seus valores e suas chaves
let meuMap = new Map();
meuMap.set("nome", "maicon");
meuMap.set("stack", "html, css, js");

console.log(meuMap);

//recuperação de item, GET retorno do valor, retorno de uma determinada chave.
const nome = meuMap.get("nome");
console.log(nome);

//Recuperar a quantidade de item de um map. Utilizamos o atributo size
console.log(meuMap.size)

//consultar se uma chave existe dentro de um método "quadrado roxo = método/função, retangulo azul = propriedade atributo.
console.log(meuMap.has("sobrenome"))

//função para fazer a limpeza do map todos os item de dentro
//meuMap.clear()
console.log(meuMap.size)

//fazer um for, buscar todas as chaves que vc tem no seu map = dois "nome e stack".
for (let chave of meuMap.keys()){
    console.log(chave);
}

//para buscar os valores substituir keys por values = "html, css, js"
for (let valor of meuMap.values()){
    console.log(valor);
}

//criar entradas
for (let entrada of meuMap.entries()){
    console.log(entrada);
}

//criar entradas sumultanêas, desestruturação troca chaves por um array, colocar a template string exemplo: `${chave}`
for (let [chave, valor] of meuMap.entries()){
    console.log(`${chave}: ${valor}`);
}

//Finalizar a parte de MAP, como remover um item dentro de map
meuMap.delete("stack");
console.log(meuMap);



//SET
//É mais rigido e nao a estrutura chave e valor. Valores não podem se repetir, um numero não pode começar com um 0 a esquerda
//neste caso ele deve ser declarado como uma string, no set chaves e valores são iguais pois ele é uma coleção de valores únicos sem pares de chave-valor.
const cpfs = new Set();
cpfs.add(14720814042)
cpfs.add(73466455022)
cpfs.add('01954579004')

console.log(cpfs);
console.log(cpfs.keys());
console.log(cpfs.values());

//forEach
// O método forEach é utilizado para executar uma função específica para cada elemento do Set.
// No caso do Set, a função é chamada uma vez para cada valor presente no conjunto.
// A função passada para o forEach recebe três argumentos:
cpfs.forEach((valor) => {
    console.log(valor);
})

//Set como não recebe valores duplicados podemos sem criar um for, adicionar apenas os valores únicos
const array = ['Maicon', 'Luan', 'Maria', 'Benedita', 'Luan', 'Maria']
const arrayComoSet = new Set ([...array])
const arraySemItensDuplicados = [...arrayComoSet] //Como converter um SET em um ARRAY
console.log(arrayComoSet)
console.log(arraySemItensDuplicados)

//Para destinguir um array de um set na apresentação de valores
// array []
// set {}


