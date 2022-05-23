programa
{
	
	funcao inicio()
	{
// 4. Escreva um algoritmo que solicite pelo terminal 2 números e uma
//operação matemática. O algoritmo deve realizar o cálculo com os 2
//números digitados conforme a operação informada.

		inteiro numero_a 
		inteiro numero_b
		real resultado
		caracter operacao
		
		escreva("digitar número 'a' inteiro aqui ")
		leia(numero_a)
		
		escreva("digitar número 'b' inteiro aqui ")
		leia(numero_b)

		escreva("informe a operação ")
		leia(operacao)

		escolha (operacao){
			
			caso '+':
			     escreva("resultado é " + (numero_a + numero_b))
			pare
			
			caso '-':
				escreva("resultado é " + (numero_a - numero_b))
			pare

			caso '*':
				escreva("resultado é " + (numero_a * numero_b))
			pare

			caso '/':
				se(numero_b==0){
					escreva("Não é possível dividir por 0, escolha outro inteiro")
				}
				escreva("resultado é " + (numero_a / numero_b))
			pare

			caso contrario:
			escreva("deu ruim, desconheço operação, tente novamente com operação válida")
			pare
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