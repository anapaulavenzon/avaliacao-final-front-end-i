//1. Crie uma função que recebe 3 notas de um aluno por parâmetro e
//uma letra. Se a letra for A a função deve calcular a média aritmética,
//se for P, a média ponderada (peso: 5, 3 e 2). 

  programa{
    	
    funcao calcula_media(real n1, real n2, real n3, cadeia letra){
        real media = 0

        se(letra == "A"){
            real nota = n1 + n2 + n3
            media = nota / 3
        }

        se (letra == "P"){
            real nota = (n1 * 5) + (n2 * 3) + (n3 * 2)
            media = nota / (5 + 3 + 2)
        }

        escreva("A média foi: " + media)
    }

    funcao inicio() {
       calcula_media(9.,8.,7.8,"P")
    }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 635; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */