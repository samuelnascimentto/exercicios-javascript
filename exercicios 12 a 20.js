// Ex:12
function mediaFinal(nota1, nota2){
    let media = (nota1 + nota2)/2;

    if(media>=7){
        console.log("Aprovado")
    }else if(media>=5 && media<=6.9){
        console.log("media")
    }else{
        console.log("Reprovado!")
    }
}

mediaFinal(7,2); 
mediaFinal(5,5); 
mediaFinal(9,7); 


// Ex:13
function calcularImc(peso,altura){
    let imc = peso / (altura * altura);

    if(imc < 18.5){
        console.log("Abaixo do peso!",peso, altura, imc);

    }else if(imc >= 18.5 && imc <= 25){
        console.log("Peso na Média!",peso, altura, imc);

    }else if(imc >= 25 && imc <=30){
        console.log("Sobrepeso!",peso, altura, imc);

    }
    else{
        console.log("Obesidade!",peso, altura, imc);

    }

} 

calcularImc(60,1.70);
calcularImc(80,1.70);
calcularImc(100,1.70);

// Ex14:
function verificarBissexto(ano){
    if(ano % 4 == 0 && ano % 400 == 0 || (ano % 100 ==1 ) ){
        console.log("Ano Bissexto",ano);

    }else{
        console.log("O ano:",ano ,"não é bissexto");
    }

}


verificarBissexto(2001);
verificarBissexto(2100);
verificarBissexto(2000);

// Ex15:
function verificarPalindromo(palavra){
    let palavraInvertida = palavra.split("").reverse().join("");
    
        if(palavra == palavraInvertida){
            console.log(palavra + " é um Pálindromo");
        }else{
            console.log(palavra + " Não é um Pálindromo");
    
        }
    }   
    
    verificarPalindromo ("ana");
    verificarPalindromo ("arara");
    verificarPalindromo ("agata");

// Ex16:
function verificarNumeros(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        console.log("O maior número é:", num1);

    }else if(num2 > num1 && num2 > num3){
        console.log("O maior número é:", num2);
        
    }else{
        console.log("O maior número é:", num3);

    }
}

verificarNumeros(1, 2, 3); // Imprime: 3 é o maior número
verificarNumeros(5, 3, 4); // Imprime: 5 é o maior número
verificarNumeros(7, 8, 7); // Imprime: 8 é o maior número

// Ex17:
function parImpar(num){
    if(num%2==0){
    console.log("O número " + num + " é par")
    
    }else{
        console.log("O número " + num +" é Impar")
        
    }
}

parImpar(1);
parImpar(2);
parImpar(3);
parImpar(712);

// Ex18:
function podeDirigir(idade){
    if(idade >= 18){
        console.log("Você possui " + idade + " anos de idade, e pode dirigir!")
    }else{ 
        console.log("Você possui " + idade + " anos de idade, não pode dirigir!")

    }
}

podeDirigir(21);
podeDirigir(22);
podeDirigir(13);
podeDirigir(12);

// Ex19:
function dentroDoIntervalo(numero, limiteInferior, limiteSuperior) {

    if (numero >= limiteInferior && numero <= limiteSuperior) {
      console.log(numero + " está dentro do intervalo");
    } else {
      console.log(numero + " está fora do intervalo");
    }
  }
  
  dentroDoIntervalo(5, 1, 10); 
  dentroDoIntervalo(15, 1, 10); 

// Ex20:
function classificarAluno(nota) {
    if (nota >= 9) {
      console.log("A");
    } else if (nota >= 8) {
      console.log("B");
    } else if (nota >= 7) {
      console.log("C");
    } else if (nota >= 6) {
      console.log("D");
    } else {
      console.log("F");
    }
  }
  
  classificarAluno(9);
  classificarAluno(8);
  classificarAluno(7);
  classificarAluno(6);
  classificarAluno(5);
  