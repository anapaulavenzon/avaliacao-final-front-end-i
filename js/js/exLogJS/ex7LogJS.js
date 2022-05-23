//7. Escreva um algoritmo que armazene o número total de eleitores de
//um município, o número de votos brancos, nulos e válidos. Calcular
//e escrever o percentual que cada um representa em relação ao
//total de eleitores. O algoritmo deve fazer uma validação para que as
//porcentagens dos votos armazenados (brancos, nulos e válidos)
//respeitem o limite do número total de eleitores, ou seja, garantir que
//a soma dos votos brancos, nulos e válidos não seja maior que o
//número total de eleitores.

let ttEleitores = Number(prompt("Digite o número total de eleitores do município: "));
let somaVotos = 0;
let percentual = 0;

let vtBrancos = Number(prompt("Digite o número total de votos brancos do município: "));
if(vtBrancos > ttEleitores){
    alert("Você informou um número maior de votos brancos do que o número de eleitores");
}else{

let vtNulos = Number(prompt("Digite o número total de votos nulos do município: "));
somaVotos = vtBrancos + vtNulos
if(somaVotos > ttEleitores)
    alert("Você informou um número maior de votos nulos do que o número de eleitores");
}

let vtValidos = Number(prompt("Digite o número total de votos válidos do município: "));
if(somaVotos > ttEleitores){
    alert("Você informou um número maior de votos válidos do que o número de eleitores");
   }else{
   
if(somaVotos === ttEleitores){

        percentual = (vtBrancos * 100) / ttEleitores;
                alert(`${percentual}% de votos brancos.`);
                console.log(`${percentual}% de votos brancos.`);

        percentual = (vtNulos * 100 ) / ttEleitores;
                alert(`${percentual}% de votos nulos.`);
                console.log(`${percentual}% de votos nulos.`);

        percentual = (vtValidos * 100 ) / ttEleitores;
                alert(`${percentual}% de votos válidos.`);
                console.log(`${percentual}% de votos válidos.`);

    }else {
                alert("ERRO, não foi possivel calcular o percentual exato dos votos. Reveja os dados informados!");
            }
    }    
    





