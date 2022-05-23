//CARGO: DONO DA LOJA
programa
{
	//PAINEL INFORMATIVO
	real saldo = 0.0  //regras do meu negocio: toda conta deve iniciar com o valor 0.0
	real taxaSaque = 2.50 //regras do meu negocio: todo saque cobra taxa de 2.5
	real taxaTransferencia = 4.5 //regras do meu negocio: tod transferencia cobra taxa de 4.5
	real chequeEspecial = -500.0
	//CARGO: ESTAGIARIO(MOSTRAR OPÇÕES DO MENU)
	funcao mostrarMenu(){
		
		escreva("MENU DE OPÇÃO\n")
		escreva("1 - Visualizar o saldo\n")
		escreva("2 - Depositar\n")
		escreva("3 - Sacar \n")
		escreva("4 - Transferir \n")
		escreva("5 - Sair \n")	
	}

	//CARGO: AUXILIAR ADMINISTRATIVO (MOSTRAR O SALDO DA CONTA)
	funcao mostrarSaldo(){
		escreva("\nSeu saldo é: G$ " + saldo + "\n")
	}


	//CARGO: AUXILIAR FINANCEIRO (RESPONSAVEL POR FAZER OS DEPOSITOS (CREDITAR $) NA CONTA)
	funcao depositar(){
		real valorDeposito

		escreva("Digite o valor a ser depositado: G$ ")
		leia(valorDeposito)

		saldo = saldo + valorDeposito
		
		escreva("Seu depósito foi realizado com sucesso!")
		mostrarSaldo()	
	}

	//CARGO: GERENTE SAQUE DE CONTAS (RESPONSAVEL POR CONTROLAR OS SAQUES DA CONTA)
	funcao sacar(){
		real valorSaque

		escreva("Digite o valor a ser sacado: G$ ")
		leia(valorSaque) 

		real saldoTemporario = saldo - valorSaque - taxaSaque

		se(saldoTemporario < chequeEspecial){
			escreva("Saldo insuficiente!\n")
		
		}senao {
			saldo = saldoTemporario

			escreva(valorSaque + " growcoins foram sacadas com sucesso \n")
			mostrarSaldo()
			
		}

		
		//JEITO DA LAURA
		//valorSaque = valorSaque + taxaSaque // 10 + 2.5 = 12.5

		//se(valorSaque < chequeEspecial){  // -500  -501 ou -510
			//saldo = saldo - valorSaque

			//escreva("Saque realizado com sucesso!\n")
			//mostrarSaldo() // -12.5
		//}senao {
			//escreva("Saldo insuficiente \n")
		//}

		
		
	}


	//CARGO: GERENTE GERAL
	funcao inicio()
	{

		inteiro opcao
		logico continua = verdadeiro


		enquanto(continua == verdadeiro){
			//chamar o estagiario
			mostrarMenu()

			escreva("\nDigite a opção desejada: ")
			leia(opcao)

			escolha(opcao){
				caso 1:
					limpa()
					
					//chamar o AUXILIAR ADMINISTRATIVO
					mostrarSaldo()
				pare
				
				caso 2:
					limpa()

					//chamar o AUXILIAR FINANCEIRO
					depositar()
				pare
	
				caso 3:
					limpa()
					
					//CHAMAR O GERENTE DE SAQUE DE CONTA
					sacar()
				pare
	
				caso 4:
					limpa()
					escreva("Opção 4: Transferir money da conta\n")
				pare
	
				caso 5:
					limpa()
					escreva("Saindo do sistema...\n")
					continua = falso //muda pra falso para parar o programa
				pare
	
				caso contrario:
					limpa()
					escreva("Opção inválida, tenta novamente \n")
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
 * @POSICAO-CURSOR = 1909; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */