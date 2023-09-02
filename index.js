
  
  /*Exercício 1
  a) ele quer testar, se o numero que colocou o usuario dividido entre dois (2) é igual em tipo e valor ao (0)
  b) para o numeros:2,4,6,8 tudo numero par
  c) tudo numero impar
  
  Exercicio 2
  a)Para realiçar uma "lista" de condiciones é dizer posibles variavles.
  b)O preço da fruta maça é 2.25R$ preco
  c) Acontece que o bloco de codigo vai continuar execuatando 
   
  Ercício 3
  a) transforma em um "Numero" o stringi colocado pelo usuário
  b)10 = Esse numero passou o teste 
    -10= Erro
    Por caua de que não tem por exemplo um "defaul" 
 C) 
*/



  
 //Exercício de escrita de codigo 1
    const idade = Number (prompt ("Qual é sua idade" ))
    if(idade >= 18){
        console.log ("Você pode dirigir")
    } else {
        if ( idade < 18)
        console.log ("Você não pode dirigir")
    }

    console.log (idade)








    //Exercício 2
    const turno = prompt ("Digita o horario M (matutino) ou V (Vespertino) ou N (Noturno)").toLowerCase() 
    if (turno === "m"){
        console.log ("bom Dia!")

    }else if (turno === "v"){
            console.log ("Boa,tarde")

    } else if (turno === "n"){
            console.log ("Boa,Noite")
    }



    //Exercício 3
const turno1 = prompt ("Digita o horario M (matutino) ou V (Vespertino) ou N (Noturno)").toLowerCase()
  switch (turno1) {
    case "m":
        console.log("bom Dia!")
       break
    case "v":
        console.log("Boa,tarde")
      break
    case "n":
        console.log ("Boa,noite")
    break
    default:
        console.log ("nao identificado")
        break
  }

const filme = prompt ("Que gênero de filme vão assistir,fantasia o Comédia").toLocaleLowerCase()
const filme1= (filme === "fantasia")
const preco = Number (prompt ( "preço do ingresso")) 
 const preco1 = (preco < 15)  


const comparar = (filme1,preco) 





