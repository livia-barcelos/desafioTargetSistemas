// Simulação de dados de faturamento diário (0 representa dias sem faturamento)
const faturamentoDiario = [
    100.0, 200.0, 0, 300.0, 250.0, 0, 0, // Semana 1
    400.0, 150.0, 0, 350.0, 500.0, 0, 600.0, // Semana 2
    700.0, 0, 800.0, 0, 900.0, 1000.0, // Semana 3
    0, 1100.0, 1200.0, 0, 0, 1300.0, // Semana 4
];

function calcularFaturamento(faturamento) {
    const diasComFaturamento = faturamento.filter(valor => valor > 0);
    
    if (diasComFaturamento.length === 0) {
        console.log("Não há dias com faturamento.");
        return;
    }

    const menorFaturamento = Math.min(...diasComFaturamento);
    const maiorFaturamento = Math.max(...diasComFaturamento);
    const somaFaturamento = diasComFaturamento.reduce((acc, val) => acc + val, 0);
    const mediaFaturamento = somaFaturamento / diasComFaturamento.length;

    const diasAcimaDaMedia = diasComFaturamento.filter(valor => valor > mediaFaturamento).length;

    console.log(`Menor faturamento: R$ ${menorFaturamento}`);
    console.log(`Maior faturamento: R$ ${maiorFaturamento}`);
    console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}`);
}


calcularFaturamento(faturamentoDiario);
