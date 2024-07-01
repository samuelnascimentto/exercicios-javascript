let palavra = "Hello";
let invertida = "";
let i = palavra.length - 1;


while (i >= 0) {
  invertida += palavra[i];
  i--;
}
console.log(`A string "${palavra}" invertida é "${invertida}"`);
