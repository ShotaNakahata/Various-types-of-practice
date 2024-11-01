// 演習問題
// 次の配列の要素を順にwhileループで出力する関数printElements(arr)を作成してみてください。

const items = ["apple", "banana", "cherry", "date"];

function printElements(arr) {
    let i = 0;
    while (i < arr.length) {
        console.log(arr[i]);
        i++;
    }
}

printElements(items);
// 出力:
// apple
// banana
// cherry
// date
