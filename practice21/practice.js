// 問題1: 配列内の数値の合計
// 目的: reduce()の基本的な使い方を学びます。

// 課題内容
// 次のような配列 numbers が与えられています。この配列のすべての数値の合計を計算する関数 sumArray(numbers) を実装してください。
const numbers = [10, 20, 30, 40];

function sumArray(numbers) {
    const sum = numbers.reduce((acc, number) => {
        acc += number
        return acc
    }, 0)
    console.log(sum)
}

sumArray(numbers); // 100

// 問題2: 配列内の文字列の出現回数カウント
// 目的: reduce()を用いて、各要素の出現回数をオブジェクトに集計する方法を学びます。

// 課題内容
// 果物の名前が入った配列 fruits が与えられています。
// 各果物が何回出現しているかをカウントし、オブジェクトで返す関数
// countFruits(fruits) を実装してください。

const fruits = ["apple", "banana", "orange", "apple", "banana", "apple"];

function countFruits(fruits) {
    const countFruits = {}
    const output = fruits.reduce((acc, frut) => {
        if (acc[frut]) {
            acc[frut] += 1
        } else {
            acc[frut] = 1
        }
        return acc
    }, countFruits)
    console.log(output);
}
countFruits(fruits); // 出力例: { apple: 3, banana: 2, orange: 1 }

// 問題3: 配列内のオブジェクトの特定プロパティを集計
// 目的: 配列内のオブジェクトのデータを集計し、特定のプロパティの合計を取得する方法を学びます。

// 課題内容
// ショッピングカートに入っている商品リストが配列cartとして与えられています。
// 各商品オブジェクトには、商品名 name と price プロパティが含まれています。
// カート内の商品の合計価格を計算する関数 calculateTotal(cart) を実装してください

const cart = [
    { name: "Apple", price: 120 },
    { name: "Banana", price: 80 },
    { name: "Orange", price: 100 }
];

function calculateTotal(cart) {
    const output = cart.reduce((acc, product) => {
        acc += product.price
        return acc
    }, 0)
    console.log(output)
}
calculateTotal(cart); // 300

// 問題4: 複雑なオブジェクトのネストを持つ配列のデータ変換
// 目的: ネストされたデータを扱い、reduce()でキーごとに集計する方法を学びます。

// 課題内容
// 次のようなユーザー情報の配列 users が与えられています。
// この配列を基に、各都市ごとに年齢の合計を計算する関数 sumAgeByCity(users) を実装してください。

const users = [
    { name: "Alice", city: "Tokyo", age: 25 },
    { name: "Bob", city: "Osaka", age: 30 },
    { name: "Charlie", city: "Tokyo", age: 35 },
    { name: "David", city: "Osaka", age: 40 }
];

function sumAgeByCity(users) {
    const AgeByCity = {}
    const output = users.reduce((acc, user) => {
        if (acc[user.city]) {
            acc[user.city] += user.age
        } else {
            acc[user.city] = user.age
        }
        return acc
    },AgeByCity)
    console.log(output)
}
sumAgeByCity(users);
// 出力例: { Tokyo: 60, Osaka: 70 }
