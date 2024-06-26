// Função para retornar alunos com nota maior ou igual a 6
const alunos = [
  { nome: 'Ana', nota: 7 },
  { nome: 'Bruno', nota: 5 },
  { nome: 'Carlos', nota: 8 },
  { nome: 'Daniela', nota: 6 },
  { nome: 'Eduardo', nota: 4 }
];

const filtrarAlunosAprovados = (alunos) => {
    return alunos.filter(aluno => aluno.nota >= 6);
  };
  
  // Chama a função e armazena o resultado
  const alunosAprovados = filtrarAlunosAprovados(alunos);
  
  // Exibe os alunos aprovados usando um loop for
  let mensagem = 'Os alunos aprovados foram: ';
  for (let i = 0; i < alunosAprovados.length; i++) {
    mensagem += `${alunosAprovados[i].nome} (nota: ${alunosAprovados[i].nota})`;
    if (i < alunosAprovados.length - 1) {
      mensagem += ', ';
    }
  }
  mensagem += '.';
  
  console.log(mensagem);