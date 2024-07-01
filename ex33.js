num1 = 0;
num2 = 1;
for(let i=1; i<10; i++){
    fibonacci = num1 + num2;

    console.log(fibonacci)
    num1 = num2;
    num2 = fibonacci;
}
