// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 基礎問題 1: Object.keysとObject.values
// 目的: オブジェクトのキーと値にアクセスするための基本操作を学びます。

// 問題
// 次のオブジェクトproductからキーと値をそれぞれ取得し、次のような形式で出力してください。
// const product = {
//     name: "Laptop",
//     price: 1200,
//     brand: "Dell"
// };
// console.log("keys: ",Object.keys(product),"value: ",Object.values(product));
// out
// Keys: ["name", "price", "brand"]
// Values: ["Laptop", 1200, "Dell"]
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 基礎問題 2: Object.entriesの利用
// 目的: オブジェクトのキーと値のペアを配列として取得し、操作する方法を学びます。
// 問題
// 次のオブジェクトemployeeから、Object.entriesを使って各キーと値のペアを取得し、次のような形式で出力してください。
// const employee = {
//     name: "John",
//     age: 30,
//     department: "Sales"
// };
// for(let [key,value] of Object.entries(employee)){
//     console.log(key,":",value)
// }

// output
// name: John
// age: 30
// department: Sales

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 応用問題 3: Object.fromEntriesの利用
// 目的: 二次元配列をオブジェクトに変換する方法を学びます。

// 問題
// 次の二次元配列entriesから、Object.fromEntriesを使ってオブジェクトを作成し、変数productに格納してください。
// const entries = [
//     ["name", "Smartphone"],
//     ["price", 700],
//     ["brand", "Samsung"]
// ];
// console.log(Object.fromEntries(entries))
// output
// {
//     name: "Smartphone",
//         price: 700,
//             brand: "Samsung"
// }

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 応用問題 4: Object.assignでオブジェクトを結合
// 目的: Object.assignを使って、複数のオブジェクトを1つにまとめる方法を学びます。

// 問題
// 次のオブジェクトbaseInfoとadditionalInfoをObject.assignで結合し、新しいオブジェクトfullInfoを作成してください。
// const baseInfo = {
//     name: "Alice",
//     age: 28
// };
// const additionalInfo = {
//     city: "Paris",
//     occupation: "Engineer"
// };

// console.log(Object.assign({},baseInfo,additionalInfo))

// output
// {
//     name: "Alice",
//         age: 28,
//             city: "Paris",
//                 occupation: "Engineer"
// }

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 応用問題 5: Object.keysとObject.valuesで特定のデータを抽出
// 目的: オブジェクトのキーと値を操作し、条件に合うデータを抽出する方法を学びます。

// 問題
// 次のオブジェクトgradesから、値が70以上の科目（キー）だけを抽出し、新しいオブジェクトとして返してください。
// const grades = {
//     math: 85,
//     english: 62,
//     science: 90,
//     history: 70,
//     art: 55
// };
// function CheckPoint(grades) {
//     return Object.entries(grades)
//     .filter(([key,value])=>value>=70)
//     .reduce((acc,subj)=>{
//         const [key,value] = subj;
//         acc[key]=value
//         return acc
//     },{})
// }

// console.log(CheckPoint(grades))
// output
// {
//     math: 85,
//         science: 90,
//             history: 70
// }


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 応用問題 6: 条件に応じてプロパティの値を変換する
// 目的: オブジェクトのプロパティの値を操作し、条件に基づいて新しいデータを作成する方法を学びます。

// 問題
// 以下のinventoryオブジェクトには、各商品の在庫数が格納されています。
// 在庫が10未満のものは "Low"、10以上50未満のものは "Medium"、50以上のものは "High" として、
// 在庫レベルに基づいた新しいオブジェクトを返してください。
// const inventory = {
//     apples: 5,
//     bananas: 15,
//     oranges: 50,
//     grapes: 45,
//     strawberries: 3
// };
// const output = Object.entries(inventory).reduce((acc, product) => {
//     let [key, value] = product;
//     (value < 10
//         ? value = "Low"
//         : value >= 10 && value < 50
//             ? value = "Medium"
//             : value = "High")
//     acc[key] = value
//     return acc
// }, {})

// console.log(output)

// const inventory = {
//     apples: 5,
//     bananas: 15,
//     oranges: 50,
//     grapes: 45,
//     strawberries: 3
// };
// const output = Object.entries(inventory).reduce((acc, [key,value]) => {
//     (value < 10
//         ? value = "Low"
//         : value >= 10 && value < 50
//             ? value = "Medium"
//             : value = "High")
//     acc[key] = value
//     return acc
// }, {})

// console.log(output)

// output
// {
//     apples: "Low",
//         bananas: "Medium",
//             oranges: "High",
//                 grapes: "Medium",
//                     strawberries: "Low"
// }

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 応用問題 7: カテゴリごとの在庫合計を計算
// 目的: オブジェクトのプロパティを操作し、条件に基づいて集計する方法を学びます。

