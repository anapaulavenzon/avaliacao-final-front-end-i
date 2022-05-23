programa
{
	
	funcao inicio()
	{
//As maçãs desta estação custam R$0,30 se forem compradas
//menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
//doze. Desenvolva um algoritmo que leia o número de maçãs
//compradas, calcule e escreva o valor total da compra.

     real preco
     
     inteiro maca
     
          
		escreva("Quantidade de macas ")
		leia(maca)
		 
		 limpa()
		
		se(maca>=12){
			preco = 0.25
		}senao{
			preco = 0.3
		}

		real total= preco * maca
		escreva("total a pagar: R$ " + total)
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