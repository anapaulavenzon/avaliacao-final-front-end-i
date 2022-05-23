/*1. Crie uma constante para ler a idade de um motorista. Caso o
motorista tenha idade maior ou igual a 18 anos imprime no console
“Pode dirigir”, caso contrário imprima “Não pode dirigir”.*/

const idademotora = Number(prompt ("Digite aqui sua idade"))
document.writeln (`Idade ${idademotora}<br>`)
document.writeln (idademotora >= 18 ? ("Pode dirigir") : ("Não pode dirigir"))

if(idademotora >=18){
    document.writeln("<br>Pode dirigir")
}else{
    document.writeln("<br>Não pode dirigir")
}