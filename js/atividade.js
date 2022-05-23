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
