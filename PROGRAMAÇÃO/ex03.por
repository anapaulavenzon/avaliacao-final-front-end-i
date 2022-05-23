programa
{
	
	funcao inicio()
	{
//3. Desenvolva um algoritmo que faça o cálculo do índice de massa
//corporal de uma pessoa. Esse algoritmo deve solicitar ao usuário
//que digite sua altura, em seguida solicitar que digite seu peso e que
//lhe exiba o status. O status vai variar da seguinte forma:
//a. Se o IMC for menor que 18,5 o status a ser mostrado deve ser
//“Você está abaixo da faixa de peso ideal”;
//b. Se o IMC estiver acima de 24,99 o status a ser mostrado será
//“Você está acima da faixa de peso ideal”;
//c. Se o IMC for igual ou maior que 18,5 e igual ou menor que
//24,99, o status a ser mostrado será “Você está dentro da faixa
//de peso ideal”.
	real peso, altura, imc

	escreva("Digite sua altura: ")
	leia(altura)
	escreva("Digite seu peso: ")
	leia(peso)

	imc = peso / (altura * altura)

     limpa()
     
	se (imc < 18.5){		
		escreva("Você está abaixo da faixa de peso ideal!") 
	}

	se (imc > 24.99){		
		escreva("Você está acima da faixa de peso ideal!") 
	}

	se (imc >= 18.5 e imc <= 24.99){		
			escreva("Você está dentro da faixa de peso ideal!")
		}
	
	}
	
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 651; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */