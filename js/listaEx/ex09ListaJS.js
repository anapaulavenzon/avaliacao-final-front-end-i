/*9. Escrever um algoritmo que calcule e mostre a média aritmética dos
números lidos entre 13 e 73.*/

    let numero = 14;
    let soma = 13;
    let media = 0.0;
    let qtd_numeros = 0;
      
    do {
        document.write(`${soma} + ${numero} `);
        soma += numero; 
        document.write(`= ${soma}<br>`);
        numero++;
        qtd_numeros++;
      } while (numero <= 73);

      media = soma / qtd_numeros;
      document.write(`<br>A média de ${soma} / ${qtd_numeros} = ${media.toFixed(2)}<br>`);