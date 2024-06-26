"use strict";

var alunos = [{
  nome: 'Olivia',
  nota: 6
}, {
  nome: 'Julio',
  nota: 4
}, {
  nome: 'Fabio',
  nota: 7
}, {
  nome: 'Maria',
  nota: 8
}, {
  nome: 'Juliana',
  nota: 5
}];
var filtrarAlunosAprovados = function filtrarAlunosAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
};
var alunosAprovados = filtrarAlunosAprovados(alunos);
var mensagem = 'Os alunos aprovados foram: ';
for (var i = 0; i < alunosAprovados.length; i++) {
  mensagem += "".concat(alunosAprovados[i].nome, " (nota: ").concat(alunosAprovados[i].nota, ")");
  if (i < alunosAprovados.length - 1) {
    mensagem += ', ';
  }
}
mensagem += '.';
console.log(mensagem);