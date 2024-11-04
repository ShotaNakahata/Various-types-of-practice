

// 問題設定
// 以下のような配列 salesData が与えられています。この配列には複数のオブジェクトが含まれており、それぞれがある商品の売上データを表しています。

// region（文字列） - 地域名（例: "North", "South", "East", "West"）
// products（配列） - 商品の売上データを含むオブジェクトの配列。各商品オブジェクトには以下のプロパティがあります：
// name（文字列） - 商品名（例: "Laptop", "Phone"など）
// sales（数値） - 商品の売上金額
// 要件
// salesDataから、各地域ごとの売上合計を計算してください。
// 結果をオブジェクトとして返し、キーが地域名、値がその地域の売上合計となるようにしてください。
// const salesData = [
//     {
//         region: "North",
//         products: [
//             { name: "Laptop", sales: 1200 },
//             { name: "Phone", sales: 800 }
//         ]
//     },
//     {
//         region: "South",
//         products: [
//             { name: "Laptop", sales: 700 },
//             { name: "Tablet", sales: 400 }
//         ]
//     },
//     {
//         region: "East",
//         products: [
//             { name: "Phone", sales: 600 },
//             { name: "Tablet", sales: 300 }
//         ]
//     },
//     {
//         region: "West",
//         products: [
//             { name: "Laptop", sales: 2000 },
//             { name: "Phone", sales: 1000 }
//         ]
//     }
// ];

// function calculateSalesByRegion(salesData) {
//     const result = salesData.reduce((acc, data) => {
//         const totalSales = data.products.reduce((sum, product) => sum + product.sales, 0)
//         acc[data.region] = totalSales;
//         return acc
//     }, {})
//     return result
// }
// console.log(calculateSalesByRegion(salesData))
// {
//     North: 2000,
//         South: 1100,
//             East: 900,
//                 West: 3000
// }

// ------------------------------------------------------------------------------------------------------
// 問題設定
// 以下のようなデータ構造を持つ配列 storeSalesData が与えられています。これは、いくつかの店舗の売上データを表しています。

// store（文字列）: 店舗名（例: "Store A", "Store B"など）
// products（配列）: 店舗で販売した商品のデータを表すオブジェクトの配列
// name（文字列）: 商品名（例: "Laptop", "Phone"など）
// quantity（数値）: 販売された数量
// unitPrice（数値）: 商品の単価
// 要件
// 各店舗ごとに、商品別の売上金額を集計してください。
// 結果をオブジェクトで返し、次のような形式にしてください。
// キーが店舗名
// 各店舗ごとの商品別売上をオブジェクトとして格納し、商品名をキー、売上金額（quantity * unitPrice）を値とする
// const storeSalesData = [
//     {
//         store: "Store A",
//         products: [
//             { name: "Laptop", quantity: 3, unitPrice: 1200 },
//             { name: "Phone", quantity: 5, unitPrice: 800 }
//         ]
//     },
//     {
//         store: "Store B",
//         products: [
//             { name: "Laptop", quantity: 2, unitPrice: 1200 },
//             { name: "Tablet", quantity: 3, unitPrice: 400 }
//         ]
//     },
//     {
//         store: "Store A",
//         products: [
//             { name: "Laptop", quantity: 1, unitPrice: 1200 },
//             { name: "Tablet", quantity: 1, unitPrice: 400 }
//         ]
//     },
//     {
//         store: "Store C",
//         products: [
//             { name: "Phone", quantity: 4, unitPrice: 800 },
//             { name: "Tablet", quantity: 2, unitPrice: 400 }
//         ]
//     }
// ];

// function calculateSalesByStore(storeSalesData) {
//     const result = storeSalesData.slice().reduce((acc, data) => {
//         const sumPrice = data.products.reduce((acc, product) => {
//             acc[product.name] = product.quantity * product.unitPrice
//             return acc
//         }, {})
//         acc[data.store] = sumPrice
//         return acc
//     }, {})
//     return result
// }
// console.log(calculateSalesByStore(storeSalesData))
// { store: 'Store A', products: [Array] },

// output
// {
//     "Store A": {
//         "Laptop": 4800, // 3*1200 + 1*1200
//             "Phone": 4000,  // 5*800
//                 "Tablet": 400   // 1*400
//     },
//     "Store B": {
//         "Laptop": 2400, // 2*1200
//             "Tablet": 1200  // 3*400
//     },
//     "Store C": {
//         "Phone": 3200,  // 4*800
//             "Tablet": 800   // 2*400
//     }
// }

const storeSalesData = [
    {
        store: "Store A",
        products: [
            { name: "Laptop", quantity: 3, unitPrice: 1200 },
            { name: "Phone", quantity: 5, unitPrice: 800 }
        ]
    },
    {
        store: "Store B",
        products: [
            { name: "Laptop", quantity: 2, unitPrice: 1200 },
            { name: "Laptop", quantity: 2, unitPrice: 1200 },
            { name: "Tablet", quantity: 3, unitPrice: 400 }
        ]
    },
    {
        store: "Store A",
        products: [
            { name: "Laptop", quantity: 1, unitPrice: 1200 },
            { name: "Tablet", quantity: 1, unitPrice: 400 }
        ]
    },
    {
        store: "Store C",
        products: [
            { name: "Phone", quantity: 4, unitPrice: 800 },
            { name: "Tablet", quantity: 2, unitPrice: 400 }
        ]
    }
];

function calculateSalesByStore(storeSalesData) {
    return storeSalesData.slice().reduce((acc, data) => {
        // 各店舗ごとに商品の売上金額を計算
        const sumPrice = data.products.reduce((productAcc, product) => {
            // 既に商品が存在すれば売上金額を加算、なければ新規作成
            if (productAcc[product.name]) {
                productAcc[product.name] += product.quantity * product.unitPrice;
            } else {
                productAcc[product.name] = product.quantity * product.unitPrice;
            }
            return productAcc;
        }, {});

        // 店舗名をキーとして結果を格納
        if (acc[data.store]) {
            // 既存の店舗があれば商品の売上を追加
            for (const [product, sales] of Object.entries(sumPrice)) {
                if (acc[data.store][product]) {
                    acc[data.store][product] += sales;
                } else {
                    acc[data.store][product] = sales;
                }
            }
        } else {
            // 新しい店舗の場合はそのまま追加
            acc[data.store] = sumPrice;
        }
        return acc;
    }, {});
}

console.log(calculateSalesByStore(storeSalesData))
// ------------------------------------------------------------------------------------------------------
