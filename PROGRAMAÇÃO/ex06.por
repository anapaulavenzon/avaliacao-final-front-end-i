//Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
//a conta do usuário deve ser criada já com um saldo positivo. O
//usuário precisa informar a quantidade de dinheiro que deseja
//retirar, esse valor deve ser um número positivo, múltiplo de 5 e
//menor do que o saldo. Cada saque eletrônico cobra uma taxa de
//R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo
//certo com o saque, e se o usuário informar um valor maior que o
//saldo deve ser informado ao usuário que o mesmo não tem dinheiro
//suficiente em conta para realizar o saque.
//OBS: Na verificação se o valor do saque é maior que o saldo deve ser
//considerado e contabilizado também o valor da taxa a ser cobrada
//pelo saque. Ou seja, o valor a ser sacado somado ao valor da taxa
//do saque não pode ser maior que o saldo disponível.
programa
{
	
	funcao inicio()
	{
		real saldo = 100.
		real taxa =4.5
		inteiro saque = 0
						
		
		escreva("valor de retirada R$ ")
		leia(saque)

		se(saque <=0 ou saque % 5 != 0){
			escreva("valor do saque deve ser maior que zero e cédulas de 5,00 / 10,00 / 50,00")
		}
		se((saque + taxa)<=saldo){
			saldo = saldo -(saque+taxa)
			escreva("operacao realizada com sucesso \n")
			escreva("saldo atual:R$ "+saldo)
	     }senao{
		escreva("saldo insuficiente")
	     }
 }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 964; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */