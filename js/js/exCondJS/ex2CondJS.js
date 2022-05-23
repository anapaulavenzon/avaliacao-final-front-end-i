/* 2. Para o mesmo exercício acima insira mais uma variável a
condicional, além de saber se o motorista tem 18 anos ou mais,
temos que saber também se ele é habilitado para dirigir. Caso ele
tenha idade maior ou igual a 18 anos e possua habilitação, imprima
no console “Pode dirigir” caso contrário imprima “Não pode dirigir”.*/

const idademotora = Number(prompt ("Digite aqui sua idade"))
const cartamotora = confirm ("Tem Habilitação?")

document.writeln (`Idade ${idademotora}<br>`)
document.writeln (idademotora >= 18 ? ("Pode dirigir") : ("Não pode dirigir"))

if(idademotora >=18){
    document.writeln("<br>Pode dirigir")
}else{
    document.writeln("<br>Não pode dirigir")
}