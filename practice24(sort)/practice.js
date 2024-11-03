
// 問題 1: 年齢順のソート
// 以下のpeople配列には、複数の人の名前と年齢が格納されています。
// この情報をもとに、年齢の昇順と降順でソートした配列をそれぞれ作成する関数sortPeopleByAgeを作成してください。

// 要件
// **年齢が若い順（昇順）**で人々を並べ替えた配列を作成してください。
// **年齢が高い順（降順）**で人々を並べ替えた配列も作成してください。
// それぞれの結果をオブジェクトとして返してください。

// const people = [
//     { name: "Alice", age: 30 },
//     { name: "Bob", age: 20 },
//     { name: "Charlie", age: 25 },
//     { name: "David", age: 35 }
// ];
// function sortPeopleByAge(people) {
//     const ascending = [...people].sort((a,b)=>a.age-b.age);
//     const descending = [...people].sort((a,b)=>b.age-a.age);
//     return {ascending,descending}
// }

// console.log(sortPeopleByAge(people));
// 出力例:
// {
//   ascending: [
//     { name: "Bob", age: 20 },
//     { name: "Charlie", age: 25 },
//     { name: "Alice", age: 30 },
//     { name: "David", age: 35 }
//   ],
//   descending: [
//     { name: "David", age: 35 },
//     { name: "Alice", age: 30 },
//     { name: "Charlie", age: 25 },
//     { name: "Bob", age: 20 }
//   ]
// }


// 問題 2: 商品リストの価格順ソート
// 以下のproducts配列には、商品のnameとpriceが含まれています。
// この配列を元に、価格の昇順と価格の降順で商品を並べ替える関数sortProductsByPriceを作成してください。

// 要件
// **価格が低い順（昇順）**で並べ替えた配列ascendingを作成してください。
// **価格が高い順（降順）**で並べ替えた配列descendingを作成してください。
// それぞれの結果をオブジェクトとして返してください。

// const products = [
//     { name: "Laptop", price: 1000 },
//     { name: "Phone", price: 800 },
//     { name: "Tablet", price: 600 },
//     { name: "Monitor", price: 300 }
// ];
// function sortProductsByPrice(products) {
//     const ascending = [...products].sort((a, b) => a.price - b.price);
//     const descending = [...products].sort((a, b) => b.price - a.price);
//     return { ascending, descending }
// }

// console.log(sortProductsByPrice(products));
// 出力例:
// {
//   ascending: [
//     { name: "Monitor", price: 300 },
//     { name: "Tablet", price: 600 },
//     { name: "Phone", price: 800 },
//     { name: "Laptop", price: 1000 }
//   ],
//   descending: [
//     { name: "Laptop", price: 1000 },
//     { name: "Phone", price: 800 },
//     { name: "Tablet", price: 600 },
//     { name: "Monitor", price: 300 }
//   ]
// }


// const products = [
//     { name: "A", price: 1000 },
//     { name: "C", price: 800 },
//     { name: "B", price: 600 },
//     { name: "D", price: 300 }
// ];
// function sortProductsByName(products) {
//     const ascending = [...products].sort((a,b)=>a.name.localeCompare(b.name));
//     const descending = [...products].sort((a,b)=>b.name.localeCompare(a.name))
//     return {ascending,descending}
// }

// console.log(sortProductsByName(products));
// 出力例:
// {
//   ascending: [
//     { name: "Laptop", price: 1000 },
//     { name: "Monitor", price: 300 },
//     { name: "Phone", price: 800 },
//     { name: "Tablet", price: 600 }
//   ],
//   descending: [
//     { name: "Tablet", price: 600 },
//     { name: "Phone", price: 800 },
//     { name: "Monitor", price: 300 },
//     { name: "Laptop", price: 1000 }
//   ]
// }


// 問題: 商品リストの複数条件ソート
// 以下のproducts配列には、商品のname、price、およびrating（評価）が含まれています。
// 複数の条件を基に並べ替える関数sortProductsを作成してください。

// 要件
// 価格が高い順に並べ替え、同じ価格の場合には評価の高い順で並べ替えてください。
// ソート後の配列を返してください。

// const products = [
//     { name: "Product A", price: 1000, rating: 4.5 },
//     { name: "Product B", price: 1000, rating: 4.7 },
//     { name: "Product C", price: 800, rating: 4.8 },
//     { name: "Product D", price: 800, rating: 4.2 },
//     { name: "Product E", price: 600, rating: 4.0 }
// ];
// function sortProducts(products) {
//     return [...products].sort((a, b) => (b.price - a.price !== 0 ? b.price - a.price :
//         b.rating - a.rating
//     ));
// }

