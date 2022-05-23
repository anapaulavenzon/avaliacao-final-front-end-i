/* 

Escreva um algoritmo para ler uma temperatura em graus  Fahrenheit, calcular e escrever o valor correspondente em graus Celsius.

FORMULA -> °C = (°F − 32) ÷ 1, 8

float = números com virgula 

*/

let fahrenheit = parseFloat(window.prompt("Digite a temperatura em Graus Fahrenheit: "));

let celsius = (fahrenheit - 32) / 1.8;

window.alert(`${fahrenheit}° Fahrenheit equivale a ${celsius.toFixed(2)}° Celsius.`);



