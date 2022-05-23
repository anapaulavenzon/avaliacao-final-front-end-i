/*2. Crie um algoritmo que armazene um número inteiro positivo, e gere
um alerta com as seguintes mensagens:
a. “Número é par!”, se o valor armazenado for par;
b. “Número é impar!”, se o valor armazenado for ímpar;*/

let v1 = Number(window.prompt("Digite um número: "));

if (1 > 0)  {
    
    if (v1 % 2 === 0){
        window.alert("Número é par!")
    } else {
        window.alert("Número é impar!")
    }

} else {
    window.alert("Valor Inválido!")
}