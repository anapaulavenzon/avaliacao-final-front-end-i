 /*1 - Crie uma página HTML simples contendo uma div identificada com um id 
 e um botão, depois crie um arquivo javascript com uma função addConteudo() 
 que deve ser vinculado ao onclick do botão. Ao clicar no botão adicionar na div o texto “Olá Mundo”*/

        let divExemplo = document.getElementById('exemplo');

        function addConteudo() {
            divExemplo.innerText = 'Olá Mundo';
        }