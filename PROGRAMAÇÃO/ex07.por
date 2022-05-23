 //7. Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
//Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
//Construa um algoritmo que calcule e imprima quantos anos serão
//necessários para que:
//a. Lucas e Pedro tenham o mesmo tamanho;
//b. Lucas seja maior que Pedro.
  
  programa {    inclua biblioteca Matematica --> m
  funcao inicio() {
     real altura_pedro = 1.50  
     real altura_lucas = 1.10 

    inteiro anos = 1
    inteiro igual = 0
    inteiro maior = 0

    
    enquanto (altura_lucas <= altura_pedro){

        altura_pedro = m.arredondar(altura_pedro + 0.02, 2)
        altura_lucas = m.arredondar(altura_lucas + 0.03, 2) 
        escreva("Se passaram " + anos + " anos \n")
        escreva("Altura Pedro: " + altura_pedro)
        escreva("\n Altura Lucas: " + altura_lucas + "\n")
        
        se (altura_lucas == altura_pedro){
            igual = anos
        }

        se (altura_lucas > altura_pedro) {
            maior = anos 
        }

        anos++ 

    escreva("O Lucas estará do mesmo tamanho que Pedro após " + igual + " anos. \n")
    escreva("O Lucas ficará maior que Pedro após " + maior + " anos")

  }
}
  }
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 267; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */