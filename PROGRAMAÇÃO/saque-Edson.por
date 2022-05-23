programa {
	funcao inicio() {
	    
	    inteiro saque
	    inteiro n50 = 0, n10 = 0, n5 = 0, n1 = 0
	    
	    // valor do saque = input | somente valor inteiro
	    // notas = 50, 10, 5, 1
	    
	    escreva("Digite o valor do saque em GC$ ")
	    leia(saque)
	    
	    enquanto(saque >= 50){
	        saque = saque - 50
	        n50 = n50 + 1
	    }
	    
	    enquanto(saque >= 10){
	        saque = saque - 10
	        n10 = n10 + 1
	    }
	    
	    enquanto(saque >= 5){
	        saque = saque - 5
	        n5 = n5 + 1
	    }
	    
	    enquanto(saque >= 1){
	        saque = saque - 1
	        n1 = n1 + 1
	    }
		
        escreva("Notas a serem retiradas \n")
        escreva("GC$ 50,00 --> " + n50 + "\n")
        escreva("GC$ 10,00 --> " + n10 + "\n")
        escreva("GC$ 5,00 --> " + n5 + "\n")
        escreva("GC$ 1,00 --> " + n1 + "\n")
	}
}