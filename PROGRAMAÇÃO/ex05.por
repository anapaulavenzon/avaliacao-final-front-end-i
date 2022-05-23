//Escreva um algoritmo que tenha como valores de entradas o nome
//e idade do usuário e imprima no terminal o nome e a quantidade de
//letras que o nome possui, bem como a idade e o ano de nascimento
//do usuário. Ex: “Nome: Pedro, 5 letras. Idade: 22 anos, nasceu em
//2000”.

programa {

    inclua biblioteca Texto --> t
    funcao inicio() {

        cadeia nome
        inteiro numeroletras
        inteiro idade
        inteiro ano


        escreva("Digite seu nome: ")
        leia(nome)

        escreva("Qual sua idade: ")
        leia(idade)

        numeroletras = t.numero_caracteres(nome)
        ano = 2022 - idade

        escreva("Seu nome tem: " + numeroletras + " letras" +"\n" + "Voce nasceu em: " + ano )


    }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 735; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */