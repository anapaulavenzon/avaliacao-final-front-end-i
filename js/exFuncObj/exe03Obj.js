/*3. Crie um objeto para colocar nome e duas notas. Atribua nome e
duas notas para o primeiro objeto, que será nosso primeiro aluno.
Agora crie mais um objeto para colocar informações do nosso
segundo aluno. Mostre as informações de cada aluno no console.
Mostre também a média do primeiro aluno e a média do segundo
aluno. Por fim mostre a média desta turma de 2 alunos.*/

let aluno1 = {
    nome: "Eder",
    nota1: 7,
    nota2: 8,
  };
  let aluno2 = {
    nome: "João",
    nota1: 5,
    nota2: 9,
  };

  for (let atributos in aluno1) {
    console.log(`${atributos} : ${aluno1[atributos]}`);
  }
  console.log(
    `A média do ${aluno1.nome} é ${calculaMedia(
      aluno1.nota1,
      aluno1.nota2
    )}`
  );

  for (let atributos in aluno2) {
    console.log(`${atributos} : ${aluno2[atributos]}`);
  }

  console.log(
    `A média do ${aluno2.nome} é ${calculaMedia(
      aluno2.nota1,
      aluno2.nota2
    )}`
  );

  console.log(
    `A média da turma é ${calculaMediaTurma(
      aluno1.nota1,
      aluno1.nota2,
      aluno2.nota1,
      aluno2.nota2
    )}`
  );

  function calculaMedia(nota1, nota2) {
    let media = (nota1 + nota2) / 2;
    return media;
  }

  function calculaMediaTurma(nota1, nota2, nota3, nota4) {
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    return media;
  }

