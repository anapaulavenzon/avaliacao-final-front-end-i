/* 

Crie um algoritmo que armazene um número inteiro positivo, e gere um alerta com as seguintes mensagens:
“Número é par!”, se o valor armazenado for par;
“Número é impar!”, se o valor armazenado for ímpar; 

*/

let valor1 = Number(window.prompt("Digite um número: "));

if (valor1 > 0)  {
    
    if (valor1 % 2 === 0){
        window.alert("Número é par!")
    } else {
        window.alert("Número é impar!")
    }

} else {
    window.alert("Valor Inválido!")
}




