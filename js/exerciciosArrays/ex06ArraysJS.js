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

/*6. Utilize a função findIndex, para descobrir a posição da pessoa de
nome 'Eva Trindade'.*/

    let indicePessoa = data.findIndex(dado => dado.nome === "Eva Trindade");

    if(indicePessoa != -1){
        document.write(`Eva Trindade esta na posição ${indicePessoa}.`);
        console.log(`Eva Trindade esta na posição ${indicePessoa}.`)
    }else{
        document.write(`Eva Trindade não foi encontrada ${indicePessoa}.`);
        console.log(`Eva Trindade não foi encontrada ${indicePessoa}.`)
      
    }
