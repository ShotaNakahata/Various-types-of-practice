// カテゴリーごとの商品の総数
// 各カテゴリー（Electronics, Apparel, Home Appliancesなど）に何個の商品が含まれているかを出力してください。
// 在庫がある商品の合計価格
// inStockがtrueの商品の合計価格を計算してください。
// 評価の平均値
// すべての商品の評価の平均を算出してください（小数点1桁まで）。

// output
// {
//     categoryCounts: { Electronics: 3, Apparel: 2, Home Appliances: 2 },
//     totalInStockPrice: 2130,
//     averageRating: 4.3
// }


const products = [
    { name: "Laptop", category: "Electronics", price: 1200, rating: 4.5, inStock: true },
    { name: "Headphones", category: "Electronics", price: 100, rating: 4.2, inStock: false },
    { name: "Shoes", category: "Apparel", price: 60, rating: 3.8, inStock: true },
    { name: "Coffee Maker", category: "Home Appliances", price: 80, rating: 4.0, inStock: true },
    { name: "T-shirt", category: "Apparel", price: 20, rating: 4.1, inStock: false },
    { name: "Blender", category: "Home Appliances", price: 50, rating: 4.6, inStock: true },
    { name: "Smartphone", category: "Electronics", price: 800, rating: 4.8, inStock: true }
];

const initialCount = {categoryCounts:{}};

const categoryCounts = products.reduce((acc,product)=>{
    const category = product.category;
    acc.categoryCounts[category] = (acc.categoryCounts[category]||0)+1;
    return acc
},initialCount)

console.log(categoryCounts); 

// function aggregateProductData(products){
//     products.reduce((accumulator,product)=>{

//     },)
// }

// aggregateProductData(products)