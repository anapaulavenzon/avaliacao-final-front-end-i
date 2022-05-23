//8. Uma loja de eletrodomésticos estabeleceu as seguintes
//modalidades de pagamento para a venda de suas mercadorias:
//à vista  - 2,5% de desconto sobre preço da tabela
//de 2 a 5x - preço de tabela sem acréscimo e sem desconto
//6 a 10x  - juros de 6% sobre a tabela
//11 a 15x - juros de 13% sobre a tabela
//Escreva um algoritmo que armazene o preço de tabela e o número de
//vezes em que o pagamento será feito. Calcule o valor de cada parcela e o
//preço total da compra e imprima no console.

let precoTabela = parseFloat(window.prompt("Digite o preço de tabela do produto: ")); 
let qtdParcelas =  Number(window.prompt("Digite a quantidade de parcelas: "));

let valorParcela;
let precoTotalCompra;
let desconto = (2.5 / 100) * precoTabela;
let acrescimo;


if (qtdParcelas <= 0){
    alert("Número de parcelas inválido. Operação encerrada!");

}else if (qtdParcelas === 1){
    totalCompra = precoTabela - desconto;

    alert(`
        Preço de tabela: R$${precoTabela.toFixed(2)} \n
        Número de parcelas: ${qtdParcelas} \n
        Compra a vista com R$${desconto.toFixed(2)} de desconto\n
        Preço total: R$${totalCompra.toFixed(2)}
    `)

}else if (qtdParcelas <= 5){
    totalCompra = precoTabela;
    valorParcela = totalCompra / qtdParcelas;


    alert(`
        Preço de tabela: R$${precoTabela.toFixed(2)} \n
        Número de parcelas: ${qtdParcelas} \n
        Compra a prazo pelo preço de tabela\n
        Preço total: R$${totalCompra.toFixed(2)} \n
        Valor da parcela: R$${valorParcela.toFixed(2)}
    `)

}else if (qtdParcelas <= 10){
    acrescimo =  (6.0 / 100) * precoTabela;
    totalCompra = precoTabela + acrescimo;
    valorParcela = totalCompra / qtdParcelas;
    
    alert(`
        Preço de tabela: R$${precoTabela.toFixed(2)} \n
        Número de parcelas: ${qtdParcelas} \n
        Compra a prazo com R$${acrescimo.toFixed(2)} de acréscimo\n
        Preço total: R$${totalCompra.toFixed(2)} \n
        Valor da parcela: R$${valorParcela.toFixed(2)}
    `)

}else if (qtdParcelas <= 15){
    acrescimo = (13.0 / 100) * precoTabela;
    totalCompra = precoTabela + acrescimo;
    valorParcela = totalCompra / qtdParcelas;
    
    alert(`
        Preço de tabela: R$${precoTabela.toFixed(2)} \n
        Número de parcelas: ${qtdParcelas} \n
        Compra a prazo com R$${acrescimo.toFixed(2)} de acréscimo\n
        Preço total: R$${totalCompra.toFixed(2)} \n
        Valor da parcela: R$${valorParcela.toFixed(2)}
    `)

}
