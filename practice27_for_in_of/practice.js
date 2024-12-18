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

// const productPrices = {
//     apple: 120,
//     orange: 80,
//     banana: 60
// };
// let sum = 0;
// for(let key in productPrices) sum += productPrices[key];
// console.log(sum)
// output
// 合計価格: 260



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 4：ネストされた配列のループ（for...of）
// 目的: for...ofを使って、配列の中にさらに配列がある場合に、内側の要素にアクセスする方法を学びます。

// 課題
// 次の配列numberGroupsには、複数の配列がネストされています。for...ofを使って、すべての数値を1つずつ出力してください。
// const numberGroups = [
//     [1, 2, 3],
//     [4, 5],
//     [6, 7, 8, 9]
// ];

// for(let number of numberGroups.flat()){
//     console.log(number)
// }

// output
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 5：オブジェクトの配列をループ（for...of + for...in）
// 目的: for...ofとfor...inを組み合わせて、配列内のオブジェクトを処理する方法を学びます。

// 課題
// 次の配列usersには、複数のユーザー情報が格納されています。for...ofとfor...inを使って、
// 各ユーザーの情報（キーと値）を「キー: 値」の形式で出力してください。
// const users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 }
// ];
// // for(let user of users){
// //     for(let key in user){
// //         console.log(`${key}:${user[key]}`)
// //     }
// // }
// for (let user of users) {
//     for (let [key, value] of Object.entries(user)) {
//         console.log(`${key}:${value}`)
//     }
// }

// output
// name: Alice
// age: 25
// name: Bob
// age: 30
// name: Charlie
// age: 35

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 6：条件付きでオブジェクトを処理（for...in + for...of）
// 目的: for...ofとfor...inを組み合わせ、条件に合致するオブジェクトのデータのみを抽出・出力する方法を学びます。

// 課題
// 次の配列itemsには、複数のアイテム情報が格納されています。for...ofとfor...inを使って、
// priceが100以上のアイテムのみを出力してください。
// const items = [
//     { name: "apple", price: 120 },
//     { name: "orange", price: 80 },
//     { name: "banana", price: 60 },
//     { name: "grape", price: 150 }
// ];
// for(let item of items){
//     if(item.price>=100){
//         for(let key in item){
//             console.log(`${key}:${item[key]}`)
//         }
//     }
// }

// const items = [
//     { name: "apple", price: 120 },
//     { name: "orange", price: 80 },
//     { name: "banana", price: 60 },
//     { name: "grape", price: 150 }
// ];

// items.forEach(item=>{
//     (item.price>=100
//         ?console.log(item)
//         :""
//     )
// })
// output
// name: apple
// price: 120
// name: grape
// price: 150

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 7：オブジェクトの配列からデータを集計
// 目的: for...ofやforEachを使い、特定の条件に基づいたデータの集計方法を学びます。

// 課題
// 次の配列salesには、複数の売上データが格納されています。各データには、店舗名（store）、
// 売上金額（amount）、およびカテゴリ（category）が含まれています。

// この配列から、"electronics"カテゴリの売上合計を計算し、出力してください。

// const sales = [
//     { store: "Store A", amount: 300, category: "clothing" },
//     { store: "Store B", amount: 800, category: "electronics" },
//     { store: "Store A", amount: 1200, category: "electronics" },
//     { store: "Store C", amount: 400, category: "clothing" },
//     { store: "Store B", amount: 700, category: "electronics" }
// ];
// const output= sales.reduce((acc,sale)=>{
//     if(sale.category==="electronics"){
//         acc += sale.amount
//     }
//     return acc
// },0)

// console.log(output)

// const sales = [
//     { store: "Store A", amount: 300, category: "clothing" },
//     { store: "Store B", amount: 800, category: "electronics" },
//     { store: "Store A", amount: 1200, category: "electronics" },
//     { store: "Store C", amount: 400, category: "clothing" },
//     { store: "Store B", amount: 700, category: "electronics" }
// ];
// let sum = 0

// for(let sale of sales){
//     if(sale.category==="electronics"){
//         sum += sale.amount
//     } 
// }
// console.log(sum)
// output
// electronicsカテゴリの売上合計: 2700

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 8：店舗ごとの売上データを集計
// 目的: for...ofやforEachを使い、条件に基づいてデータを集計し、特定の条件に合致するデータのみを出力する方法を学びます。

// 課題
// 以下のような形式の売上データsalesDataが与えられています。各データには、店舗名（store）、
// 売上金額（amount）、およびカテゴリ（category）が含まれています。

// この配列から以下の情報を取得し、出力してください。

// 店舗ごとの売上合計を計算し、オブジェクト形式で出力する。
// さらに、各店舗ごとに"electronics"カテゴリの売上合計を求め、出力する。
// const salesData = [
//     { store: "Store A", amount: 300, category: "clothing" },
//     { store: "Store B", amount: 800, category: "electronics" },
//     { store: "Store A", amount: 1200, category: "electronics" },
//     { store: "Store C", amount: 400, category: "clothing" },
//     { store: "Store B", amount: 700, category: "electronics" },
//     { store: "Store A", amount: 500, category: "clothing" }
// ];
// function calculateSalesData(salesData) {
//     // {"store A":2000}
//     const StoreSalesData= salesData.reduce((acc, data) => {
//         if(acc[data.store]){
//             acc[data.store] += data.amount
//             // console.log("acc[data.store.amount] :",acc[data.store.amount])
//         }else{
//             acc[data.store] = data.amount;
//         }
//         return acc
//     }, {})

//     const electronicsSalesData = salesData.reduce((acc,data)=>{
//         if(data.category==="electronics"){
//             if(acc[data.store]){
//                 acc[data.store] += data.amount
//                 // console.log("acc[data.store.amount] :",acc[data.store.amount])
//             }else{
//                 acc[data.store] = data.amount;
//             }
//         }else{
//             acc[data.store] = 0;
//         }
//         return acc
//     },{})
//     return {StoreSalesData,electronicsSalesData}
// }
// console.log(calculateSalesData(salesData))
// output
// // 店舗ごとの売上合計
// {
//     "Store A": 2000,
//         "Store B": 1500,
//             "Store C": 400
// }

// // 各店舗のelectronicsカテゴリの売上合計
// {
//     "Store A": 1200,
//         "Store B": 1500,
//             "Store C": 0
// }
const salesData = [
    { store: "Store A", amount: 300, category: "clothing" },
    { store: "Store B", amount: 800, category: "electronics" },
    { store: "Store A", amount: 1200, category: "electronics" },
    { store: "Store C", amount: 400, category: "clothing" },
    { store: "Store B", amount: 700, category: "electronics" },
    { store: "Store A", amount: 500, category: "clothing" }
];

function calculateSalesData(salesData) {
    return salesData.reduce((acc, data) => {
        acc.StoreSalesData[data.store] = (acc.StoreSalesData[data.store] || 0) + data.amount;
        if (data.category === "electronics") {
            acc.electronicsSalesData[data.store] = (acc.electronicsSalesData[data.store] || 0) + data.amount;
        } else if (!acc.electronicsSalesData[data.store]){
            acc.electronicsSalesData[data.store] = 0
        }
        return acc
    }, { StoreSalesData: {}, electronicsSalesData: {} })
}

console.log(calculateSalesData(salesData))
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー