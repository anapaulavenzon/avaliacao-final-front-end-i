/*3. Inicialize uma variável com o valor de 5.000 (cinco mil), utilizando
While adicione a este valor 30% de acréscimo até que este valor
seja maior ou igual a 10.000 (dez mil). Imprima no console os
salários parciais.*/

let vInicial = 5000;

      document.write(`<br>VALOR INICIAL: R$ ${vInicial}<br>`);

      while (vInicial <= 10000) {
        let juros = (30 * vInicial) / 100;
        vInicial = vInicial + juros;

        document.write(`<br>VALOR DO JUROS: R$ ${juros} <br>VALOR COM JUROS R$ ${vInicial}<br>`);
      }

