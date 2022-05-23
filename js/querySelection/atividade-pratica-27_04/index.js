let cards = document.getElementsByClassName("card");

for (const elemento of cards) {
    elemento.setAttribute("style", "background-color: #e16e0e");
}

let titulo = document.querySelectorAll(".titulo-card");

for (const elemento of titulo) {
    elemento.setAttribute("style", "color: #2b385b; margin-top: 20px");
    elemento.innerHTML = "Meu Card";

}

let descricao = document.querySelectorAll(".descricao-card");

for (const elemento of descricao) {
    elemento.setAttribute("style", "color: white; margin-top: 20px; margin-bottom: 20px");
    elemento.innerHTML = "Descrição modificada pelo JavaScript"
}

let botaoEditar = document.querySelectorAll(".botao-editar");

for (const elemento of botaoEditar) {
    elemento.setAttribute("style", "background-color: green; border: 0; border-radius: 10px; color: white; padding: 10px; cursor: pointer");
    elemento.setAttribute("onclick", "editarCard()")
}

let botaoApagar = document.querySelectorAll(".botao-apagar");

for (const elemento of botaoApagar) {
    elemento.setAttribute("style", "background-color: red; border: 0; border-radius: 10px; color: white; padding: 10px; cursor: pointer");
    elemento.setAttribute("onclick", "apagarCard()");
}

function editarCard(){
    window.alert("Clicou em Editar!")
}

function apagarCard(){
    let confirma = window.confirm("Você tem certeza que quer apagar?");
    if(confirma){
        window.alert("Confirmado!")
    }else{
        window.alert("Cancelou!")
    }
}