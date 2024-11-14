// 出力：
// 合計値
// 平均値
// 最小値
// 最大値
// 標準偏差
// const numbers = [10, 20, 30, 40, 51];
// function Calculate(numbers) {
//     const length = numbers.length;
//     const minNuber = Math.min(...numbers)
//     const maxNumber = Math.max(...numbers)
//     const sum = numbers.reduce((acc, number) => {
//         acc += number;
//         return acc
//     }, 0)
//     const average = (sum / length).toFixed()
//     // console.log(average)
//     // console.log(sum)
//     const variance = numbers.reduce((acc, number) => {
//         return acc + Math.pow(number - average, 2);
//     },0)/length

//     const standardDeviation = Math.sqrt(variance).toFixed(2)

//     return { sum, average, minNuber, maxNumber ,standardDeviation}
// }

// console.log(Calculate(numbers))
// --------------------------------------------------------------------------
// ユニークな値の配列（重複を除いた新しい配列）
// 合計（新しい配列の合計）
// 平均値（新しい配列の平均値）
// 最小値（新しい配列の最小値）
// 最大値（新しい配列の最大値）
// 標準偏差（新しい配列の標準偏差）
// const numbers = [10, 20, 30, 40, 30, 20, 10, 40, 51];

// function calculate(numbers) {
//     const newNumbers = numbers.reduce((acc, number) => {
//         if (acc.includes(number)) {
//             return acc
//         }
//         acc.push(number)
//         return acc
//     }, [])
//     const length = newNumbers.length
//     const sum = newNumbers.reduce((acc, number) => {
//         acc += number
//         return acc
//     }, 0)
//     const average = sum / length
//     const minNumber = Math.min(...newNumbers)
//     const maxNumber = Math.max(...newNumbers)
//     const variance = newNumbers.reduce((acc,number)=>{
//         return acc + Math.pow(number-average,2);
//     },0)/length
//     const standardDeviation = Math.sqrt(variance).toFixed(2);
//     return {newNumbers,sum,average,minNumber,maxNumber,standardDeviation}

// }
// // console.log(numbers)
// console.log(calculate(numbers));
// output
// {
//     uniqueNumbers: [10, 20, 30, 40, 51],
//         sum: 151,
//             average: 30.2,
//                 minNumber: 10,
//                     maxNumber: 51,
//                         standardDeviation: "14.43"
// }
// --------------------------------------------------------------------------
// 問題: 配列内で最も多く出現する数を求める
// 問題文：
// 与えられた整数の配列において、最も多く出現する数（最大頻度）を求め、その数が複数あった場合は、
// 最小のその数を返す関数 findMostFrequentNumber を実装してください。

// 配列内の数値がすべて異なる場合は、最小の数を返してください。
// for と if を使用して解決してください。
// 入力
// const numbers = [10, 20, 10, 30, 20, 10, 30, 40];
// function findMostFrequentNumber(numbers) {
//     const countNumAppend = numbers.reduce((acc, number) => {
//         console.log(number)
//         if (acc[number]) {
//             acc[number] += 1
//         }else{
//             acc[number] = 1
//         }
//         return acc
//     }, {})

//     console.log(countNumAppend)

//     const mostFrequent = Object.entries(countNumAppend)
//         .reduce((mostFrequent, [number, count]) => {
//             number = Number(number);
//             if (count > mostFrequent.count || count === mostFrequent.count && number < mostFrequent.number) {
//                 mostFrequent.number = number;
//                 mostFrequent.count = count;
//             }
//             return mostFrequent
//         }, { number: null, count: 0 })

//         return mostFrequent.number
// }
// // 出力
// // 10 (10が最も多く3回出現している)
// console.log(findMostFrequentNumber(numbers));  // 10

// --------------------------------------------------------------------------
// 問題：商品カテゴリ別の統計情報を求める
// 課題内容：
// 以下のような商品データがあります。それをもとに、カテゴリごとの商品の平均価格と最も高い価格の商品名を求める関数 
// calculateCategoryStats を実装してください。

// {
//     Electronics: { 
//         averagePrice: 1500, 
//         highestPriceProduct: "Product B" 
//     },
//     Clothing: { 
//         averagePrice: 83.33, 
//         highestPriceProduct: "Product H" 
//     },
//     Furniture: { 
//         averagePrice: 275, 
//         highestPriceProduct: "Product F" 
//     }
// }

