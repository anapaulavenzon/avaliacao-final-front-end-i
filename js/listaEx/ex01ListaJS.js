/*1. Crie uma variável para armazenar o salário do usuário e atribua um
valor a essa variável. Crie a validação necessária:
- Caso o salário seja MENOR que R$ 1.903,98, imprima no console
"ISENTO DE IR";
- caso contrário imprima "TRIBUTADO NO IR".*/


let salario = parseFloat(window.prompt("Digite seu salário: "));

window.alert(salario < 1903.98 ? "Isento no IR." : "Tributado no IR.");