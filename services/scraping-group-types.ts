export const getCountGroups = (groupTypes: any, header: any) => {
    let values: any = groupTypes.map((group: any) => Object.values(group));
    let firstMerge = merge(values);
    let valuesWithoutStringCommas: any = firstMerge.map((item: string) => {
        if (item.includes(", ")) {
            return item.split(", ").filter(String)
        }
        return item
    })
    let secondMerge = merge(valuesWithoutStringCommas);
    let countGroups: any[number] = {};
    secondMerge.filter((group) => {
        if (typeof countGroups[group] != "number"){
            countGroups[group] = 0;
        }
        countGroups[group]++;
    });
    let arrayPatternForChart: any = Object.keys(countGroups).map((key) => [key, countGroups[key]]);
    return [header].concat(arrayPatternForChart);
}

const merge = (array: any) => {
    return [].concat.apply([], array);
}