export const gerarMatrizParaGrafico = (dados: any, titulo: string) => {
    let valores: any = dados.map((item: any) => Object.values(item));
    let primeiroMerge = merge(valores);
    let valoresSemVirgula: any = primeiroMerge.map((item: string) => {
        if (item.includes(", ")) {
            return item.split(", ").filter(String)
        }
        return item
    })
    let segundoMerge = merge(valoresSemVirgula);
    let quantDadosItem: any[number] = {};
    segundoMerge.filter((item) => {
        if (typeof quantDadosItem[item] != "number"){
            quantDadosItem[item] = 0;
        }
        quantDadosItem[item]++;
    });
    let tabelaParaGrafico: any = Object.keys(quantDadosItem).map((key) => [key, quantDadosItem[key]]);
    return [[titulo, "Quantidade"]].concat(tabelaParaGrafico);
}

const merge = (array: any) => {
    return [].concat.apply([], array);
}