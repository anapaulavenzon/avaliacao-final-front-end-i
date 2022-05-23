/* 

Escreva um algoritmo que armazene o valor 10 em uma variável A e o valor 20 em uma variável B. A seguir (utilizando apenas atribuições entre variáveis) troque os seus conteúdos fazendo com que o valor que está em A passe para B e vice-versa. Ao final, mostre no console os valores que ficaram armazenados nas variáveis após modificadas.

*/
// resultado final esperado ->  valorA = 20 e valorB = 10
let valorA = Number(window.prompt("Digite o valor A: "));
let valorB = Number(window.prompt("Digite o valor B: "));

let auxiliar = valorA; //memorizar o valor contigo em valorA -> 10
valorA = valorB;
valorB = auxiliar;

alert(`O valor armazenado em A é ${valorA}`);
alert(`O valor armazenado em B é ${valorB}`);



