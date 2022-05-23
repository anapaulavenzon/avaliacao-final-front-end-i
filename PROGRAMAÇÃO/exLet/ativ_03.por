programa {

	funcao logico ePrimo(inteiro numero){

		se(numero == 0){
			retorne falso
		}

		se(numero == 1){
			retorne falso
		}

		inteiro metade = (numero / 2) + 1

		logico primo = verdadeiro


		para(inteiro i = 2; i < metade; i++){
			se (numero % i == 0){
				primo = falso
				pare
			}
		}


		retorne primo
	}
	
	funcao inicio() {
		inteiro num
		
		escreva("Digite um valor: ")
		leia(num)

		logico primo = ePrimo(num)

		escreva(primo)
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 432; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */