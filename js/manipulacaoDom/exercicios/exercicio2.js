 /*2 - Crie uma página HTML simples contendo um botão, depois crie um arquivo 
 javascript contendo uma função addImagem() que deve ser vinculado ao onclick do botão. 
 Ao clicar no botão deve ser adicionado uma imagem qualquer na tela.*/

            let bodyDoHTML = document.querySelector('body');

            //criar um elemento filho de body
            let imagem = document.createElement('img');
    
            function addImagem() {
                bodyDoHTML.appendChild(imagem);
            }
    