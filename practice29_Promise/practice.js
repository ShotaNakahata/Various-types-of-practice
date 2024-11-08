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
// function fetchData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Data received")
//         }, 2000);
//     })
// }
// fetchData().then(result=>{
//     console.log(result);
//     return fetchData()
// }).then(result=>{
//     console.log(result)
// })

// fetchData を2回呼び出して、それぞれの結果を出力するPromiseチェーンを作成してください。
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 課題
// 以下に 3 つの非同期関数 fetchFirst, fetchSecond, fetchThird があります。
// それぞれが 1 秒、2 秒、3 秒の遅延の後に異なるデータを返します。これらを順番に実行し、
// 全ての結果を一つの配列にまとめて最後に console.log() で出力してください。
// function fetchFirst(){
//     return new Promise((resolve,rejecet)=>{
//         setTimeout(() => {
//             resolve("First result")
//         }, 1000);
//     })
// }
// function fetchSecond(){
//     return new Promise((resolve,rejecet)=>{
//         setTimeout(() => {
//             resolve("Second result")
//         }, 2000);
//     })
// }
// function fetchThird(){
//     return new Promise((resolve,rejecet)=>{
//         setTimeout(() => {
//             resolve("Third result")
//         }, 3000);
//     })
// }
// let output = []
// fetchFirst().then(result=>{
//     output.push(result)
//     return fetchSecond()
// }).then(result=>{
//     output.push(result)
//     return fetchThird()
// }).then(result=>{
//     output.push(result)
//     console.log(output)
// })
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 4: 複数の Promise とエラーハンドリング
// 目的: 複数の非同期処理を並列で実行し、エラーが発生した場合のハンドリングを学ぶ。

// 課題
// 以下に複数のデータをフェッチする関数 fetchData1, fetchData2, fetchData3 があります。
// それぞれの関数がランダムな遅延時間後にデータを返します。
// これらを Promise.all() を使って並列で実行し、全ての結果をまとめて console.log() で出力してください。
// ただし、いずれかの Promise でエラーが発生した場合、catch() を使ってエラーメッセージを出力してください。
function firstFetch() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data from fetchData1");
        }, Math.random() * 2000); // 修正: Math.random() を使用
    });
}

function secondFetch() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) { // 修正: Math.random() > 0.5
                reject(new Error("Error in fetchData2"));
            } else {
                resolve("Data from fetchData2");
            }
        }, Math.random() * 2000); // 修正: Math.random() を使用
    });
}

function thirdFetch() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data from fetchData3");
        }, Math.random() * 2000); // 修正: Math.random() を使用
    });
}

Promise.all([firstFetch(), secondFetch(), thirdFetch()])
    .then(result => {
        console.log("All results:", result);
    })
    .catch(error => {
        console.error("An error occurred:", error.message);
    })
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー