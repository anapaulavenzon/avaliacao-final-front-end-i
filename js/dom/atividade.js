/** Criem uma página html contendo uma div e dois botões dentro da div
 *
 * Ao clicar no primeiro botão, deve ser
 * adicionado uma imagem qualquer dentro da div
 *
 * Ao clicar no segundo botão, deve ser
 * adicionado um paragrafo qualquer dentro da div
 *
 * A imagem e o paragrafo precisam ficar alternando,
 * ou seja, quando a imagem aparece o paragrafo some
 * e o inverso também.*/

function mostrarImagem() {
  // criou o elemento (tag) img
  const minhaImagem = document.createElement("img");
  minhaImagem.src = "./images/lampada_acessa.jpg";

  // recuperou a div onde vamos adicionar a imagem
  const minhaDiv = document.getElementById("parte-principal");

  // adicionou como filho da div a imagem criada
  minhaDiv.appendChild(minhaImagem);
}

function mostrarParagrafo() {
  // criar o elemento (tag) p
  const meuParagrafo = document.createElement("p");
  meuParagrafo.innerText = "Growdvers";

  // recuperou a div onde vamos adicionar a imagem
  const minhaDiv = document.getElementById("parte-principal");

  minhaDiv.appendChild(meuParagrafo);
}
