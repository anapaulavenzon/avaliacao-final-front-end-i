programa
{
	
	funcao inicio()
	{

	real n1, n2, n3, nota_total,media
		
		escreva("nota1 ")
		leia(n1)
		escreva("nota2 ")
		leia(n2)
		escreva("nota3 ")
		leia(n3)

		nota_total = (n1*2) + (n2*3) + (n3*5)
		media = nota_total / (2+3+5)
		escreva("media: " + media )

		se(media>=7){
			escreva("aluno aprovado")
		}senao {   
			escreva("aluno reprovado")
		}
			
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 373; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */