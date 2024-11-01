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
    return arr.map(Onepeaple => Onepeaple.age)
}

// console.log(getAges(people));
// [25, 30, 35]


// 問題 5: 商品価格を税金込みで表示
// 目的: 配列の数値に対して計算を行い、新しい配列を作成する練習です。

// 以下の定数 prices には商品の価格が格納されています。
// この配列の各価格に消費税（10%）を加えた新しい配列を返す関数 applyTax(arr) を作成してください。

const prices = [100, 200, 300];

function applyTax(arr) {
    return arr.map(price => {
        const priceTax = parseFloat((price * 1.1).toFixed())
        return priceTax
    })
}

// console.log(applyTax(prices)); 
// [110, 220, 330]


// 問題 6: フルネームの作成
// 目的: mapでオブジェクトの複数のプロパティを組み合わせ、新しい配列を作成する練習です。

// 以下の定数 users には、各人のfirstNameとlastNameが格納されています。
// これらを組み合わせ、各人のフルネーム（例: "John Doe"）を新しい配列として返す関数 getFullNames(arr) を作成してください。
const users = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Smith" },
    { firstName: "Emily", lastName: "Jones" }
];

function getFullNames(arr) {
    return arr.map(user=>{
        user = user.firstName+ " " +user.lastName
        return user
    })
}

console.log(getFullNames(users));
// ["John Doe", "Jane Smith", "Emily Jones"]
