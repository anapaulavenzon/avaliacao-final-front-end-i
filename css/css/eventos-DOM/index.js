
// 1º cria as variaveis necessárias - dizer pro JS quais elementos vamos manipular
let divExemplo = document.querySelector('#exemplo');

// EVENTOS

// Esse evento diz respeito a interação com mouse
//divExemplo.addEventListener('click', clicar);
//divExemplo.addEventListener('mousemove', moverMouse);
divExemplo.addEventListener('mouseenter', entrarMouse);
divExemplo.addEventListener('mouseout', sairMouse);
divExemplo.addEventListener('mousedown', pressionarMouse);
divExemplo.addEventListener('mouseup', soltarMouse);

// Esse evento diz respeito ao Navegador
document.addEventListener('DOMContentLoaded', recarregarPagina);



//FUNÇÕES
function clicar(){
    divExemplo.innerHTML = 'Clicou!';
    divExemplo.style.background = 'red';
}

function moverMouse(){
    alert(`Moveu o mouse sobre o elemento!`);
    divExemplo.style.background = 'yellow';
    divExemplo.style.color = 'black';
}

function entrarMouse(){
    divExemplo.innerHTML = "Entrou na div";
    divExemplo.style.background = 'blue';
}

function sairMouse(){
    divExemplo.innerHTML = "Saiu na div";
    divExemplo.style.background = 'pink';
    divExemplo.style.color = 'black';
}

function pressionarMouse(){
    divExemplo.innerHTML = "Pressionou o mouse sobre a div";
    divExemplo.style.background = 'grey';
    divExemplo.style.color = 'black';
}

function soltarMouse(){
    divExemplo.innerHTML = "Soltou o mouse sobre a div";
    divExemplo.style.background = 'purple';
    divExemplo.style.color = 'black';
}

function recarregarPagina(){
    divExemplo.style.background = 'green';
    divExemplo.style.color = 'white';
    divExemplo.innerHTML = 'Recarregou!'
}

//um comentario




