/* 3. Crie um algoritmo que armazene três valores, para cada um dos
lados de um triângulo: A, B e C. Verifique se os lados fornecidos
formam realmente um triângulo. Se formar, deve mostrar no console
o tipo de triângulo: isósceles, escaleno ou equilátero.
a. Para verificar se os lados fornecidos formam um triângulo: A <
B + C e B < A + C e C < A + B.
b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
B=C);
c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
B<>C e A<>C);
d. Triângulo equilátero: possui todos os lados iguais (A=B e
B=C); */

let ladoa = Number(prompt("Digite lado a"))
let ladob = Number(prompt("Digite lado b"))
let ladoc = Number(prompt("Digite lado c"))

    if(a < (b=c) && b < (a+c) && c < (a+b)){
    }

    if ((a === b) && (a === c) && (b === c)){
        alert("equilátero")
    }else if ((a === b) || (a === c) || (b === c)){
        alert("isósceles");
    }else if ((a !== b) || (a !== c) || (b !== c)){
        alert("escaleno");
}else{
    alert("Não é um triângulo")
}

