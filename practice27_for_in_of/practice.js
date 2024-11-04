// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 1. 基本編：オブジェクトのキーと値のループ（for...in）
// 目的: for...inを使って、オブジェクトのキーとその値をループ処理します。

// 問題
// 次のオブジェクトuserから、キーと値を取り出して「キー: 値」の形式で出力してください。
// const user = {
//     name: "Alice",
//     age: 25,
//     city: "New York"
// };

// function outputKeyAndValue(user){
//     for(let key in user){
//         console.log(`${key}:${user[key]}`)
//     }
// }
// outputKeyAndValue(user)

// output
// name: Alice
// age: 25
// city: New York
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// 問題 2：配列のループ（for...of）
// 目的: for...ofを使って、配列の各要素をループ処理し、出力する方法を学びます。

// 課題
// 次の配列colorsに含まれる色の名前を1つずつ出力してください。
// const colors = ["red", "green", "blue"];
// for (let color of colors){
//     console.log(color)
// }
// [output]
// red
// green
// blue


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 3：オブジェクトの値の合計（for...in）
// 目的: for...inを使ってオブジェクトをループし、数値のプロパティを合計する方法を学びます。

// 課題
// 次のオブジェクトproductPricesには、商品の名前とその価格が格納されています。
// for...inを使ってこのオブジェクトをループし、商品の合計価格を計算してください。
// const productPrices = {
//     apple: 120,
//     orange: 80,
//     banana: 60
// };

// function calculateSum(productPrices){
//     let sum = 0
//     for(let productName in productPrices){
//         sum += productPrices[productName]
//     }
//     return sum
// }
// console.log(calculateSum(productPrices))

const productPrices = {
    apple: 120,
    orange: 80,
    banana: 60
};
let sum = 0;
for(let key in productPrices) sum += productPrices[key];
console.log(sum)
// output
// 合計価格: 260



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー