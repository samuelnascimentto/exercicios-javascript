
let numero = 100;
let binario = "";

do {
  binario = (numero % 2) + binario;
  numero = Math.floor(numero / 2);
} while (numero > 0);
console.log(`O número em binário é ${binario}`);
