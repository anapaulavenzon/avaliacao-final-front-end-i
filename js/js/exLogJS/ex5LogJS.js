// 5. Escrevaum algoritmo que armazene o valor 10 em uma variável A e
//o valor 20 em uma variável B. A seguir (utilizando apenas atribuições
//entre variáveis) troque os seus conteúdos fazendo com que o valor
//que está em A passe para B e vice-versa. Ao final, mostre no console
//os valores que ficaram armazenados nas variáveis após
//modificadas.

const valorA = 10;
const valorB = 20;
const aux = valorA;

valorA = valorB;
valorB = aux

alert(`O valor armazenado em A é ${valorA}`)
alert(`O valor armazenado em B é ${valorB}`)