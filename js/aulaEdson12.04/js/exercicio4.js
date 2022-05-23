/* 

Escreva um algoritmo que armazene o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem no alert que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). 

*/


let anoAtual = Number(prompt("Digite o ano atual"))
let anoNascimento = Number(prompt("Digite o ano de nascimento"))
let idade = anoAtual - anoNascimento;

// regra é se idade for maior ou igual que 16 anos pode votar
    if(idade >= 16){
          
        //executa aqui se tiver idade maior ou igual a 16 anos  
        window.alert("Você já pode votar");

        
    }else {

        //executa aqui se NÃO TIVER idade maior ou igual a 16 anos
        window.alert("Você não pode votar");
        
    }
