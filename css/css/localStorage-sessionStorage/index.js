// VARIAVEIS
let botaoCriar = document.querySelector('#botao-criar');
let botaoMostrar = document.querySelector('#botao-mostrar');

//EVENTOS
botaoCriar.addEventListener('click', criarRegistro);
botaoMostrar.addEventListener('click', mostrarRegistro);


// 1º CRIAR um registro => set => window.localStorage.setItem('chave', 'valor');
function criarRegistro(){
    let listaNumeros = [1, 2, 4, 7];
    let listaUsuarios = [
        {
            username: 'joaodasilva',
            password: 'senha123'
        },
        {
            username: 'mariadasilva',
            password: 'senha123789'
        },
    ]

    //transformando em string
    let retorno = JSON.stringify(listaUsuarios);
    
    //gravando no localstorage
    window.localStorage.setItem('usuarios', retorno);

    alert('Registro criado!');
}

//2º PEGAR registro do localStorage => get => window.localStorage.getItem('chave')
function mostrarRegistro(){
    let retorno = JSON.parse(window.localStorage.getItem('usuarios'));

    console.log(retorno);

    for (const item of retorno) {
       console.log(item);
    }
}


// 3ª EXCLUIR um registro especifico => remove => window.localStorage.removeItem()
window.localStorage.removeItem('Titulo');
window.localStorage.removeItem('Um titulo qualquer');
window.localStorage.removeItem('listaNumeros2');
window.localStorage.removeItem('listaNumeros');
window.localStorage.removeItem('listaNumeros3');


// 4º LIMPAR TUDO => clear => window.localStorage.clear();
window.localStorage.clear();


