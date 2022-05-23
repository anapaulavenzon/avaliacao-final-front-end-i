/*1. Crie um algoritmo que solicite para o usuário informar um número qualquer 7x. Adicione cada número 
informado pelo usuário em uma lista. No final utilize o forEach para mostrar cada elemento da lista.*/

let listaNum=[]

for(let i = 0; i<7; i++){
    let num = Number(window.prompt(`Digite o ${i+1}° número`));
    if(!num){
        alert("Você não digitou nenhum valor, tente novamente");
        break
    }
    listaNum.push(num)
}

listaNum.forEach(element => console.log(element));