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

/*4. Imprima no console a soma do salario de todos as pessoas do sexo Masculino*/

    let totalSalariosM=data.filter(elemento1m=> elemento1m.sexo === 'M').reduce((elemento1m, elemento2m) => elemento1m + elemento2m.salario, 0,);
    
    console.log(`A soma dos salários das pessoas do sexo masculino é R$${totalSalariosM.toFixed(2)}.`)
    document.write(`A soma dos salários das pessoas do sexo masculino é R$${totalSalariosM.toFixed(2)}.`)