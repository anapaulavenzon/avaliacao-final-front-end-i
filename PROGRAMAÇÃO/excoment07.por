programa {    inclua biblioteca Matematica --> m
  funcao inicio() {
     real altura_pedro = 1.50  //estatico
     real altura_lucas = 1.10 //estatico

    inteiro anos = 1
    inteiro igual = 0
    inteiro maior = 0

    //laços de repetição ou estruturas de repetição
    enquanto (altura_lucas <= altura_pedro){

        altura_pedro = m.arredondar(altura_pedro + 0.02, 2) // arredonda = remove toas as casas após a segunda casa depois da virgula
        altura_lucas = m.arredondar(altura_lucas + 0.03, 2) // arredonda = remove toas as casas após a segunda casa depois da virgula
        
        escreva("Se passaram " + anos + " anos \n")
        escreva("Altura Pedro: " + altura_pedro)
        escreva("\n Altura Lucas: " + altura_lucas + "\n")
        
        se (altura_lucas == altura_pedro){
            igual = anos  // anos = 1 = quantas repetições foram feitas
        }

        se (altura_lucas > altura_pedro) {
            maior = anos // anos = 1 = quantas repetições foram feitas
        }

        anos++ //incrementa +1 ao valor atual da variavel
    }

    //resposta e resolução do problema
    escreva("O Lucas ficou do mesmo tamanho que Pedro após " + igual + " anos. \n")
    escreva("O Lucas ficou maior que Pedro após " + maior + " anos")

  }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1277; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */