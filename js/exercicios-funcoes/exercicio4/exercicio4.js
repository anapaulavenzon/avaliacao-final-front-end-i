/* Crie uma função chamada calcularMedia(nota1, nota2, nota3, nome), que recebe 4 parâmetros sendo três inteiros e um texto (String). Esta função será chamada ao abrir a página e mostrará um alerta com a média. Exemplo: “João, sua média é 70.” A função também deve mostrar no console.log() as notas recebidas. Exemplo “Nota 1: 60,Nota 2: 70,Nota 3: 80”. */


function calcularMedia(n1, n2, n3, nome){

    alert(`${nome}, sua média é ${((n1 + n2 + n3) / 3).toFixed(2)}`);

    console.log(`Nota 1: ${n1}`);
    console.log(`Nota 2: ${n2}`);
    console.log(`Nota 3: ${n3}`);

}

calcularMedia(9, 10, 8, 'Leticia');