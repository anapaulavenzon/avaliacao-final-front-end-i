/* Desenvolva aqui a rotina */
lerLocalStorage();

let valorBase = document.querySelector('#valor_base');
let valorTransporte = document.querySelector('#valor_transporte');
let valorAlimentacao = document.querySelector('#valor_alimentacao');
let valorReceita = document.querySelector('#valor_receita');
let valorAutomovel = document.querySelector('#valor_automovel');
let faltas = document.querySelector('#faltas');
let valorDesconto = document.querySelector('#valor_descontos');
let valorTotal = document.querySelector('#valor_total');
let botaoCalcular = document.querySelector('#btn_calcular');

let listaInputsPagina = document.getElementsByTagName('input');


botaoCalcular.addEventListener('click', calcular);


for( let input of listaInputsPagina){
    input.addEventListener('blur', calcular);
}

function calcular() {
    
    let totalReceitas = parseFloat(valorBase.value) + parseFloat(valorTransporte.value) + parseFloat(valorAlimentacao.value);
    valorReceita.value = totalReceitas;
    
    let totalDescontos = parseFloat(valorAutomovel.value) + parseFloat(faltas.value);
    valorDesconto.value = totalDescontos;

    valorTotal.value = totalReceitas - totalDescontos;

    salvarLocalStorage();
}

function salvarLocalStorage(){

    let inputsPagina = document.getElementsByTagName('input');

    for(let input of inputsPagina){
        console.log(input);
        
        localStorage.setItem(input.id, input.value);
        
    }
}

function lerLocalStorage(){

    let inputsPagina = document.getElementsByTagName('input');

    for(let input of inputsPagina){
    
        let valorLocalStorage = localStorage.getItem(input.id);
        input.value = valorLocalStorage;
        
    }

}




