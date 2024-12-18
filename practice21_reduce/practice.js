// 問題1: 配列内の数値の合計
// 目的: reduce()の基本的な使い方を学びます。

// 課題内容
// 次のような配列 numbers が与えられています。この配列のすべての数値の合計を計算する関数 sumArray(numbers) を実装してください。
const numbers = [10, 20, 30, 40];

function sumArray(numbers) {
    const sum = numbers.reduce((acc, number) => {
        acc += number
        return acc
    }, 0)
    console.log(sum)
}

// sumArray(numbers); // 100

// 問題2: 配列内の文字列の出現回数カウント
// 目的: reduce()を用いて、各要素の出現回数をオブジェクトに集計する方法を学びます。

// 課題内容
// 果物の名前が入った配列 fruits が与えられています。
// 各果物が何回出現しているかをカウントし、オブジェクトで返す関数
// countFruits(fruits) を実装してください。

const fruits = ["apple", "banana", "orange", "apple", "banana", "apple"];

function countFruits(fruits) {
    const countFruits = {}
    const output = fruits.reduce((acc, frut) => {
        if (acc[frut]) {
            acc[frut] += 1
        } else {
            acc[frut] = 1
        }
        return acc
    }, countFruits)
    console.log(output);
}
// countFruits(fruits); // 出力例: { apple: 3, banana: 2, orange: 1 }

// 問題3: 配列内のオブジェクトの特定プロパティを集計
// 目的: 配列内のオブジェクトのデータを集計し、特定のプロパティの合計を取得する方法を学びます。

// 課題内容
// ショッピングカートに入っている商品リストが配列cartとして与えられています。
// 各商品オブジェクトには、商品名 name と price プロパティが含まれています。
// カート内の商品の合計価格を計算する関数 calculateTotal(cart) を実装してください

const cart = [
    { name: "Apple", price: 120 },
    { name: "Banana", price: 80 },
    { name: "Orange", price: 100 }
];

function calculateTotal(cart) {
    const output = cart.reduce((acc, product) => {
        acc += product.price
        return acc
    }, 0)
    console.log(output)
}
// calculateTotal(cart); // 300

// 問題4: 複雑なオブジェクトのネストを持つ配列のデータ変換
// 目的: ネストされたデータを扱い、reduce()でキーごとに集計する方法を学びます。

// 課題内容
// 次のようなユーザー情報の配列 users が与えられています。
// この配列を基に、各都市ごとに年齢の合計を計算する関数 sumAgeByCity(users) を実装してください。

const users = [
    { name: "Alice", city: "Tokyo", age: 25 },
    { name: "Bob", city: "Osaka", age: 30 },
    { name: "Charlie", city: "Tokyo", age: 35 },
    { name: "David", city: "Osaka", age: 40 }
];

function sumAgeByCity(users) {
    const AgeByCity = {}
    const output = users.reduce((acc, user) => {
        if (acc[user.city]) {
            acc[user.city] += user.age
        } else {
            acc[user.city] = user.age
        }
        return acc
    }, AgeByCity)
    console.log(output)
}
// sumAgeByCity(users);

// 出力例: { Tokyo: 60, Osaka: 70 }


// 問題5: 複数の配列から重複を除きつつ、特定のプロパティで集計
// 目的: 複数のデータを1つにまとめ、重複するキーを持つオブジェクトをまとめて集計する練習です。

// 課題内容
// 異なる日の売上データが、それぞれの配列に分かれているとします。これらを1つにまとめ、
// 重複するidを持つ商品の totalSales を合計して返す関数 mergeSalesData(salesData) を作成してください。
const salesData = [
    [
        { id: 1, product: "Apple", totalSales: 100 },
        { id: 2, product: "Banana", totalSales: 150 }
    ],
    [
        { id: 1, product: "Apple", totalSales: 200 },
        { id: 3, product: "Orange", totalSales: 300 }
    ]
];
// flattenedData[
//     { id: 1, product: 'Apple', totalSales: 100 },
//     { id: 2, product: 'Banana', totalSales: 150 },
//     { id: 1, product: 'Apple', totalSales: 200 },
//     { id: 3, product: 'Orange', totalSales: 300 }
// ]

function mergeSalesData(salesData) {
    const flattenedData = salesData.flat();
    const output = flattenedData.reduce((acc, Data) => {
        if (acc[Data.id]) {
            acc[Data.id].totalSales += Data.totalSales
        } else {
            acc[Data.id] = { ...Data };
        } return acc
    }, {})
    console.log(output);
}

// mergeSalesData(salesData);

// 出力例: [
//   { id: 1, product: "Apple", totalSales: 300 },
//   { id: 2, product: "Banana", totalSales: 150 },
//   { id: 3, product: "Orange", totalSales: 300 }
// ]


// 問題6: 商品リストから特定条件の統計情報を抽出
// 目的: reduce() を使ってデータのフィルタリングと集計を同時に行い、条件付きで集計する方法を学びます。

// 課題内容
// 次のような商品データの配列 products が与えられています。
// この配列を基に、在庫がある商品の価格の合計と平均価格を計算する関数 
// calculateInStockStats(products) を作成してください。

const products = [
    { name: "Laptop", price: 1200, inStock: true },
    { name: "Phone", price: 800, inStock: false },
    { name: "Tablet", price: 600, inStock: true },
    { name: "Monitor", price: 300, inStock: true },
    { name: "Keyboard", price: 100, inStock: false }
];
function calculateInStockStats(products) {
    const inital = {totalInStockPrice:0,averageInStockPrice:0,count:0}
    const isStockTrue = products.filter(product => product.inStock);
    const output =isStockTrue.reduce((acc,product)=>{
        acc.count += 1;
        acc.totalInStockPrice += product.price;
        acc.averageInStockPrice = parseFloat((acc.totalInStockPrice/acc.count).toFixed(1))
        return acc
    },inital)
    delete output.count
    console.log(output)
}
calculateInStockStats(products);
// 出力例: { totalInStockPrice: 2100, averageInStockPrice: 700 }


