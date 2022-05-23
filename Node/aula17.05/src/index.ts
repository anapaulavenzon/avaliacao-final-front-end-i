let formulario = document.querySelector("#formulario-cadastro") as HTMLFormElement;
let imputCodigo = document.querySelector("#input-codigo") as HTMLFormElement;
let imputNome = document.querySelector("#input-nome") as HTMLFormElement;
let imputPreco = document.querySelector("#input-preco") as HTMLFormElement;
let imputPrime = document.querySelector("#input-prime") as HTMLFormElement;

let tabelaProdutos = document.querySelector("#body") as HTMLFormElement;

interface Produto {
    codigo: number,
    nome: string,
    preco: number,
    prime: boolean    
}

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    adicionarNovoProduto();

});

function adicionarNovoProduto(){
    let codigoNoHTML: number = Number(inputCodigo.value);
    let nomeNoHTML: string = inputNome.values;
    let precoNoHTML: number = Number(inputPreco.value);
    let primeNoHTML: boolean = inputPrime.checked;

    if(codigoNoHTML === NaN){
        alert("Código no formato incorreto");
        return
}
    if(precoNoHTML === NaN){
        alert("Preço no formato incorreto");
        return
}

    let produto: Produto = {
      codigo: codigoNoHTML,
      nome: nomeNoHTML,
      preco: precoNoHTML,
      prime: primeNoHTML  
    }

    preencherTabela(produto);

}

function preencherTabela(produto: Produto){
    tabelaProdutos.innerHTML = '';

    //tabelaProdutos.innerHTML = `
     //<tr>
      //  <td>${produto.codigo</td>
        //<td>${produto.nome</td>
        //<td>${produto.preco</td>
        //<td>${produto.prime</td>
    //</tr> `
    let novaLinha: HTMLTableRowElement = document.createElement('tr')
    let colunaCodigo: HTMLTableRowElement = document.createElement('td');
    let colunaNome: HTMLTableRowElement = document.createElement('td');
    let colunaPreco: HTMLTableRowElement = document.createElement('td');
    let colunaPrime: HTMLTableRowElement = document.createElement('td');
    let colunaAcoes: HTMLTableRowElement = document.createElement('td');

    novaLinha.setAttribute('id',` ${produto.codigo}`);
    novaLinha.setAttribute('class','registros');
    colunaCodigo.innerHTML = `${produto.codigo}`;
    colunaNome.innerHTML = produto.nome;
    colunaPreco.innerHTML = `${produto.preco}`;
    colunaPrime.innerHTML = `${produto.prime}`;
    colunaAcoes.innerHTML = `
                                <img type="button" width="40" src="../public/img/delet.svg" 
                                onclick="removerProduto(${produto.codigo})">
    `;
    
    novaLinha.appendChild(colunaCodigo);
    novaLinha.appendChild(colunaNome);
    novaLinha.appendChild(colunaPreco);
    novaLinha.appendChild(colunaPrime)    

}


    

    