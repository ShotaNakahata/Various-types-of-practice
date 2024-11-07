// 問題 1: 基本的な Promise の使い方
// 目的: Promise の基本的な構造を理解し、非同期処理を扱うための基礎を学ぶ。

// 課題
// 以下のコードを完成させてください。delayedHello 関数は、2 秒後に "Hello, World!" 
// というメッセージを console.log に出力します。Promise を使用して非同期処理を実装してください。
function delayedHello() {
    // Promise を作成し、2 秒後に "Hello, World!" を出力するように実装してください。
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Hello, World!")
        }, 2000);
    })
}

delayedHello().then(message=>{
    console.log(message)
});

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー