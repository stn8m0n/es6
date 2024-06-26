"use strict";

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