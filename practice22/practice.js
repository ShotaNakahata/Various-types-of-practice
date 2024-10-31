// 問題 1: 数字を2倍に変換する
// 目的: map関数の基本的な使い方を学ぶ。

// 配列 [1, 2, 3, 4, 5] の各要素を2倍にして、新しい配列を返す関数 doubleValues(arr) を作成してください。
// const arr = [1, 2, 3, 4, 5]
// function doubleValues(arr) {
//     const output=arr.map(number=>number*2)
//     console.log(output)
// }

// doubleValues(arr); // [2, 4, 6, 8, 10]

function doubleValues(arr) {
    const output = arr.map(number => number * 2)
    return output
}

console.log(doubleValues([1, 2, 3, 4, 5])); // [2, 4, 6, 8, 10]
