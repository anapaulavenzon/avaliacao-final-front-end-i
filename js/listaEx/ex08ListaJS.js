/*8. Ler um valor inteiro (aceitar somente valores entre 1 e 10) e escrever
a tabuada de 1 a 10 do valor lido.*/

let numero = Number(window.prompt("Digite um número ente 1 e 10 "));

      if (numero >= 1 && numero <= 10) {
        for (let i = 1; i <= 10; i++) {
          let resultado = numero * i;
          document.write(`${numero} x ${i} = ${resultado}<br>`);
        }
      } else {
        window.alert(`Número inválido!`);
      }