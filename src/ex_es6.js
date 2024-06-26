const alunos = [
  { nome: 'Olivia', nota: 6 },
  { nome: 'Julio', nota: 4 },
  { nome: 'Fabio', nota: 7 },
  { nome: 'Maria', nota: 8 },
  { nome: 'Juliana', nota: 5 }
];

const filtrarAlunosAprovados = (alunos) => {
    return alunos.filter(aluno => aluno.nota >= 6);
  };
  
const alunosAprovados = filtrarAlunosAprovados(alunos);
  let mensagem = 'Os alunos aprovados foram: ';
    for (let i = 0; i < alunosAprovados.length; i++) {
      mensagem += `${alunosAprovados[i].nome} (nota: ${alunosAprovados[i].nota})`;
    if (i < alunosAprovados.length - 1) {
      mensagem += ', ';
    }
  }
mensagem += '.';
console.log(mensagem);