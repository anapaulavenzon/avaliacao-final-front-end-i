/*Crie uma lista com 7 produtos eletrodomésticos:
pergunte para o usuário qual produto ele quer comprar;
verifique se o produto está disponível;
e se estiver mostre msg parabenizando pela compra.*/

let eletro = ['máquina de lavar', //0
'fogão à gás', //1
'cafeteira', //2
'ferro elétrico', //3
'geladeira', //4
'microondas', //5
'freezer'] //6

const produtoUsuario = prompt("digite o produto para compra")

const eletroencontrado = eletro.find(function (produtolista){
    return (produtolista.toLowerCase === produtoUsuario.toLocaleLowerCase)
})
document.write(produtolista)

if(produtoUsuario === produtolista){
    document.write('Parabéns pela aquisição!')
}else(produtoUsuario !== eletro)
    document.write("Infelizmente não poderemos atender seu pedido...")
