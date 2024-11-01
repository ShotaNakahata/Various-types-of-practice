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

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function classifyNumbers(arr) {
//     let i = 0;
//     let output = { evens: [], odd: [] }
//     while (i < arr.length) {
//         (arr[i] % 2 === 0 ? output.evens.push(arr[i]) : output.odd.push(arr[i]))
//         i++;
//     }
//     return output
// }

// console.log(classifyNumbers(numbers));
// 出力例: { evens: [2, 4, 6, 8, 10], odds: [1, 3, 5, 7, 9] }


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function classifyNumbers(arr) {
//     let output = { evens: [], odd: [] }
//     arr.forEach(number=>{
//         (number%2===0?output.evens.push(number):output.odd.push(number))
//     })
//     return output
// }

// console.log(classifyNumbers(numbers));

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function classifyNumbers(arr) {
//     return {
//         evens: arr.filter(number=>number%2===0),
//         odd: arr.filter(number=>number%2!==0)
//     }
// }

// console.log(classifyNumbers(numbers));


// 要件
// 各要素が3の倍数の場合は、threes配列に追加する。
// 各要素が5の倍数の場合は、fives配列に追加する。
// 各要素が**3と5の公倍数（15の倍数）**の場合は、両方に追加せず、別のfifteenMultiples配列に追加する。
// 集計

// threes、fives、fifteenMultiples配列のそれぞれの合計を計算し、結果オブジェクトとして返す。

// const numbers = [1, 3, 5, 9, 10, 12, 15, 18, 20, 30, 33];

// function classifyAndSummarize(arr) {
//     let i = 0
//     let output = { threes: [], fives: [], fifteenMultiples: [] }
//     while (i < arr.length) {
//         arr[i] % 15 === 0 ? output.fifteenMultiples.push(arr[i]):
//         arr[i] % 3 === 0 ? output.threes.push(arr[i]):
//         arr[i] % 5 === 0 ? output.fives.push(arr[i]):null;

//         i++;
//     }
//     return output;
// }


// console.log(classifyAndSummarize(numbers));

// const numbers = [1, 3, 5, 9, 10, 12, 15, 18, 20, 30, 33];

// function classifyAndSummarize(arr) {
//         const fifteenMultiples = arr.filter(number => number % 15 === 0);
//         const threes= arr.filter(number => number % 3 === 0 && !fifteenMultiples.includes(number));
//         const fives= arr.filter(number => number % 5 === 0&& !fifteenMultiples.includes(number));

//         return{
//             fifteenMultiples,threes,fives
//         }
// }


// console.log(classifyAndSummarize(numbers));




// 問題 9: 商品価格の割引適用と合計金額の計算
// 以下の配列 products には商品情報が格納されています。この情報を使い
// 、割引条件に基づいて合計金額を計算する関数 calculateTotalCost(products) を作成してください。

// 条件

// 各商品の割引適用後の価格を計算し、配列に保存します。
// 数量が3個以上のものは20%割引を適用します。それ以外は割引が適用されません。
// 割引が適用された価格を使用して、合計金額を計算します。
// 合計金額をオブジェクト { totalCost, discountedPrices } として返します。

const products = [
    { name: "Shampoo", price: 500, quantity: 2 },
    { name: "Soap", price: 200, quantity: 3 },
    { name: "Toothpaste", price: 300, quantity: 1 }
];
function calculateTotalCost(products) {
    let i = 0
    let output = { totalCost: 0, discountedPrices: [] }
    while (i < products.length) {
        const product = products[i]
        let finalprice;

        if (product.quantity >= 3) {
            finalprice =product.price * 0.8
        } else {
            finalprice = product.price
        }

        output.totalCost += finalprice*product.quantity;
        output.discountedPrices.push(finalprice*product.quantity)
        i++
    }
    return output
}

console.log(calculateTotalCost(products));
// 出力例: { totalCost: 1400, discountedPrices: [1000, 480, 300] }
