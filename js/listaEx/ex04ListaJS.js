/*4. Utilizando Switch, faça um programa que pergunte em que turno
você estuda. Peça para digitar “M” para matutino ou “V” para
vespertino ou “N” para noturno. Imprima a mensagem “Bom dia!” ou
“Boa tarde” ou “Boa Noite” ou “Valor inválido”, conforme o caso.*/

let turno = window.prompt(
    "Digite a primeira letra do seu turno conforme a legenda:\n- 'M' para matutino\n- 'V' para vespertino\n- 'N' para noturno"
  );
  switch (turno) {
    case "M":
      window.alert("Bom dia!");
      break;
    case "V":
      window.alert("Boa tarde!");
      break;
    case "N":
      window.alert("Boa noite!");
      break;
    default:
      window.alert("Opção inválida!");
  }