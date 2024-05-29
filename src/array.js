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

//Com o ecma script 6, usamos o forEach que faz a mesma coisa mas precisa usar o segundo argunto que é indice do item atual.

redesSociais.forEach(function(nomeDaRedeSocial, indice){
    console.log(`#${indice}Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})

//retorno
// #0Eu tenho perfil na rede social: Facebook
// #1Eu tenho perfil na rede social: Instagram
// #2Eu tenho perfil na rede social: Twitter