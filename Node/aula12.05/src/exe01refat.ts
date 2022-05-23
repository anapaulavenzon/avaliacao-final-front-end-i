


let ladoA: number = Number(prompt("Digite valor lado A do triângulo"));
let ladoB: number = Number(prompt("Digite valor lado B do triângulo"));
let ladoC: number = Number(prompt("Digite valor lado C do triângulo"))

if((ladoA < ladoB + ladoC) && (ladoB < ladoA + ladoC) && (ladoC < ladoA + ladoB)){

    if((ladoA === ladoB) && (ladoB === ladoC)){
        console.log("Triângulo equilátero")

    }else if((ladoA === ladoB || ladoA === ladoC || ladoB === ladoC)){
        console.log("Triângulo isósceles")
    
    }else{
        console.log("Triângulo escaleno")
    }

}else{
    console.log("Valores não forma um triângulo")
}