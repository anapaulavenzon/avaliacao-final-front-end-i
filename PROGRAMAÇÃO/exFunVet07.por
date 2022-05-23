//7. Desenvolva um algoritmo para percorrer um vetor de 20 elementos
//inteiros e no final mostre a soma de todos os elementos.

programa {
    funcao inicio() {
        inteiro numeros[20] = {5, 5, 5, 5 ,5 ,5, 5, 5, 5 ,5 ,5, 5, 5, 5 ,5 ,5, 5, 5, 5 ,5}

        inteiro soma = 0
        para(inteiro i = 0; i <= 19; i++){
            soma = soma + numeros[i]
        }

        escreva("A soma do vetor é: " + soma)
    }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 251; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */