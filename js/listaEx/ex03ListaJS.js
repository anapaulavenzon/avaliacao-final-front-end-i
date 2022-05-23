/* 3. Tendo como entrada a altura e o sexo (codificado da seguinte
forma: 1 para sexo feminino e 2 para sexo masculino) de uma
pessoa, construa um programa que calcule e imprima seu peso
ideal, utilizando as seguintes fórmulas:
- para homens: (72.7 * Altura) – 58
- para mulheres: (62.1 * Altura) – 44.7
Exemplo de dados:
altura = 1.88
sexo = 2 */


let sexo = window.prompt("Digite seu sexo: ");
      let altura = parseFloat(window.prompt("Digite sua altura: "));

      if (sexo == "Feminino" || sexo == "feminino" || sexo == "FEMININO") {
        let peso_ideal = 0.0;
        peso_ideal = 62.1 * altura - 44.7;
        window.alert(
          `Você é uma mulher que mede ${altura}m e seu peso ideal é ${peso_ideal.toFixed(
            2
          )}Kg.`
        );
      } else if (
        sexo == "Masculino" ||
        sexo == "masculino" ||
        sexo == "Masculino"
      ) {
        let peso_ideal = 0.0;
        peso_ideal = 72.7 * altura - 58;
        window.alert(
          `Você é um homem que mede ${altura}m e seu peso ideal é ${peso_ideal.toFixed(
            2
          )}Kg.`
        );
      } else {
        window.alert("Opção inválida!");
      }