// // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 基礎問題 1: breakを使用してループを終了する
// 課題: 数値 1 から 100 までをループで出力します。ただし、ループが 50 に達したときにループを終了します。
// for (let i = 1; i <= 100; i++) {
//     console.log(i)
//     if (i === 50) {
//         break
//     }
// }
// for (let i = 1; i <= 100; i++) {
//     if(i<=50){
//         console.log(i)
//     }
// }
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 2: continueを使用して特定の処理をスキップ
// 課題: 1 から 20 までをループで出力します。ただし、3 の倍数は出力せずスキップします。
// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0) {
//         continue
//     } else {
//         console.log(i)
//     }
// }
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 3: ネストしたループでのbreak
// 課題: 2重のネストループを使用して、次の条件を満たすようにコードを書いてください：

// 外側のループは 1 から 5 までを回します（変数i）。
// 内側のループは 1 から 5 までを回します（変数j）。
// 各ループの積（i * j）を出力します。
// 積が 20 を超えたらすべてのループを終了してください。
// for (let i = 1; i <= 5; i++) {
//     console.log("i :", i)
//     let j = 1;
//     for (j; j <= 5; j++) {
//         console.log("j :", j)
//         console.log("from j: ", i * j)
//         if (i * j > 20) {
//             break
//         }
//     }
//     if(i * j > 20){
//         break
//     }
// }
// outloop:
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         console.log(`i: ${i}, j: ${j}`);
//         if (i * j > 20) {
//             break outloop;
//         }
//     }
// }
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 4: continueを使用した複雑なフィルタリング
// 課題: 以下の配列 ["apple", "banana", "cherry", "date", "elderberry"] をループし、
// 文字数が偶数のものだけを出力してください。奇数文字のものはスキップします。

// 学習ポイント:

// continue を使用して、特定の条件で処理をスキップし、ループの次の反復に進む方法を学びます。
// const arr = ["apple", "banana", "cherry", "date", "elderberry"]
// arr.forEach(frut=>{
//     if(frut.length%2===0){
//         console.log(frut);
//     }
// })
// for (frut of arr){
//     if(frut.length%2!==0){
//         console.log(frut)
//         continue
//     }else{
//         console.log(frut)
//     }
// }
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 5: 特定の条件でループをスキップする
// 課題: 複数の条件を組み合わせてcontinueを使用し、配列内の特定の要素をスキップしながら出力するコードを書いてください。

// 条件:
// 以下の配列 ["ant", "bear", "cat", "dog", "elephant", "fox", "giraffe"] をループで回します。
// 文字数が偶数の要素は出力せずスキップします（continueを使用してください）。
// 文字に「a」が含まれている場合もスキップします（continueを使用）。
// const arr = ["ant", "bear", "cat", "dog", "elephant", "fox", "giraffe"]
// for (animal of arr) {
//     if (animal.length % 2 !== 0) {
//         if (!animal.includes("a")) {
//             console.log(animal)
//         } continue;
//     }continue;
// }
// const arr = ["ant", "bear", "cat", "dog", "elephant", "fox", "giraffe"]
// for (animal of arr) {
//     if(animal.length%2===0||animal.includes("a")){
//         continue;
//     }
//     console.log(animal)
// }
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 6: 早期終了の条件を複数設定
// 課題: 1 から 100 までの数字をループで出力しますが、以下の条件を満たすようにしてください：

// 数字が 15 の倍数のときだけ「FizzBuzz」と出力し、その数値は出力しない。
// 数字が 40 に達したらループを終了する。
// それ以外の数字はそのまま出力する。
// for (let i = 1; i <= 100; i++) {
//     if(i>=40){
//         break;
//     }else if(i%15==0){
//         console.log("FizzBuzz")
//         continue
//     }
//     console.log(i)
// }
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 7: 数値のフィルタリングと早期終了
// 課題: 次の条件に従って、数値の配列をループして出力するコードを書いてください：

// 配列は [5, 12, 18, 3, 24, 7, 30, 21, 8, 45] です。
// 数値が 20 以上の場合はその数値を出力します。
// 数値が 40 以上になったら、ループを終了します。
// continue を使用して数値が 20 未満の場合は出力をスキップしてください。
// const arr = [5, 12, 18, 3, 24, 7, 30, 21, 8, 45]
// for (number of arr){
//     if(number>=40){
//         break
//     }
//     if(number<20){
//         continue
//     }else{
//         console.log(number)
//     }
// }
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 8: ネストループで条件を満たすペアを探す
// 課題: 次の2つの配列を使って、各ペアの合計が30になる組み合わせを出力するコードを書いてください。
// ペアが見つかったら、そのペアを出力して内側のループを終了し、次のiの反復に進んでください。

// 配列1: [10, 15, 20, 25]
// 配列2: [5, 10, 15, 20]
// const arr1 = [10, 15, 20, 25,5,6,8,20]
// const arr2 =  [5, 10, 15, 20,5]
// for(number1 of arr1){
//     for(number2 of arr2){
//         if(number1+number2===30){
//             console.log(`number1: ${number1},number2: ${number2}`)
//             continue;
//         }
//     }
// }
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 9: 多重条件の組み合わせフィルタリング
// 課題: 次の配列 ["table", "chair", "lamp", "sofa", "bookshelf", "desk", "bed"] をループし、
// 以下の条件を満たす要素を出力するコードを書いてください：

// 文字数が偶数の要素は出力しない。
// 要素に「e」が含まれている場合は、出力せずスキップ。
// 条件を満たさない要素のみを出力します。
// const arr = ["table", "chair", "lamp", "sofa", "bookshelf", "desk", "bed"] 
// for(prod of arr){
//     if(prod.length%2===0 || prod.includes("e")){
//         continue;
//     }
//     console.log(prod)
// }
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 各グループ内の要素で、文字数が5以上のものだけを出力する。
// グループ名がgroup2の場合は、そのグループ内の要素を一切処理せずにスキップする。
// 文字に"e"が含まれている要素が見つかったら、そのグループのループを終了し、次のグループに移る。
// const data = {
//     group1: ["kiwi", "plum", "banana", "grape"], // "kiwi"と"plum"が出力される
//     group2: ["fig", "date"], // スキップされる
//     group3: ["mango", "peach", "plum"] // "mango"が出力される
// };
// for (group of Object.entries(data)){
//     // console.log(group)
//     // console.log(group[1])
//     if(group[0]==="group2"){
//         continue
//     }
//     for(fruit of group[1]){
//         if(fruit.includes("e")){
//             break;
//         }
//         if(fruit.length>=5){
//             console.log(fruit)
//         }
//     }
// }
// for ([groupName, prod] of Object.entries(data)) {
//     if (groupName === "group2") {
//         continue
//     }
//     for (fruit of prod) {
//         if (fruit.includes("e")) {
//             break;
//         }
//         if (fruit.length >= 5) {
//             console.log(fruit)
//         }
//     }
// }
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー