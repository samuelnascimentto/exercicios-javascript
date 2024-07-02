function maiorNumero(num1, num2, num3){

    if(num1> num2 && num1 > num3){
        return `O maior número é o ${num1}`

    }
    else if(num2> num1 && num2> num3){
        return `O maior número é o ${num2}`
        
    }
    else{
        return `O maior número é o ${num3}`

    }
}

console.log(maiorNumero(10,101,1001));

// function maiorNumero(num1, num2, num3){

//     return Math.max(num1, num2, num3);
// }

// console.log(maiorNumero(10,101,1001));