// String a ser invertida (pode ser modificada)
let str = "Exemplo de string";

// Função para inverter a string
function inverterString(input) {
    let stringInvertida = "";

    // Percorre a string de trás para frente
    for (let i = input.length - 1; i >= 0; i--) {
        stringInvertida += input[i];
    }

    return stringInvertida; 
}

const resultado = inverterString(str);
console.log(`String original: ${str}`);
console.log(`String invertida: ${resultado}`);
