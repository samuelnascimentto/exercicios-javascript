// Ex:21
function verificarEstacao (estacao){

    if(estacao == 12 || estacao <= 3){
      console.log("Verão")
  
    }else if(estacao <= 6){
      console.log("Outono")
      
    }else if(estacao <= 9){
      console.log("Inverno")
  
    }else{
      console.log("Primavera")
  
    }
  }
  
  verificarEstacao(12);
  verificarEstacao(4); 
  verificarEstacao(7); 
  verificarEstacao(10);

// Ex:22

function determinarMes(mes){
  switch(mes){
    case 2:
      console.log("28 ou 29 dias");
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      console.log("30 dias");
      break;
    default:
     console.log("31 dias");
  }
}

determinarMes(2);
determinarMes(4);
determinarMes(12);

// Ex22.2
function classificacao(posicao){
  switch(posicao){
    case 1:
      console.log("Primeiro lugar!");
      break;

    case 2:
      console.log("Segundo lugar");
      break;

    case 3:
      console.log("Terceiro lugar");
      break;

    case 4:
      console.log("Quarto lugar");
      break;
      
    default:
      console.log("Parabéns por concluir a prova!");
      break;

  }
}

classificacao(1);
classificacao(3);
classificacao(10);
classificacao(2);

// Ex23:
function verificarSemaforo(semaforo){
  switch(semaforo){
    case "vermelho":
      console.log("Pare agora seu veículo!");
      break;
      
      case "verde":
        console.log("Continue andando");
        break;
      
      case "amarelo":
        console.log("Diminue a velocidade");
        break;
      
      default:
        console.log("Cor invalida")
        break;
  }
}

verificarSemaforo("verde");
verificarSemaforo("vermelho");
verificarSemaforo("amarelo");
verificarSemaforo("verde-cinza");

// Ex24:

for(i=1; i<=10; i++){
  console.log(i);
}

// Ex24.2:
for(j=10;j>=1;j--){
  console.log(j);
}

// Ex:25
let i = 10;

while(i>=1){
  console.log(i)
  i--;
}

// Ex:25.2
let j = 1;

while(j<=10);
console.log(j);
j++;

// Ex:26
let num = 1;

do {
  if(num%2!=0){
    console.log(num);
  }
  num++;
} while (num <=20)

// Ex27:
for(let i =1; i <=10; i++ ){
  console.log("5 x "+ i+" = " + 5*i);
}

// Ex28:
let i =1;
let soma =0;

while(i<=100){
  soma  += i
  i++;
}
console.log(soma)

// Ex29:
let i =1;
while(i<100){
  i++;
  if(i%2!=1){
    console.log(i)
  }
}
}

// Ex30:

for(let i =2; i<=100; i++){

  let numPrimo = true;

  for(let j=2; j < i; j++){
    if(i%j ==0){
      numPrimo = false;
      break;
    } 
  }
  if (numPrimo) {
    console.log(i);
  }
}

