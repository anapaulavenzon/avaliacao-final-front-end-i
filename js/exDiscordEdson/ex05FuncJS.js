/*5. Faça a mesma atividade anterior, mas troque o função findIndex pela funão find. 
Dica: para localizar o indíce do elemento na lista é possível utilizar 
a função interna do array chamada indexOf (veja a documentação e aprenda a como utilizar)*/

let produtos = ['liquidificador', 'forno', 'cafeteira', 'microndas', 'sanduicheira', 'fogão', 'batedeira'];

let produtoEscolhido = window.prompt("Informe o produto para compra: ").toLocaleLowerCase()

let produtoEncontrado = produtos.find(elemento => elemento === produtoEscolhido);

let indiceEncontrado = produtos.indexOf(produtoEncontrado)

if(indiceEncontrado === -1){
    alert("Produto indisponível nesta loja");
}else {
    alert(`PARABÉNS! Você adquiriu o item ${produtos[indiceEncontrado]}`);

    produtos.splice(indiceEncontrado, 1)
}
alert(`${produtos} disponíveis na loja`);
console.log(`${produtos} disponíveis na loja`);