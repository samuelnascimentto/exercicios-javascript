// Ex31:
let min = 1;
let max = 100;
let chute = Math.floor((max + min) / 2);
let numeroPensado = 50;

while (chute !== numeroPensado) {
  if (chute > numeroPensado) {
    max = chute;
  } else {
    min = chute;
  }
  chute = Math.floor((max + min) / 2);
}
console.log("O número pensado é: " + chute);