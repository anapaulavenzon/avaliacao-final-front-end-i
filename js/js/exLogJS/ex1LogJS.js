    /* 

Escreva um algoritmo que armazene três valores numéricos diferentes e, em seguida, mostre no alerta a soma, a média, o produto, o menor e o maior desses números. O algoritmo deve validar e parar a execução ao mostrar um alerta com a mensagem “Você repetiu algum número na digitação" se caso duas variáveis estiverem armazenando o mesmo valor. Utilize o alert() para mostrar o resultado esperado. 

*/

let valor1 = Number(window.prompt("Digite o primeiro valor:"));

let valor2 = Number(window.prompt("Digite o segundo valor:"));

let valor3 = Number(window.prompt("Digite o terceiro valor:"));

// VALIDA SE OS 3 NUMEROS SÃO DIFERENTES
if((valor1 !== valor2) && (valor2 !== valor3) && (valor1 !== valor3)) {

    let soma = valor1 + valor2 + valor3;

    window.alert(soma);

    let media = soma / 3;

    window.alert(media);

    let produto = valor1 * valor2 * valor3 

    window.alert(produto);

    // BUSCA O MENOR
    if((valor1 < valor2) && (valor1 < valor3)) {
        // VALOR 1 MENOR
        window.alert(`${valor1} é o menor valor.`)

    } else if ((valor2 < valor1) && (valor2 < valor3)) {
        // VALOR 2 MENOR
        window.alert(`${valor2} é o menor valor.`)

    } else {
        // VALOR 3 MENOR
        window.alert(`${valor3} é o menor valor.`)

    }


    // BUSCAR O MAIOR
    if((valor1 > valor2) && (valor1 > valor3)) {
        // VALOR 1 MAIOR
        window.alert(`${valor1} é o maior valor.`)

    } else if ((valor2 > valor1) && (valor2 > valor3)) {
        // VALOR 2 MAIOR
        window.alert(`${valor2} é o maior valor.`)

    } else {
        // VALOR 3 MAIOR
        window.alert(`${valor3} é o maior valor.`)

    }

// SE OS 3 NUMEROS NÃO FOREM DIFERENTES CAI NO ELSE
} else {
    window.alert("Voce repetiu algum numero na digitação!")

}