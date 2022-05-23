programa
{
	real saldo = 0.00
	real txsaque = 2.50
	real transf = 4.50
	real chEsp = -500.00
	
	funcao mostrarMenu(){
		escreva("\nMENU DE OPÇÕES\n\n")
		escreva("1. Visualizar o saldo em conta\n")
		escreva("2. Depositar GrowCoins\n")
       	escreva("3. Sacar GrowCoins\n")
		escreva("4. Transferir GrowCoins\n")
		escreva("5. Sair do sistema\n")
	}
	
	funcao mostrarSaldo(){
		  escreva("\nseu saldo: G$ " + saldo + "\n")
	}

	funcao depositar(){
		real mostrarDeposito

		escreva("Digite o valor para depósito: G$ ")
		leia(mostrarDeposito)

		saldo = saldo + mostrarDeposito
		
		escreva("Depósito foi realizado com sucesso!")
		mostrarSaldo()	
	}
	
	funcao sacar(){
		real valorSaque
		escreva("valor do saque: G$ ")
		leia(valorSaque)
		real saldoflutuante = saldo - valorSaque - txsaque
		se(saldoflutuante < chEsp){
			escreva("Não há saldo para esta operação")
		}senao {
			saldo = saldoflutuante
			escreva("operação feita com sucesso")
			mostrarSaldo()
		}
	}
	funcao transferir(){
		real valorTransferencia
		escreva("valor da transferência: G$ ")
		leia(valorTransferencia)
		real saldoflutuante = saldo - valorTransferencia - transf
		se(saldoflutuante <= saldo){
			escreva("Não há saldo para esta transação\n")
		}senao {
			saldo = saldoflutuante
			escreva(valorTransferencia + "Operação feita com sucesso")
			mostrarSaldo()
		}
	}
			
	funcao inicio(){
	
		inteiro opcao
		logico continua = verdadeiro
	
		enquanto(continua == verdadeiro){
		
			mostrarMenu()
			escreva("Digite a opção desejada: ")
			leia(opcao)
		
		  escolha(opcao){
			
			caso 1:
				limpa()
				mostrarSaldo()
								
			pare
			
			caso 2:
				limpa()
				depositar()
			pare
			
			caso 3:
				limpa()
				sacar()
				
			pare
			
			caso 4:
				limpa()
				transferir()
			pare
							
			caso 5:
			
				escreva("saiu do sistema\n\n")
				continua= falso
			pare

			caso contrario:
				escreva("opcão inválida")
			pare
		  }
		}
  	  }  
	}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 25; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */