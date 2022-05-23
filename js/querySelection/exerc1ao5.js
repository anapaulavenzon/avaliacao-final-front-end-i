/*1. Capture, armazene e manipule todos os elementos de classe "card".
Modifique os estilos necessários nesses elementos para que fique
semelhante a imagem.*/

let cards = document.getElementsByClassName('card');

for (const elemento of cards) {
    elemento.setAttribute('style','background-color: ');
}
let titulosDoBanco = ['Titulo1', 'Titulo2', 'Titulo3','Titulo4','Titulo5'];
 
let titulo= document.querySelectorAll('h2.titulo-card')

for(let i = 0; i< tituloDoHTML.length; i++){
    tituloDoHTML[i].setAttribute('style', 'color: #2b385b ')
} 