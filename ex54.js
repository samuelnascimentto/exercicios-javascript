function numeroPrimo(numero){

    for(let i =2; i<numero; i++){

        if(numero % i == 0){
            return false;
        }
    }
    return numero > 1;
}
console.log(numeroPrimo(11));