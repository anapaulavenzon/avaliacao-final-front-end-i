programa
{
	
	funcao inicio()
	{
//8. Faça um algoritmo que leia a idade e peso de um atleta e imprima
//a sua categoria, de acordo com a seguinte tabela:
//Idade Peso Categoria
//Até 12 anos - Infantil
//13 a 16 anos Até 40kg Juvenil leve
//Acima de 40kg Juvenil pesado
//17 a 24 anos Até 45kg Sênior leve
//Acima de 45kg até 60kg Sênior médio
//Acima de 60kg Sênior pesado
//Acima de 24 anos - Veterano

     inteiro idade
	real peso
	
	escreva("sua idade: ")
	leia(idade)

	escreva("seu peso: ")
	leia(peso)

	se (idade <= 12){
	escreva("Categoria Infantil")
	}

	se (idade > 13 e idade <= 16){
		se (peso <= 40){
		escreva("Categoria Juvenil Leve")
		}
		se (peso > 40){
		escreva("Categoria Juvenil Pesado")
		}		
	}

	se (idade > 17 e idade <= 24){
			se (peso <= 45){
			escreva("Categoria Sênio Leve")
			}
			se (peso > 45 e peso <= 60){
			escreva("Categoria Sênior Médio")
			}
			se (peso > 60){
			escreva("Categoria Sênior Pesado")
			}
	}

	se (idade > 24){
		escreva("Veterano")
	}
	
	}
	
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 551; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */