/* 

Crie um algoritmo que armazene três valores, para cada um dos lados de um triângulo: A, B e C. 
Verifique se os lados fornecidos formam realmente um triângulo. 
Se formar, deve mostrar no alert o tipo de triângulo: isósceles, escaleno ou equilátero. 

Para verificar se os lados fornecidos formam um triângulo: A < (B + C) e B < (A + C) e C < (A + B). 
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B=C);
Triângulo escaleno: possui todos os lados diferentes (A<>B e B<>C e A<>C);
Triângulo equilátero: possui todos os lados iguais (A=B e B=C); 

*/



let a = Number(prompt("Digite lado a"));
let b = Number(prompt("Digite lado b"));
let c = Number(prompt("Digite lado c"));
// a = 10
// b = 20
// c = 20

//Verificar se um triangulo
if(a < (b+c) && b < (a+c) && c < (a+b)){
    
    if((a === b) && (a === c) && (b === c)){
        alert("Equilatero!");
    
    }else if ((a === b) || (a === c) || (b === c)){
        alert("isósceles");
    
    }else if((a !== b) && (b !== c) && (a!==c)){
        alert("escaleno!");
    }
     
}else{
    alert("Não é um triangulo!");
}