programa
{

	funcao calcula_imc ( real peso, real alt){
	 	real imc = peso / (alt*alt)
	 	se(alt <=2.5){
	 		escreva("IMC " + imc)
	 	}senao
	 	escreva("altura inválida")
	}
	 			 
		funcao inicio(){
	
		real peso
		real alt
		escreva("declare peso ")
		leia(peso)
		escreva("\ndeclare alt ")
		leia(alt)
		calcula_imc(peso, alt)
	
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 336; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */