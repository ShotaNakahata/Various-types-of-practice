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
const baseInfo = {
    name: "Alice",
    age: 28
};
const additionalInfo = {
    city: "Paris",
    occupation: "Engineer"
};

console.log(Object.assign({},baseInfo,additionalInfo))

// output
// {
//     name: "Alice",
//         age: 28,
//             city: "Paris",
//                 occupation: "Engineer"
// }

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー