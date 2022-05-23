/*4. Reescreva o exercício 3, utilizando apenas o SWITCH.*/

const diaSemana = Number (prompt ("digite um número de 1 a 7"))

switch(diaSemana){

case 1:
    document.writeln("O nome do dia da semana é domingo")
    break
case 2:
    document.writeln("O nome do dia da semana é segunda-feira")
    break
case 3:
    document.writeln("O nome do dia da semana é terça-feira")
    break
case 4:
    document.writeln("O nome do dia da semana é quarta-feira")
    break
case 5:
    document.writeln("O nome do dia da semana é quinta-feira")
    break
case 6:
    document.writeln("O nome do dia da semana é sexta-feira")
    break
case 7:
    document.writeln("O nome do dia da semana é sábado")
    break
default:
    document.writeln("O nome do dia da semana não reconhecido")
}