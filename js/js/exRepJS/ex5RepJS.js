/*5. Utilizando do...while, imprima na tela a soma de todos os números
entre 10 e 100.*/

      let num = 12;
      let soma = 11;

      do {
        document.write(`${soma} + ${num} `);
        soma += num; 
        document.write(`= ${soma}<br>`);
        num++;
        
      } while (num < 100);