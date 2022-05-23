//5. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
//é um valor perfeito ou falso se não for. Um valor é dito perfeito
//quando ele é igual a soma dos seus divisores excetuando elepróprio.
//Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus divisores

programa
{
	inclua biblioteca Util --> u
	
	funcao inicio()
	{
		inteiro valor = 0
		escreva("Digite um valor: ")
		leia(valor)
		limpa()	
		calculo(valor)	
		
	}

	funcao logico calculo(inteiro numero){
		inteiro soma_divisores = 0
		inteiro guarda_divisor[10]
		inteiro posicao_lista = 0

		para (inteiro divisor = 1; divisor <= numero/2; divisor++){
			se (numero % divisor == 0){
				soma_divisores += divisor
				posicao_lista++
				guarda_divisor [posicao_lista-1] = divisor
			}
		}
		
		se (soma_divisores == numero){
			escreva("O " + numero + " é um número perfeito")
			escreva("\nSeus divisores são: ")
			posicao_lista = posicao_lista * 0
			para (inteiro contador = 0; contador < u.numero_elementos(guarda_divisor); contador++){
				
				se(guarda_divisor[contador] != 0){
				
				escreva(guarda_divisor[posicao_lista] + " ,")
				posicao_lista++
				}
			}
			retorne verdadeiro
		}
		senao{
			escreva("\nO " + numero + " não é um número perfeito")
			retorne falso
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1214; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {numero, 20, 31, 6}-{guarda_divisor, 22, 10, 14}-{posicao_lista, 23, 10, 13}-{contador, 37, 17, 8};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */