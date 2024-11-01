// 演習問題
// 次の配列の要素を順にwhileループで出力する関数printElements(arr)を作成してみてください。

// const items = ["apple", "banana", "cherry", "date"];

// function printElements(arr) {
//     let i = 0;
//     while (i < arr.length) {
//         console.log(arr[i]);
//         i++;
//     }
// }

// // printElements(items);
// 出力:
// apple
// banana
// cherry
// date


// 偶数と奇数の分類
// 以下の定数 numbers には数値が格納されています。この配列を使い、以下の処理を行う関数 classifyNumbers(arr) を作成してください。

// whileループを使って、配列の各要素を順に処理します。
// 偶数を見つけた場合は、その数をevens配列に追加します。
// 奇数を見つけた場合は、その数をodds配列に追加します。
// ループが終わった後、evensとoddsの2つの配列を含むオブジェクトを返します。

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function classifyNumbers(arr) {
    let i = 0;
    let output = { evens: [], odd: [] }
    while (i < arr.length) {
        (arr[i] % 2 === 0 ? output.evens.push(arr[i]) : output.odd.push(arr[i]))
        i++;
    }
    return output
}

console.log(classifyNumbers(numbers));
// 出力例: { evens: [2, 4, 6, 8, 10], odds: [1, 3, 5, 7, 9] }
