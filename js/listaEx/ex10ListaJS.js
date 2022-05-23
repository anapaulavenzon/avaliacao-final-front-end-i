/*10. Leia um número, utilizando WHILE multiplique este número por 3
enquanto a soma seja menor que 500.*/


      let num = Number(window.prompt("Digite um número: "));
      let soma = num;

      while (soma <= 500) {
        document.write(`${soma} x 3`);
        
        soma = soma * 3;
        document.write(` = ${soma}` + "<br>");
      }