"use strict";
let nome = "";
let num = 0;
let bole = false;
console.log(nome);
let listaNomes = [];
let aluno = {
    nome: "João",
    aprovado: true,
    idade: null
};
function imprimeNome(nome, aprovado, idade) {
    console.log(`Nome do aluno é ${nome}`);
    console.log(`Situação do aluno ${aprovado}`);
    console.log(`idade do aluno é: ${idade}`);
}
