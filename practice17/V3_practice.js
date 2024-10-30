// 説明
// 前回のFizzBuzzプログラムを、設定に応じて異なるルールで出力できるように改良してください。以下の要件を満たす関数flexibleFizzBuzzを作成します。

// 要件
// 任意の範囲（startからendまで）を指定できるようにする。
// 任意の倍数ルールで文字列を出力できるようにする。
// 例えば、3の倍数で"Fizz", 5の倍数で"Buzz"の他、7の倍数で"Bazz"のようなルールも指定できるようにする。
// 設定オブジェクトを引数で受け取り、柔軟にルールを設定できるようにする。
// 出力結果は、指定した範囲の各数について、対応する文字列または数字を出力する。

function forLoop({start,end,fizz,Buzz}){
    for(let i = start; i<=end; i++){
        let output = (i%fizz===0?"Fizz":"")+(i%Buzz===0?"Buzz":"");
        console.log(output||i);
    }
}

forLoop({
    start:1,
    end:100,
    fizz:3,
    Buzz:5
})

