let listaAlunos = [
    
    //indice [0]
    {
        nome: 'Claudio',
        idade: 42,
        skills: ['JavaScript', 'TypeScript', 'React']
    },

    //indice [1]
    {
        nome: 'Éder',
        idade: 27,
        skills: ['Python', 'C#', 'PHP']
    },

    //indice [2]
    {
        nome: 'Macedo Cacetinho',
        idade: 19,
        skills: ['HTML', 'CSS', 'JavaScript']
    },

    //indice [3]
    {
        nome: 'Willy',
        idade: 18,
        skills: ['JavaScript', 'VueJS', 'Ruby']
    },

    //indice [4]
    {
        nome: 'Silvano',
        idade: 18,
        skills: ['JavaScript', 'Java', 'C++', 'Wordpress']
    }
];

function verificaSkill(turma, tecnologia){

    let alunosComSkill = turma.filter( (aluno) => aluno.skills
                              .some( (skill) => skill === tecnologia));

    
    return alunosComSkill
}

let alunosEncontrados = verificaSkill(listaAlunos, 'React');

console.log(alunosEncontrados);