let numero = 12321;
let reverso = 0;
let temp = numero;

while (temp > 0) {
  let digito = temp % 10;
  reverso = reverso * 10 + digito;
  temp = Math.floor(temp / 10);
}
