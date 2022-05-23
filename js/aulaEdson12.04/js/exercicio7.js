/* 

Escreva um algoritmo que armazene o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. O algoritmo deve fazer uma validação para que as porcentagens dos votos armazenados (brancos, nulos e válidos) respeitem o limite do número total de eleitores, ou seja, garantir que a soma dos votos brancos, nulos e válidos não seja maior que o número total de eleitores.

*/

//preciso de numeroTotal, votosBranco, votosNulos, votosValidos, percentual 

let totalEleitores = Number(window.prompt("Digite o número total de eleitores do municipio: ")); //100
let somaVotos = 0;
let percentual = 0;


let votosBrancos = Number(window.prompt("Digite a quantidade de votos brancos: ")); 

if( votosBrancos > totalEleitores ) {
    //ERRO A SER MOSTRADO
    alert("Você informou um valor excedente ao numero total de eleitores.");

} else {
    
    let votosNulos = Number(window.prompt("Digite a quantidade de votos nulos: "));

    somaVotos = votosBrancos + votosNulos;

    if( somaVotos > totalEleitores ) {
        //ERRO A SER MOSTRADO
        alert("Você informou um valor excedente ao numero total de eleitores.");
    
    }else {
        
        let votosValidos = Number(window.prompt("Digite a quantidade de votos válidos: ")); // 0

        somaVotos += votosValidos; // somaVotos = somaVotos + votosValidos;

        if( somaVotos > totalEleitores ) {
            //ERRO A SER MOSTRADO
            alert("Você informou um valor excedente ao numero total de eleitores.");
        } else {

            if( somaVotos === totalEleitores ){

                //calcular percentual de votos brancos
                percentual = (votosBrancos * 100) / totalEleitores;
                alert(`${percentual}% de votos brancos.`);
                console.log(`${percentual}% de votos brancos.`)

                //calcular percentual de votos nulos
                percentual = (votosNulos * 100 ) / totalEleitores;
                alert(`${percentual}% de votos nulos.`);
                console.log(`${percentual}% de votos nulos.`);

                //calcular percentual de votos válidos
                percentual = (votosValidos * 100 ) / totalEleitores;
                alert(`${percentual}% de votos validas.`);
                console.log(`${percentual}% de votos válidos.`);

            }else {
                alert("ERRO, não foi possivel calcular o percentual exato dos votos. Reveja os dados informados!");
            }
        }
    }
}




