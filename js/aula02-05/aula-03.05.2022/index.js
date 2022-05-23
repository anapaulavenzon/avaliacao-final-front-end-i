//Capture os dados preenchidos no formulário utilizando os métodos de manipulação do DOM. Ao final, mostre no console.log os dados preenchidos pelo usuário.

// O usuário deve marcar ao menos um checkbox. Deve ser validado o preenchimento desse input.

let formulario = document.querySelector('#form-cadastro');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    let nome = document.querySelector('#nome').value;
    let endereco = document.querySelector('#endereco').value;
    let cidade = document.querySelector('#cidade').value;
    let estado = document.querySelector('#estado').value;
    let cargo = document.querySelector('input[name="cargo"]:checked').value;
    let textoCurriculo = document.querySelector('#curriculo').value;

    let ListNodeAreaInteresse = document.querySelectorAll('input[class="area-interesse"]:checked');
    let areaInteresse = [];

    //validar o preenchimento dos campos
    if((nome === '') || (endereco === '') || (cidade === '') || (estado === '')){
        alert(`Os campos de dados pessoais são obrigatórios. Por favor, preencha!`);

        return
    }

    //validar se o usuario marcou um checkbox pelo menos
    if(ListNodeAreaInteresse.length === 0){
        alert(`Deixou de marcar alguma área de interesse`);

        return
    }
    
    for (const elemento of ListNodeAreaInteresse) {
        areaInteresse.push(elemento.value);
    }

    let recado = {
        descricao: 'blabla',
        detalhamento: 'teste destalhamento'
    }

    let dadosUsuario = {
        nome,
        endereco,
        recados: []
    }

    dadosUsuario.recados.push(recado);

    console.log(dadosUsuario);
    alert(`Dados recebidos com sucesso!`);
    limparDados();
});


function limparDados(){
    document.querySelector('#nome').value = '';
    document.querySelector('#endereco').value = '';
    document.querySelector('#cidade').value = '';
    document.querySelector('#estado').value = '';
    document.querySelector('#curriculo').value = '';

    let ListNodeAreaInteresse = document.querySelectorAll('input[class="area-interesse"]:checked');
    
    for (const elemento of ListNodeAreaInteresse) {
        elemento.checked = false;
    }

}