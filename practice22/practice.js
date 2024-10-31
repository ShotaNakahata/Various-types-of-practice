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

// console.log(doubleValues([1, 2, 3, 4, 5])); // [2, 4, 6, 8, 10]


// 問題 2: 配列の各要素に1を加える
// 目的: mapを使って配列の各要素を変更する方法を練習する。

// 配列 [10, 20, 30, 40] の各要素に1を加え、新しい配列を返す関数 incrementByOne(arr) を作成してください。

function incrementByOne(arr) {
    const output = arr.map(number => number + 1)
    return output
}

//   console.log(incrementByOne([10, 20, 30, 40])); // [11, 21, 31, 41]

// 問題 3: 名前の大文字変換
// 目的: mapで文字列を操作する方法を練習する。

// 文字列の配列 ["alice", "bob", "charlie"] を受け取り、
// 各名前をすべて大文字に変換した新しい配列を返す関数 toUpperNames(arr) を作成してください。

function toUpperNames(arr) {
    return arr.map(name => name.toUpperCase())
}

// console.log(toUpperNames(["alice", "bob", "charlie"])); // ["ALICE", "BOB", "CHARLIE"]


const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

function getAges(arr) {
    return arr.map(Onepeaple=>Onepeaple.age)
}

console.log(getAges(people));
// [25, 30, 35]
