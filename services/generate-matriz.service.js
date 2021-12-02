export const generateMatriz = (data, title) => {
    let values = data.map((item) => Object.values(item));
    let firstMerge = merge(values);
    let valuesWithoutComma = firstMerge.map((item) => {
        if (item.includes(", ")) {
            return item.split(", ").filter(String)
        }
        return item
    })
    let secondMerge = merge(valuesWithoutComma);
    let countDataItems = {};
    secondMerge.filter((item) => {
        if (typeof countDataItems[item] != "number") {
            countDataItems[item] = 0;
        }
        countDataItems[item]++;
    });
    let matriz = Object.keys(countDataItems).map((key) => [key, countDataItems[key]]);
    return [[title, "Quantidade"]].concat(matriz);
}

const merge = (array) => {
    return [].concat.apply([], array);
}