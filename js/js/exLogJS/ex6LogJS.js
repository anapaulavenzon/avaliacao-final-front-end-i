//6. Escreva um algoritmo para ler uma temperatura em graus
//Fahrenheit, calcular e escrever o valor correspondente em graus
//Celsius.

let Fahrenheit = parseFloat(window.prompt("Digite a temperatura em Fahrenheit"))
let Celsius = (Fahrenheit - 32) / 1.8
window.alert(`${Fahrenheit}° Fahrenheit equivale ${Celsius.toFixed(2)}° Celsius`)