/* 3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
número de 1 a 7 e imprimir no console o dia da Semana. Para este
exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
por diante. Caso o número recebido não esteja neste intervalo
imprimir “Dia não reconhecido”.*/

const diaSemana = Number (prompt ("digite um número de 1 a 7"))


if(diaSemana === 1){
    document.writeln("O nome do dia da semana é domingo")
}else if(diaSemana === 2)
    document.writeln("O nome do dia da semana é segunda-feira")
    else if(diaSemana === 3)
    document.writeln("O nome do dia da semana é terça-feira")
    else if(diaSemana === 4)
    document.writeln("O nome do dia da semana é quarta-feira")
    else if(diaSemana === 5)
    document.writeln("O nome do dia da semana é quinta-feira")
    else if(diaSemana === 6)
    document.writeln("O nome do dia da semana é sexta-feira")
    else if(diaSemana === 7)
    document.writeln("O nome do dia da semana é sábado")
else{
    document.writeln("O nome do dia da semana não reconhecido")
}