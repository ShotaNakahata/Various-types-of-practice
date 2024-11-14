// 出力：
// 合計値
// 平均値
// 最小値
// 最大値
// 標準偏差
const numbers = [10, 20, 30, 40, 51];
function Calculate(numbers) {
    const length = numbers.length;
    const minNuber = Math.min(...numbers)
    const maxNumber = Math.max(...numbers)
    const sum = numbers.reduce((acc, number) => {
        acc += number;
        return acc
    }, 0)
    const average = (sum / length).toFixed()
    // console.log(average)
    // console.log(sum)
    const variance = numbers.reduce((acc, number) => {
        return acc + Math.pow(number - average, 2);
    },0)/length

    const standardDeviation = Math.sqrt(variance).toFixed(2)

    return { sum, average, minNuber, maxNumber ,standardDeviation}
}

console.log(Calculate(numbers))
