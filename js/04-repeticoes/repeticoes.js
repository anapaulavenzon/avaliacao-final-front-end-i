// UTILIZAÇÃO - faz um loop (repetição) enquanto atender a uma condição imposta


// WHILE - enquanto(true) executa 
let executa = false;
let contador = 1;

while(executa === true){ //enquanto a condição for verdadeira
    
    //faça o que tiver aqui dentro
    executa = window.confirm(`WHILE: Deseja continuar executando? Repetiu ${contador}`);

    contador++;
}




// DO WHILE - executa enquanto(true)
do {

    //faça o que tiver aqui dentro
    executa = window.confirm(`DOWHILE: Deseja continuar executando? Repetiu ${contador}`);

    contador++;

}while(executa === true); //enquanto a condição for verdadeira



// FOR - executa por um DETERMINADO número de vezes

/*      for(1ºparametro ; 2parametro; 3ºparametro){
                
                bloco de execução
        
        }
*/

// 1º parametro -> declaração da variavel de controle e seu valor inicial
// 2º parametro -> condição a ser atendida para repetição
// 3º parametro -> incremento ou decremento do valor da variavel de controle
for(let iterador = 10; iterador > 0; iterador--){
    
    // iterador só esta disponivel aqui
    // CONDIÇÃO TRUE? executa
    if(iterador % 2 === 0){
        //achei o par
    }
    
    //ao final modifica o valor do iterador e valida de novo
}