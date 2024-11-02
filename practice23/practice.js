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

// const products = [
//     { name: "Shampoo", price: 500, quantity: 2 },
//     { name: "Soap", price: 200, quantity: 3 },
//     { name: "Toothpaste", price: 300, quantity: 1 }
// ];
// function calculateTotalCost(products) {
//     let i = 0
//     let output = { totalCost: 0, discountedPrices: [] }
//     while (i < products.length) {
//         const product = products[i]
//         let finalprice;

//         if (product.quantity >= 3) {
//             finalprice =product.price * 0.8
//         } else {
//             finalprice = product.price
//         }

//         output.totalCost += finalprice*product.quantity;
//         output.discountedPrices.push(finalprice*product.quantity)
//         i++
//     }
//     return output
// }

// console.log(calculateTotalCost(products));
// 出力例: { totalCost: 1400, discountedPrices: [1000, 480, 300] }


// const products = [
//     { name: "Shampoo", price: 500, quantity: 2 },
//     { name: "Soap", price: 200, quantity: 3 },
//     { name: "Toothpaste", price: 300, quantity: 1 }
// ];

// function calculateTotalCost(products) {
//     const discountedPrices = products.map(product=>{
//         const pricePerUnit = (product.quantity>=3?product.price*0.8:product.price);
//         return pricePerUnit*product.quantity;
//     })

//     const totalCost = discountedPrices.reduce((sum,price)=>{
//         return sum+=price
//     },0);

//     return{totalCost,discountedPrices}
// }

// console.log(calculateTotalCost(products));
// 出力例: { totalCost: 1400, discountedPrices: [1000, 480, 300] }


// 問題 10: カートの数量・合計金額と在庫確認
// 以下のcart配列には、各商品のname、price、quantity、そしてinStockという在庫情報が格納されています。
// 条件に従ってカートの合計金額と在庫状態をチェックする関数calculateCartSummary(cart)を作成してください。

// 条件
// カートの合計金額を計算し、カートに追加されているすべての商品を含む合計金額を出力します。
// 在庫切れの商品がある場合、その商品名をまとめて配列として返します。
// 合計金額と在庫切れの商品名の配列を含むオブジェクトを返してください。

// const cart = [
//     { name: "Shampoo", price: 500, quantity: 2, inStock: true },
//     { name: "Soap", price: 200, quantity: 3, inStock: false },
//     { name: "Toothpaste", price: 300, quantity: 1, inStock: true },
//     { name: "Lotion", price: 1000, quantity: 1, inStock: false }
// ];
// function calculateCartSummary(cart) {
//     const totalCost = cart.reduce((acc,product)=>acc += (product.price * product.quantity),0)

//     const outOfStock= cart
//     .filter(product=>!product.inStock)
//     .map(product=>product.name)

//     return {totalCost,outOfStock}
// }

// console.log(calculateCartSummary(cart));
// 出力例: { totalCost: 2200, outOfStock: ["Soap", "Lotion"] }


// cart.map(product => {
//     totalCost += (product.proce * product.quantity)
//     return totalCost
// }


// 問題 11: 生徒の成績集計
// 以下のstudents配列には、生徒の名前と各教科の点数が格納されています。
// 各生徒の合計点、平均点、そして「合格」または「不合格」を判定し、結果をまとめて返す関数calculateResults(students)を作成してください。

// 条件
// 合計点と平均点の計算
// 各生徒のtotal（合計点）とaverage（平均点）を計算し、それぞれのオブジェクトに追加してください。
// 合格/不合格の判定

// 平均点が60点以上であれば「合格」、それ未満なら「不合格」として、statusプロパティに「Pass」または「Fail」を追加してください。
// 結果をオブジェクトの配列として返す
// 各生徒の名前、合計点、平均点、合否を含むオブジェクトの配列を返してください。


const students = [
    { name: "Alice", scores: { math: 80, english: 75, science: 60 } },
    { name: "Bob", scores: { math: 50, english: 55, science: 70 } },
    { name: "Charlie", scores: { math: 90, english: 95, science: 85 } }
];

function calculateResults(students) {
    return students.map(student=>{
        const scores = Object.values(student.scores)
        const total = scores.reduce((acc,score)=>acc+score,0);
        const average = (total/scores.length).toFixed();
        return {name:student.name,total,average}
    });
}

console.log(calculateResults(students));
// 出力例: [
//   { name: "Alice", total: 215, average: 71.67, status: "Pass" },
//   { name: "Bob", total: 175, average: 58.33, status: "Fail" },
//   { name: "Charlie", total: 270, average: 90, status: "Pass" }
// ]
