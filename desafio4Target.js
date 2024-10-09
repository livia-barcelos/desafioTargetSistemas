const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Função para calcular e exibir o percentual de cada estado
function calcularPercentuais(faturamento) {
    const totalFaturamento = Object.values(faturamento).reduce((acc, val) => acc + val, 0);

    console.log("Faturamento mensal por estado e seus percentuais:");
    for (const estado in faturamento) {
        const percentual = (faturamento[estado] / totalFaturamento) * 100;
        console.log(`${estado}: R$ ${faturamento[estado].toFixed(2)} - ${percentual.toFixed(2)}%`);
    }
}

calcularPercentuais(faturamentoPorEstado);
