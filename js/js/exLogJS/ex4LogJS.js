/*4. Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que a pessoa nasceu).*/

let anoatual = Number(prompt("Digite o ano atual"))
let anonasc = Number(prompt("Digite o ano de nascimento"))
let idade = anoatual -  anonasc

if(idade>=16){
  
    window.alert("Você poderá votar neste ano ")
}else{
    window.alert("Você não poderá votar neste ano ")
}