// const products = [
//     { name: "Product A", category: "Electronics", price: 1200 },
//     { name: "Product B", category: "Electronics", price: 1800 },
//     { name: "Product C", category: "Clothing", price: 50 },
//     { name: "Product D", category: "Clothing", price: 80 },
//     { name: "Product E", category: "Electronics", price: 1500 },
//     { name: "Product F", category: "Furniture", price: 300 },
//     { name: "Product G", category: "Furniture", price: 250 },
//     { name: "Product H", category: "Clothing", price: 120 },
// ];

// function calculateCategoryStats(products) {
//     return products.reduce((acc, product) => {
//         const { name, category, price } = product;

//         // カテゴリがまだ存在しない場合、初期化
//         if (!acc[category]) {
//             acc[category] = {
//                 sumPrice: 0,
//                 productCount: 0,
//                 highestPrice: 0,
//                 highestProduct: "",
//             };
//         }

//         // 価格の合計と商品数をカウント
//         acc[category].sumPrice += price;
//         acc[category].productCount++;

//         // 最も高い価格の商品を特定
//         if (acc[category].highestPrice < price) {
//             acc[category].highestPrice = price;
//             acc[category].highestProduct = name;
//         }

//         return acc;
//     }, {});
// }

// // 結果を計算
// const categoryStats = calculateCategoryStats(products);

// // 各カテゴリについて平均価格を計算
// for (const category in categoryStats) {
//     const stats = categoryStats[category];
//     stats.averagePrice = (stats.sumPrice / stats.productCount).toFixed(2);
// }

// console.log(categoryStats);


// --------------------------------------------------------------------------
// 問題: 配列の中から特定の条件に一致する要素をフィルタリングし、特定の属性を集計する
// 問題内容
// 与えられた products 配列の中から、次の条件に一致する商品情報を抽出し、
// それらの商品の合計価格 (sumPrice)、最も安い商品 (lowestPrice)、およびその商品の名前 (lowestProduct) を計算してください。

// 条件:

// category が "Electronics" または "Clothing" の商品
// price が 100 以上の商品

// const products = [
//     { name: "Product A", category: "Electronics", price: 1200 },
//     { name: "Product B", category: "Electronics", price: 1800 },
//     { name: "Product C", category: "Clothing", price: 50 },
//     { name: "Product D", category: "Clothing", price: 80 },
//     { name: "Product E", category: "Electronics", price: 1500 },
//     { name: "Product F", category: "Furniture", price: 300 },
//     { name: "Product G", category: "Furniture", price: 250 },
//     { name: "Product H", category: "Clothing", price: 120 },
// ];
// function calProduct(products) {
//     const filteredProduct = products.filter(product =>
//         (product.category === "Electronics" ||
//             product.category === "Clothing") &&
//         product.price > 100
//     )
//     const result = filteredProduct.reduce((acc, product) => {
//         const { name, category, price } = product
//         acc.sumPrice += price
//         if (acc.lowestPrice > price) {
//             acc.lowestPrice = price;
//             acc.lowestProduct = name
//         }
//         return acc
//     }, { sumPrice: 0, lowestPrice: Infinity, lowestProduct: null })

//     return result
// }

// console.log(calProduct(products))
// --------------------------------------------------------------------------
// 問題: 商品価格の統計
// 以下のような商品データがあります。name、category、price の情報があります。このデータに基づいて、以下の統計情報を求めてください。

// 最も高い価格の商品の名前と価格
// 最も低い価格の商品の名前と価格
// 商品の合計価格
// 平均価格（小数点以下切り捨て）
const products = [
    { name: "Product A", category: "Electronics", price: 1200 },
    { name: "Product B", category: "Electronics", price: 200 },
    { name: "Product C", category: "Clothing", price: 50 },
    { name: "Product D", category: "Clothing", price: 80 },
    { name: "Product E", category: "Electronics", price: 1500 },
    { name: "Product F", category: "Furniture", price: 300 },
    { name: "Product G", category: "Furniture", price: 250 },
    { name: "Product H", category: "Clothing", price: 120 },
];
function calcProduct(products) {
    let result = {
        highest: { name: null, price: 0 },
        lowest: { name: null, price: Infinity },
        sumPrice: 0,
        averagePrice: 0,
        count: 0
    }
    for (let product of products) {
        const {name,category,price} = product
        result.count++;
        result.sumPrice += price;
        if (price > result.highest.price) {
            result.highest.price = price;
            result.highest.name = name;
        } else if (price < result.lowest.price) {
            result.lowest.price = price;
            result.lowest.name = name;
        }
    }
    const average = (result.sumPrice / result.count).toFixed()
    
    delete result.count
    return result
}
console.log(calcProduct(products));
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------