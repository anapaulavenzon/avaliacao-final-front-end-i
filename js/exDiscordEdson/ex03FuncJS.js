/*3. Dado a seguinte lista de números:
8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4
Some o valor total de todos números utilizando o reduce.*/

let numbers = [8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4]

somar = numbers.reduce((acumulador, proximo) => acumulador + proximo, 0);

alert(`${somar} é a soma dos números`);


