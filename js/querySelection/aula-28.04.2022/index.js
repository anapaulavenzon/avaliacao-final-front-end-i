/* 1.EXERCICIO: Capture, armazene e manipule todos os elementos de classe "card".
Modifique os estilos necessários nesses elementos para que fique
semelhante a imagem.*/

let cards = document.getElementsByClassName('card');

for (const elemento of cards) {
    elemento.setAttribute('style', 'background-color: #E16E0E');
}


/* 2.EXERCICIO: Capture, armazene e manipule todos os elementos de classe
"titulo-card". Modifique os estilos necessários nesses elementos
para que fique semelhante a imagem. */

// Podemos adicionar informações dinâmicamente em nossos elementos HTML
// Para isso criei uma lista personalizada de títulos para os cards
let titulosCriados = ['Titulo1', 'Titulo2', 'Titulo3', 'Titulo4', 'Titulo5'];

// Aqui é onde eu capturo o elemento de classe titulo-card do HTML
let tituloDoHTML = document.querySelectorAll('h2.titulo-card');


// Podemos modificar os elementos da lista "tituloDoHTML"
// Para isso precisamos acessar cada elemento através do seu indice
// A variavel "i" dentro do laço de repetição é quem vai realizar esse controle de indice
// Começando com o valor inicial 0 para acessar o primeiro elemento da lista [0]
// E será incrementada com +1 até que seu valor seja equivalente ao último indice da lista   ([4] nesse caso)
for(let i = 0; i < tituloDoHTML.length; i++){
    
    //modificando o estilo de cada elemento da lista
    tituloDoHTML[i].setAttribute('style', 'color: #2b385b');

    //modificando o texto de cada elemento da lista para receber 
    //cada um dos textos salvos na lista "titulosCriados"
    tituloDoHTML[i].innerHTML = `${titulosCriados[i]}`;
}


/*    4.EXERCICIO: Capture, armazene e manipule todos os elementos de classe
"descricao-card". Modifique os estilos necessários nesses elementos
para que fique semelhante a imagem.

    5. EXERCÍCIO: Modifique o texto das descrições nos cards para "Descrição
modificada pelo JavaScript".

*/

let descricaoCriada = ['Descrição 1', 'Descrição 2', 'Descrição 3', 'Descrição 4', 'Descrição 5'];

let descricaoHTML = document.getElementsByClassName('descricao-card');

for(let i = 0; i < descricaoHTML.length; i++){

    descricaoHTML[i].setAttribute('style', 'color: white; font-size: 14px; padding: 25px 0 25px 0');

    descricaoHTML[i].innerHTML = `${descricaoCriada[i]}`;
}






