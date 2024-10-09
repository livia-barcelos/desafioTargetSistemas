function fibonacci(n) {
    const fib = [0, 1]; 

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    
    return fib; 

function pertenceAFibonacci(num) {
    const limite = 20; 
    const fibSeq = fibonacci(limite);
    
    if (fibSeq.includes(num)) {
        console.log(`${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${num} não pertence à sequência de Fibonacci.`);
    }
}

}

pertenceAFibonacci(numero);