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

// 問題2: 配列内の文字列の出現回数カウント
// 目的: reduce()を用いて、各要素の出現回数をオブジェクトに集計する方法を学びます。

// 課題内容
// 果物の名前が入った配列 fruits が与えられています。
// 各果物が何回出現しているかをカウントし、オブジェクトで返す関数
// countFruits(fruits) を実装してください。

const fruits = ["apple", "banana", "orange", "apple", "banana", "apple"];

function countFruits(fruits) {
    const countFruits = {}
    const output =fruits.reduce((acc,frut)=>{
        if(acc[frut]){
            acc[frut]+=1
        }else{
            acc[frut] = 1
        }
        return acc
    },countFruits)
    console.log(output);
}
countFruits(fruits); // 出力例: { apple: 3, banana: 2, orange: 1 }
