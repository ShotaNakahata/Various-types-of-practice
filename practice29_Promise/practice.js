// 問題 1: 基本的な Promise の使い方
// 目的: Promise の基本的な構造を理解し、非同期処理を扱うための基礎を学ぶ。

// 課題
// 以下のコードを完成させてください。delayedHello 関数は、2 秒後に "Hello, World!" 
// というメッセージを console.log に出力します。Promise を使用して非同期処理を実装してください。
// function delayedHello() {
//     // Promise を作成し、2 秒後に "Hello, World!" を出力するように実装してください。
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Hello, World!")
//         }, 2000);
//     })
// }

// delayedHello().then(message=>{
//     console.log(message)
// });
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 2: Promise チェーン
// 目的: Promise チェーンの基本的な使い方を学び、非同期処理の順序を理解する。

// 課題
// 以下の関数 fetchData は、2 秒後にデータを返す Promise を返します。
// Promise チェーンを使用して、この関数を呼び出し、2 回連続でデータを取得し、その結果を出力してください。
function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Data received")
        }, 2000);
    })
}
fetchData().then(result=>{
    console.log(result);
    return fetchData()
}).then(result=>{
    console.log(result)
})

// fetchData を2回呼び出して、それぞれの結果を出力するPromiseチェーンを作成してください。

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー