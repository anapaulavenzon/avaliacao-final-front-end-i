/*3. Crie uma função chamada mostrarDobro(num), que recebe um
parâmetro sendo um número inteiro. Esta função será chamada ao
abrir a página e mostrará um alerta com o resultado. Exemplo: “O
dobro do número 5 é 10.”*/

let numero = Number(window.prompt("Digite um número: "));

      let dobrodonumero = mostrarDobro(numero);

      function mostrarDobro(num) {
        let dobro = num * 2;
        return dobro;
      }

      alert(`O dobro do número ${numero} é ${dobrodonumero}.`);