// console.log(sortProducts(products));
// 出力例:
// [
//   { name: "Product B", price: 1000, rating: 4.7 },
//   { name: "Product A", price: 1000, rating: 4.5 },
//   { name: "Product C", price: 800, rating: 4.8 },
//   { name: "Product D", price: 800, rating: 4.2 },
//   { name: "Product E", price: 600, rating: 4.0 }
// ]

// 問題: 本のタイトルと著者名でのソート
// 以下のbooks配列には、title（タイトル）とauthor（著者）が含まれています。
// この配列を、タイトルのアルファベット順（昇順）で並べ替え、
// 同じタイトルの本がある場合は著者名のアルファベット順でさらに並べ替える関数sortBooksを作成してください。

// const books = [
//     { title: "A", author: "A" },
//     { title: "B", author: "B" },
//     { title: "A", author: "C" },
//     { title: "C", author: "D" },
//     { title: "B", author: "E" }
// ];
// function sortBooks(books) {
//     return [...books].sort((a,b)=>(a.title.localeCompare(b.title)!==0?
//     a.title.localeCompare(b.title):
//     a.author.localeCompare(b.author)
// ))
// }

// console.log(sortBooks(books));
// 出力例:
// [
//   { title: "CSS Fundamentals", author: "Alice Smith" },
//   { title: "CSS Fundamentals", author: "Charlie White" },
//   { title: "HTML Basics", author: "Bob Brown" },
//   { title: "JavaScript Essentials", author: "Jane Doe" },
//   { title: "JavaScript Essentials", author: "A" }
// ]


// 応用問題: 複数条件でのイベントの並べ替え
// 以下のevents配列には、イベントのname（名前）、date（開催日）、priority（優先度）が含まれています。
// この配列を使って、複数の条件で並べ替える関数sortEventsを作成してください。

// 要件
// 優先度の高い順（priorityの値が小さい順）で並べ替えます。
// 優先度が同じ場合は開催日が近い順（dateが早い順）で並べ替えます。
// 優先度と開催日が同じ場合はイベント名のアルファベット順で並べ替えます。
// ソートされたイベントの配列を返してください。

// const events = [
//     { name: "Event A", date: "2024-05-01", priority: 2 },
//     { name: "Event B", date: "2024-04-15", priority: 1 },
//     { name: "Event C", date: "2024-05-10", priority: 2 },
//     { name: "Event D", date: "2024-03-20", priority: 3 },
//     { name: "Event E", date: "2024-04-01", priority: 1 }
// ];

// // console.log(parseInt((events[1].date).replace(/-/g, "")));

// function sortEvents(events) {
//     return [...events].sort((a, b) => a.priority - b.priority !== 0 
//     ?a.priority - b.priority 
//     :parseInt(a.date.replace(/-/g, "")) - parseInt(b.date.replace(/-/g, ""))!==0
//                 ?parseInt(a.date.replace(/-/g, "")) - parseInt(b.date.replace(/-/g, ""))
//                 :a.name.localeCompare(b.name)
//     )
// }

// console.log(sortEvents(events));
// 出力例:
// [
//   { name: "Event B", date: "2024-04-15", priority: 1 },
//   { name: "Event E", date: "2024-04-01", priority: 1 },
//   { name: "Event A", date: "2024-05-01", priority: 2 },
//   { name: "Event C", date: "2024-05-10", priority: 2 },
//   { name: "Event D", date: "2024-03-20", priority: 3 }
// ]

// const events = [
//     { name: "Event A", date: "2024-05-01", priority: 2 },
//     { name: "Event B", date: "2024-04-15", priority: 1 },
//     { name: "Event C", date: "2024-05-10", priority: 2 },
//     { name: "Event D", date: "2024-03-20", priority: 3 },
//     { name: "Event E", date: "2024-04-01", priority: 1 }
// ];

// // console.log(parseInt((events[1].date).replace(/-/g, "")));

// function sortEvents(events) {
//     return [...events].sort((a, b) => a.priority - b.priority !== 0 
//     ?a.priority - b.priority 
//     :new Date(a.date) - new Date(b.date)!==0
//                 ?new Date(a.date) - new Date(b.date)
//                 :a.name.localeCompare(b.name)
//     )
// }

// console.log(sortEvents(events));

// const now = new Date()
// console.log(now.toLocaleString("ja-JP"))