/* 

Crie cinco objetos JavaScript dentro de um Array contendo nome(texto), idade(número), skills (array), ou seja um total de cinco alunos. Agora crie uma função que receba estes cinco objetos e mais um parâmetro skill(string). Dependendo da skill enviada mostrar no console.log(), quais alunos têm a skill enviada por parâmetro, mostrar todo o objeto.
Exemplo: Pedro, 24, [JavaScript, TypeScript, React]. Se mandar chamar a função enviando (alunos, “JavaScript”), precisa mostrar o Pedro e qual mais se encaixa nessa skill. 

*/

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

//criando a função
function verificaSkill(turma, tecnologia){
    

    /* // realiza a varreadura no array principal (listaAlunos)
    for (let posicaoTurma in turma) {
        
        //realiza a varredura no array de skills
        for (const posicaoSkill in turma[posicaoTurma].skills) {
            
            //verifica se existe a skill buscada dentro do array de skills
            if(turma[posicaoTurma].skills[posicaoSkill] === tecnologia){
                alunosComSkill.push(turma[posicaoTurma])
            }

        }
    
    } */

    let alunosComSkill = turma.filter( aluno => {
        return aluno.skills.find( skill => skill === tecnologia)
    });

    return alunosComSkill
}

let alunosEncontrados = verificaSkill(listaAlunos, 'React');

console.log(alunosEncontrados);

































