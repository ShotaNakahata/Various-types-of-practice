// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 1. 基本編：オブジェクトのキーと値のループ（for...in）
// 目的: for...inを使って、オブジェクトのキーとその値をループ処理します。

// 問題
// 次のオブジェクトuserから、キーと値を取り出して「キー: 値」の形式で出力してください。
const user = {
    name: "Alice",
    age: 25,
    city: "New York"
};

function outputKeyAndValue(user){
    for(let key in user){
        console.log(`${key}:${user[key]}`)
    }
}
outputKeyAndValue(user)

// output
// name: Alice
// age: 25
// city: New York
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー