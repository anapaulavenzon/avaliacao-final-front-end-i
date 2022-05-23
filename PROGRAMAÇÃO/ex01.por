programa
{
	
	funcao inicio()
	{
//Desenvolva um algoritmo para ler dois valores e imprimir uma das
//três mensagens a seguir:
//a. ‘Números iguais’, caso os números sejam iguais;
//b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
//c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.
	
	inteiro a1=0, a2=0
		escreva("digite o primeiro alagarismo ")
		leia(a1)
		escreva("digite o segundo algarismo ")
		leia(a2)
		
          limpa()
          
		se(a1==a2){
			escreva("Números iguais")
			retorne
			
		}se(a1>a2){   
			escreva("Primeiro é maior")
			retorne
			
		}se(a2>a1){
			escreva("Segundo maior")
			retorne
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 33; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */