function descobrirFatorial(numero){
    let fatorial = 1;

    for(let i=2; i<=numero; i++){

        fatorial *= i;

    }
    return fatorial;
}

console.log(descobrirFatorial(5));