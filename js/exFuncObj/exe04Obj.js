/*4. Crie cinco objetos JavaScript dentro de um Array contendo
nome(texto), idade(número), skills (array), ou seja um total de cinco
alunos. Agora crie uma função que receba estes cinco objetos e
mais um parâmetro skill. Dependendo da skill enviada mostrar no
console.log(), quais alunos têm a skill enviada por parâmetro,
mostrar todo o objeto.
Exemplo: Pedro, 24, [JavaScript, TypeScript, React]. Se mandar
chamar a função enviando (alunos, “JavaScript”), precisa mostrar o
Pedro e qual mais se encaixa nessa skill.*/

let alunos = [
    {
      nome: "João",
      idade: 18,
      skills: ["JavaScript", "React"],
    },
    {
      nome: "Lucas",
      idade: 24,
      skills: ["TypeScript"],
    },
    {
      nome: "Eder",
      idade: 30,
      skills: ["React"],
    },
    {
      nome: "Claudia",
      idade: 42,
      skills: ["JavaScript", "TypeScript"],
    },
    {
      nome: "Maria",
      idade: 35,
      skills: ["JavaScript"],
    },
  ];

  let alunosEncontrados = buscaSkill(alunos, "JavaScript");

  console.log(alunosEncontrados);

  function buscaSkill(turma, skill) {
    let alunoscomskill = turma.filter((aluno) =>
      aluno.skills.some((skillaluno) => {
        return skillaluno === skill;
      })
    );

    return alunoscomskill;
  }