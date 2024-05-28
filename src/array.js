const redesSociais = ['Facebook', 'Instagram', 'Twitter'];      /*criando um array para teste*/
                                                                /* o for abaixo é para criar uma string Dizendo que vc tem um rede social em...*/
for(let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}

// Explicação do for:
// i é o indice inicia de um array, ai começamos  acontar por 0 1 e 2.
//sendo assim quando o i é 0, o i é facebook, e por isso a gente i++ incrementa ele, a passar a primeira vez o i assume o primeiro valor 1 e passa a ser Instagram e assim ele segue
//até finalizar o encremento adquirindo todo o indice deste array(o array redesSocias) 