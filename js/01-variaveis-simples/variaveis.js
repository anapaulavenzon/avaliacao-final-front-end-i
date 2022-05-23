// INPUT, PROCESSAMENTO E OUTPUT


//TIPOS DE DADOS

// 1º - Number - inteiro ou real
let x = 10.45;


// 2º - String - caracteres alfanumericos ([0-9] - [a-z]- [todos os simbolos @#$%¨&*&*(*(*$))])
let y = 'email@email.com';


// 3ª - Boolean - true ou false
let z = true;


// 4º - Null - nulo
let a = null;


// 5ª - Any - pode vir a ser qualquer coisa
let b;


//6º - NaN - não é um número
let c = NaN;


// ESCOPO DE VARIAVEIS
// Qual a diferença entre "let" e "const"
//fora do bigode - escopo global
let numero = 10; 
const letra = 'a'

{
    //bloco
    let numero2 = 10;
    const letra2 = 'b';
    //aqui dentro numero2 existe
}

//aqui fora numero2 não existe

