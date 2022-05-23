//9. Escreva um algoritmo que faça a tabuada de um número e
//apresente o resultado de acordo com o modelo a seguir, sabendo
//que o multiplicando deverá ser fornecido pelo usuário (n) e a
//quantidade de iterações também (i).
//1 * 2 = 2
//2 * 2 = 4
//3 * 2 = 6
//...

programa
{
	
	funcao inicio()
	{
		inteiro valor_digitado
		inteiro maximo
		
		escreva("digite o número da tabuada ")
		leia(valor_digitado)
		escreva("digite número máximo de multiplcação ")
		leia(maximo)
		
		para(inteiro contadorB=1 ; contadorB<=maximo ; contadorB++){
			inteiro resultado=valor_digitado*contadorB
			escreva(valor_digitado + " * " + contadorB + " = " + resultado + "\n")
		}
		escreva("...")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 269; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */