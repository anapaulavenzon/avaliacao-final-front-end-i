/* Desenvolva aqui a rotina */
lerLocalStorage();

//Capturar os inputs para ter acesso aos valores preenchidos pelo usuário

// INPUTS DE RECEITAS
let valorBase = document.querySelector('#valor_base');
let valorTransporte = document.querySelector('#valor_transporte');
let valorAlimentacao = document.querySelector('#valor_alimentacao');

// TOTAL RECEITAS
let valorReceita = document.querySelector('#valor_receita');


// INPUTS DE DESCONTOS
let valorAutomovel = document.querySelector('#valor_automovel');
let faltas = document.querySelector('#faltas');

// TOTAL DESCONTOS
let valorDesconto = document.querySelector('#valor_descontos');

// TOTAL GERAL
let valorTotal = document.querySelector('#valor_total');

//BOTÃO QUE EXECUTA AS AÇÕES NECESSÁRIAS
let botaoCalcular = document.querySelector('#btn_calcular');

let listaInputsPagina = document.getElementsByTagName('input');

//EVENTOS
botaoCalcular.addEventListener('click', calcular);


//percorrer cada um dos elementos input do HTML e adicionar um ouvinte de eventos DOM
for( let input of listaInputsPagina){
    input.addEventListener('blur', calcular);
}


//FUNÇÕES
function calcular() {
    // CALCULO E MANIPULAÇÃO DO VALUE DO CAMPO TOTAL RECEITAS
    let totalReceitas = parseFloat(valorBase.value) + parseFloat(valorTransporte.value) + parseFloat(valorAlimentacao.value);
    valorReceita.value = totalReceitas;
    
    // CALCULO E MANIPULAÇÃO DO VALUE DO CAMPO TOTAL DESCONTOS
    let totalDescontos = parseFloat(valorAutomovel.value) + parseFloat(faltas.value);
    valorDesconto.value = totalDescontos;

    valorTotal.value = totalReceitas - totalDescontos;

    salvarLocalStorage();
}


//FUNÇÃO QUE SALVE OS DADOS NO LOCALSTORAGE
function salvarLocalStorage(){

    // chave (identificação) - valor
    // vou utilizar o atributo id como chave no localStorage
    // vou utilizar o value como valor a ser armazenado no localstorage

    let inputsPagina = document.getElementsByTagName('input');

    for(let input of inputsPagina){
        console.log(input);
        
        //setItem -> cria os registros no localStorage
        localStorage.setItem(input.id, input.value);
        
    }
}


// FUNÇÃO QUE PEGUE E TRAGA PRO HTML OS DADOS QUE TIVEREM NO LOCALSTORAGE
function lerLocalStorage(){

    let inputsPagina = document.getElementsByTagName('input');

    for(let input of inputsPagina){

        //getItem
        let valorLocalStorage = localStorage.getItem(input.id);
        input.value = valorLocalStorage;
        
    }

}