// 問題
// 次のproductsオブジェクトには、各商品ごとにカテゴリと在庫数が格納されています。
// カテゴリごとの在庫数の合計を計算し、各カテゴリの合計を持つオブジェクトを返してください。
// const products = {
//     apple: { category: "fruit", stock: 30 },
//     banana: { category: "fruit", stock: 20 },
//     carrot: { category: "vegetable", stock: 50 },
//     spinach: { category: "vegetable", stock: 15 },
//     chicken: { category: "meat", stock: 25 },
//     beef: { category: "meat", stock: 35 }
// };
// console.log(Object.entries(products).reduce((acc, [key, info]) => {
//     if (acc[info.category]) {
//         acc[info.category] += info.stock;
//     } else {
//         acc[info.category] = info.stock;
//     }
//     return acc
// }, {}))
// output
// {
//     fruit: 50,
//         vegetable: 65,
//             meat: 60
// }
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 応用問題 8: 商品ごとの在庫価値を計算する
// 目的: 各商品の在庫の合計価値を計算し、在庫価値の高い順に並べる練習です。

// 問題
// 次のstoreInventoryオブジェクトには、各商品の在庫数と1個あたりの価格が格納されています。
// 各商品の在庫価値を計算し、在庫価値が高い順に並べた新しい配列として返してください。
// const storeInventory = {
//     apple: { price: 2, stock: 30 },
//     banana: { price: 1, stock: 50 },
//     carrot: { price: 3, stock: 25 },
//     spinach: { price: 1, stock: 10 },
//     chicken: { price: 5, stock: 15 },
//     beef: { price: 10, stock: 5 }
// };
// const output = Object.entries(storeInventory).reduce((acc, [name, value]) => {
//     // console.log(value)
//     const finalPrice = value.price * value.stock
//     // console.log(finalPrice)
//     acc.push([name,finalPrice])
//     // const finalprice = price * stock
//     // console.log(price, stock)
//     // acc[1,2] = [key,finalprice]
//     return acc
// }, []).sort((a,b)=>b[1]-a[1])
// console.log(output)
// output
// [
//     ["apple", 60],
//     ["carrot", 75],
//     ["banana", 50],
//     ["chicken", 75],
//     ["spinach", 10],
//     ["beef", 50]
// ]

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 応用問題 9: 商品のカテゴリごとの合計在庫価値を計算する
// 目的: 各カテゴリ内の商品の在庫価値を合計し、カテゴリごとに集計する方法を学びます。

// 問題
// 以下のstoreInventoryオブジェクトには、各商品のカテゴリ、在庫数、価格が含まれています。
// それぞれのカテゴリごとの合計在庫価値を計算し、カテゴリ名をキー、合計在庫価値を値とする新しいオブジェクトを返してください。

// const storeInventory = {
//     apple: { category: "fruit", price: 2, stock: 30 },
//     banana: { category: "fruit", price: 1, stock: 50 },
//     carrot: { category: "vegetable", price: 3, stock: 25 },
//     spinach: { category: "vegetable", price: 1, stock: 10 },
//     chicken: { category: "meat", price: 5, stock: 15 },
//     beef: { category: "meat", price: 10, stock: 5 }
// };
// console.log(Object.entries(storeInventory).reduce((acc, [name, info]) => {
//     const finalPrice = info.price * info.stock
//     if (acc[info.category]) {
//         acc[info.category] += finalPrice
//     }else{
//         acc[info.category] = finalPrice
//     }
//     return acc
// }, {}))
// output
// {
//     fruit: 110,      // 2*30 + 1*50 = 110
//         vegetable: 85,   // 3*25 + 1*10 = 85
//             meat: 100        // 5*15 + 10*5 = 100
// }

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 応用問題 10: 利用可能な商品の合計在庫価値を計算する
// 目的: 在庫が一定数以上の商品のみを集計する方法を学びます。

// 問題
// 以下のstoreInventoryオブジェクトには、各商品のカテゴリ、在庫数、価格が含まれています。
// 在庫数が10以上の商品のみを集計し、カテゴリごとの合計在庫価値を計算してください。結果はカテゴリ名をキー、
// 合計在庫価値を値とする新しいオブジェクトで返してください。
const storeInventory = {
    apple: { category: "fruit", price: 2, stock: 30 },
    banana: { category: "fruit", price: 1, stock: 5 },
    carrot: { category: "vegetable", price: 3, stock: 25 },
    spinach: { category: "vegetable", price: 1, stock: 10 },
    chicken: { category: "meat", price: 5, stock: 15 },
    beef: { category: "meat", price: 10, stock: 5 }
};
const output = Object.entries(storeInventory).reduce((acc, [name, info]) => {
    if (info.stock >= 10) {
        const finalPrice = info.price * info.stock
        if (acc[info.category]) {
            acc[info.category] += finalPrice;
        } else {
            acc[info.category] = finalPrice;
        }
    }
    return acc
}, {})

console.log(output)
// output
// {
//     fruit: 60,        // 2*30 = 60
//         vegetable: 85,    // 3*25 + 1*10 = 85
//             meat: 75          // 5*15 = 75
// }

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー