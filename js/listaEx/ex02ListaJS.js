/*2. Informe um valor a uma variável e imprima no console se o número é primo.*/

let numero = Number(window.prompt("Digite um valor: "));
      let primo = true;
      for (let i = 2; i < numero; i++) {
        if (numero % i != 0) {
          primo = false;
        }
      }

      if ((primo = true)) {
        window.alert(`${numero} é um número primo.`);
      } else {
        window.alert(`${numero} não é um número primo.`);
      }
    
