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
/*5. Utilize a função Some, para descobrir se existe algum salário
superior a R$ 7.000, imprima verdadeiro no console caso exista, caso
contrário falso.*/

let contem = data.some(valor => valor.salario > 7000)

if(contem){
    console.log("verdadeiro")
    document.write("verdadeiro")
    
}else{
    onsole.log("falso")
    document.write("falso")

}

