
const data/*dados*/ = [
    {
    nome: 'Roger Medeiros',
    sexo: 'M',
    salario: 3250,
    },
    {
    nome: 'Carolina Silva',
    sexo: 'F',
    salario: 1200,
    },
    {
    nome: 'Cristina Avila',
    sexo: 'F',
    salario: 8100,
    },
    {
    nome: 'Gustavo Hoffman',
    sexo: 'M',
    salario: 5200.35,
    },
    {
    nome: 'Eva Trindade',
    sexo: 'F',
    salario: 2501,
    },
    {
    nome: 'Andre Mathias',
    sexo: 'M',
    salario: 1750,
    },
    {
    nome: 'Joice Castro da Silva',
    sexo: 'F',
    salario: 3350.25,
    },
    ];

/*3. Imprima no console a soma do salário de todas as pessoas.*/

    let totalSalarios = data.reduce((elemento1, elemento2) => elemento1 + elemento2.salario, 0);
    console.log(`A soma dos salários é R$${totalSalarios.toFixed(2)}.`)
    document.write(`A soma dos salários é R$${totalSalarios.toFixed(2)}.`)