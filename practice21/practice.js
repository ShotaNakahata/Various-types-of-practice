// 問題1: 配列内の数値の合計
// 目的: reduce()の基本的な使い方を学びます。

// 課題内容
// 次のような配列 numbers が与えられています。この配列のすべての数値の合計を計算する関数 sumArray(numbers) を実装してください。
const numbers = [10, 20, 30, 40];

function sumArray(numbers){
    const sum =numbers.reduce((acc,number)=>{
        acc +=number
        return acc
    },0)
    console.log(sum)
}

sumArray(numbers); // 100
