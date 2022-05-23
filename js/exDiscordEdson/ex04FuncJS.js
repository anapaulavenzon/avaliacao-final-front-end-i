/*4. Crie uma lista com 7 produtos eletrodomésticos e pergunte para o usuário qual produto ele deseja comprar.
Utilize o método findIndex para verificar se o produto que o usuário quer existe dentro da lista, se o 
produto existir mostre uma mensagem parabenizando pela compra e remova o produto da lista utilizando o splice.*/

let produtos = ['liquidificador', 'forno', 'cafeteira', 'microndas', 'sanduicheira', 'fogão', 'batedeira'];

let produtoEscolhido = window.prompt("Informe o produto para compra: ").toLocaleLowerCase()

let indiceEncontrado = produtos.findIndex(elemento => elemento === produtoEscolhido);

if(indiceEncontrado === -1){
    alert("Produto indisponível nesta loja");
}else {
    alert(`PARABÉNS! Você adquiriu o item ${produtos[indiceEncontrado]}`);

    produtos.splice(indiceEncontrado, 1)
}
alert(`${produtos} disponíveis na loja`);
console.log(`${produtos} disponíveis na loja`);