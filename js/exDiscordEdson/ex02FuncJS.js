/*dado a seguinte lista de números: 8,72,1,37,21,54,7,81,23,92,12,6,4. Crie uma nova lista 
somente com os úmeros ímpares e usando filter.
resultado = lista.filter( numero => condicao)*/

let lista = [8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4];

let num = lista.filter(numero => (numero % 2) !==0);

document.writeln(num);
console.log(num);



