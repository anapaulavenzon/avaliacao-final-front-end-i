//10. Escreva um algoritmo que percorra os números inteiros entre 1 e 250
//e verifique quais números são múltiplos de 3 e quais são múltiplos
//de 5.

programa
{
	
	funcao inicio()
	{
		
	para(inteiro contador = 1; contador <= 250; contador++){
	escreva(contador +"\n")
	
		se(contador % 3 == 0){
		escreva("o número " + contador + " é múltiplo de 3 \n")
		}
		se( contador % 5 == 0){
		escreva("o número " + contador + " é múltiplo de 5 \n")
     	}
  	}
	}

}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 458; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */