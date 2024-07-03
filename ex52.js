function fibonacci(num){
    let f0 = 0;
    let f1 = 1;

    for(let i=2; i<=num; i++){
    
        let laco = f0;
        f0 = f1;
        f1 = f0 + i;
        
    }
    return f1;
}

console.log(fibonacci(11));
