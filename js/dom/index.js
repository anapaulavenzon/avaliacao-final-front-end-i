let quebrada = false;

function acendaLuz() {
  if (!quebrada) {
    const image = document.getElementById("lampada");

    image.src = "images/lampada_acessa.jpg";
  }
}

function apagaLuz() {
  if (!quebrada) {
    const image = document.getElementById("lampada");

    image.src = "images/lampada_apagada.jpg";
  }
}

function quebraLampada() {
  if (!quebrada) {
    // altera a imagem para a lampada quebrada
    const image = document.getElementById("lampada");
    image.src = "images/lampada_quebrada.jpg";

    // defini o valor na variavel para não permitir alterar a imagem da lampada depois de quebrada
    quebrada = true;

    // cria o elemento (tag) button
    const meuBotao = document.createElement("button");
    meuBotao.id = "restaurar";
    meuBotao.innerText = "Clique aqui para restaurar a lampada";
    meuBotao.onclick = restaurarLampada;

    // adicionar o botão na tela
    const divPrincipal = document.getElementById("principal");
    divPrincipal.appendChild(meuBotao);

    // mesma coisa da linha de cima
    // document.getElementById("principal").appendChild(meuBotao)
  }
}

function restaurarLampada() {
  // altera a imagem da lampada para a luz apagada como default
  const image = document.getElementById("lampada");
  image.src = "images/lampada_apagada.jpg";

  quebrada = false;

  // recuperar o botão
  const meuBotao = document.getElementById("restaurar");

  // recuperar a div
  const divPrincipal = document.getElementById("principal");

  // remover o botão da div
  divPrincipal.removeChild(meuBotao);
}
