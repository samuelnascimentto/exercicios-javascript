console.log("ola, Console!!");


// Ex1:
let idade = 18;
let peso = 100;
console.log("peso:",idade);
console.log("peso:",peso);

// Ex2:
let pi = 3.14159;
console.log("O valor de PI è:", pi);

// Ex3:
let numeroMaximo = Number.MAX_VALUE;
console.log("O número máximo digitado foi:", numeroMaximo);

// Ex4:
let nome = "Samuel";
let sobrenome = "Santos";
let nomeCompleto = nome+" "+sobrenome;

console.log("Seu nome completo é:",nomeCompleto);

// Ex5:
let num1 = 50;
let num2 = 60;

let soma = num1 + num2;

console.log("soma dos valores: ",soma);

// Ex6:
let boolean1 = true;
let boolean2 = false;

console.log("AND: ",boolean1 && boolean2);
console.log("OR: ",boolean1 || boolean2);
console.log("NOt: ",!boolean1);

// Ex7:
let nume1 = 10;
let nume2 = 20;
let nume3 = 40;

console.log("numero 1 > numero 3", nume1 > nume3);
console.log("numero 1 == numero 3", nume1 == nume3);
console.log("numero 1 < numero 3", nume1 < nume3);

// Ex8:
let valor = 10;
valor ++;
console.log("valor incrementado:", valor);

// Ex9:
function verificarNumero(numero) {
    if(numero >0){
        console.log("O número é positivo");
    }else if(numero<0){
        console.log("O número é negativo");
    }else{
        console.log("O número é Zero");
    }
}
verificarNumero(1000); // Imprime: O número é positivo
verificarNumero(-1212); // Imprime: O número é negativo
verificarNumero(0); // Imprime: O número é zero


// Ex10:
function calcularMedia(nota1, nota2){
    let media = (nota1 + nota2)/2;

    if(media<5){
        console.log("Abaixo da média! Estude mais!", media)
    }else if(media==5){
        console.log("Dentro da média! Estude mais!", media)
    }else{
        console.log("Acima da média! Parabéns!", media)
    }
}

calcularMedia(7,2); 
calcularMedia(5,5); 
calcularMedia(9,7); 


// Ex11:
function verificarVoto (idade){
    if(idade>18){
        console.log("Sua idade é:",idade,"Pode votar!");
    }else{
        console.log("Sua idade é:",idade, "Não pode votar");
    }
}

verificarVoto (12);
verificarVoto (19);