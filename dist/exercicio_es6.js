"use strict";

// // Cria o array de objetos com nome e nota dos alunos
// const alunos = [
//     { nome: 'Ana', nota: 7 },
//     { nome: 'Bruno', nota: 5 },
//     { nome: 'Carlos', nota: 8 },
//     { nome: 'Daniela', nota: 6 },
//     { nome: 'Eduardo', nota: 4 }
//   ];

//   // Função para retornar alunos com nota maior ou igual a 6
//   const filtrarAlunosAprovados = (alunos) => {
//     return alunos.filter(aluno => aluno.nota >= 6);
//   };

//   // Chama a função e armazena o resultado
//   const alunosAprovados = filtrarAlunosAprovados(alunos);

//   // Exibe os alunos aprovados
//   console.log(alunosAprovados);

// com for

// Cria o array de objetos com nome e nota dos alunos

// const alunos = [
//     { nome: 'Ana', nota: 7 },
//     { nome: 'Bruno', nota: 5 },
//     { nome: 'Carlos', nota: 8 },
//     { nome: 'Daniela', nota: 6 },
//     { nome: 'Eduardo', nota: 4 }
//   ];

// Função para retornar alunos com nota maior ou igual a 6
//   const filtrarAlunosAprovados = (alunos) => {
//     return alunos.filter(aluno => aluno.nota >= 6);
//   };

//   // Chama a função e armazena o resultado
//   const alunosAprovados = filtrarAlunosAprovados(alunos);

//   // Exibe os alunos aprovados usando um loop for
//   let mensagem = 'Os alunos aprovados foram: ';
//   for (let i = 0; i < alunosAprovados.length; i++) {
//     mensagem += alunosAprovados[i].nome;
//     if (i < alunosAprovados.length - 1) {
//       mensagem += ', ';
//     }
//   }
//   mensagem += '.';

//   console.log(mensagem);

//case 2 com apresentação das notas

// Cria o array de objetos com nome e nota dos alunos
var alunos = [{
  nome: 'Ana',
  nota: 7
}, {
  nome: 'Bruno',
  nota: 5
}, {
  nome: 'Carlos',
  nota: 8
}, {
  nome: 'Daniela',
  nota: 6
}, {
  nome: 'Eduardo',
  nota: 4
}];

// Função para retornar alunos com nota maior ou igual a 6
var filtrarAlunosAprovados = function filtrarAlunosAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
};

// Chama a função e armazena o resultado
var alunosAprovados = filtrarAlunosAprovados(alunos);

// Exibe os alunos aprovados usando um loop for
var mensagem = 'Os alunos aprovados foram: ';
for (var i = 0; i < alunosAprovados.length; i++) {
  mensagem += "".concat(alunosAprovados[i].nome, " (nota: ").concat(alunosAprovados[i].nota, ")");
  if (i < alunosAprovados.length - 1) {
    mensagem += ', ';
  }
}
mensagem += '.';
console.log(mensagem);