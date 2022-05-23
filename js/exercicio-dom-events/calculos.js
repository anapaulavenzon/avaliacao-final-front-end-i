/* Desenvolva aqui a rotina:
Totalizar os campos 1+2+3 no campo 4
Totalizar os descontos 5+6 no campo 7</li>
Totalizar as receitas - despesas (campo 4 - campo 7) no campo 10<*/

let botao = document.getElementById('btn_calcular');

botao.addEventListener('click', function(){ 

let valor_base = Number(document.getElementById('valor_base').value);
let valor_transporte = Number(document.getElementById('valor_transporte').value);
let valor_alimentacao = Number(document.getElementById('valor_alimentacao').value);
let valor_receita = Number(document.getElementById('valor_receita').value);
let valor_automovel =Number(document.getElementById('valor_automovel').value);
let faltas =Number(document.getElementById('faltas').value);
let valor_descontos = Number(document.getElementById('valor_descontos').value);
let valor_total = Number(document.getElementById('valor_total').value);

let receita = valor_base + valor_transporte + valor_alimentacao;
valor_receita.value = receita;

let desconto = faltas + valor_automovel;
valor_descontos.value = desconto;

let total = receita - desconto;
valor_total.value = total;

})
window.localStorage