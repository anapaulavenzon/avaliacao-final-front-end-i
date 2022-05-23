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
    
    if((nome === '') || (endereco === '') || (cidade === '') || (estado === '')){
        alert(`Os campos de dados pessoais são obrigatórios. Por gentilza, preencha os campos em branco`);

         return
    }

        if(ListNodeAreaInteresse.length === 0) {
        alert(`Deixou de marcar alguma área de interesse`);

    }

    let dadosUsuario = {
        nome,
        endereco,
        cidade,
        estado,
        cargo,
        areaInteresse,
        textoCurriculo
    }

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
        elemento.removeAttribute('checked');
    }

}