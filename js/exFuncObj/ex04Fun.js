/*4. Crie uma função chamada calcularMedia(nota1, nota2, nota3,
nome), que recebe 4 parâmetros sendo três inteiros e um texto
(String). Esta função será chamada ao abrir a página e mostrará um
alerta com a média. Exemplo: “João, sua média é 70.” A função
também deve mostrar no console.log() as notas recebidas. Exemplo
“Nota 1: 60,Nota 2: 70,Nota 3: 80”.*/

let nota1 = Number(window.prompt("Digite a nota 1: "));
      let nota2 = Number(window.prompt("Digite a nota 2: "));
      let nota3 = Number(window.prompt("Digite a nota 3: "));
      let nome = window.prompt("Digite o nome do aluno: ");

      function calcularMedia(nota1, nota2, nota3, nome) {
        let media = (nota1 + nota2 + nota3) / 3;
        console.log(
          `Nota 1: ${nota1.toFixed(2)}, nota 2: ${nota2.toFixed(
            2
          )} e nota 3: ${nota3.toFixed(2)}. `
        );
        alert(`${nome}, sua média é ${media.toFixed(2)}.`);
      }

      calcularMedia(nota1, nota2, nota3, nome);