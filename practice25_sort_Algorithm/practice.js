// 課題
// 次の配列numbersを昇順に並べ替えた新しい配列sortedNumbersを作成してください。
// 元の配列は変更されていないことを確認してください。

// const numbers = [43, 12, 56, 9, 32, 27];

// const sortedNumbers = numbers.slice().sort((a, b) => a - b)

// console.log("元の配列:", numbers); // [43, 12, 56, 9, 32, 27] のままであるべき
// console.log("並び替えた配列:", sortedNumbers); // [9, 12, 27, 32, 43, 56]

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// 中級問題：大量データでのソートと計算時間の測定
// 目的: 大量データを扱う際のソートの実行時間を計測し、パフォーマンスの感覚をつかむことが目的です。
// sort()の計算量についても理解を深める機会になります。

// 説明: データが多くなるとソートにかかる時間も増加します。この課題では、ランダムな数値が10万件入った配列を生成し、
// それをソートして、かかった時間を測定してみましょう。

// 課題
// ランダムな数値の配列を10万件生成してください。
// 生成した配列を昇順に並べ替え、並び替えにかかった時間を測定してください。
// 元の配列は変更しないように、新しい配列を生成してソートしてください。

// function generateRandomNumbers(count) {
//     const numbers = [];
//     for (let i = 0; i < count; i++){
//         numbers.push(Math.floor(Math.random()*1000000));
//     }
//     return numbers
// }

// const largeArray = generateRandomNumbers(100000);

// console.time("sort time");
// const sortedLargeArray = largeArray.slice().sort((a,b)=>a-b)
// console.timeEnd("sort time")


// console.log("元の配列",largeArray.slice(0,10));
// console.log("並び替えた配列:",sortedLargeArray.slice(0,10));

// ------------------------------------------------------------------------------------------------------
// 問題設定
// 10万件のユーザーデータがあるとします。各ユーザーは、以下のプロパティを持っています：

// age（数値） - 年齢
// name（文字列） - 名前
// 複数基準で並べ替えるという条件に従ってデータをソートし、実行時間を計測してください。

// 要件
// 第一基準として、ageの昇順で並べ替えます。
// 第二基準として、nameをアルファベット順に並べ替えます（同じ年齢のユーザーについて、名前順にソート）。
// 実装手順
// データ生成: ageとnameをランダムに生成して、10万件のユーザーオブジェクト配列 users を作成します。
// パフォーマンス測定: console.time()とconsole.timeEnd()でソートにかかる時間を計測します。
// 結果の確認: ソート後の配列の最初の5件をコンソールに表示し、正しい順序で並べ替えられていることを確認してください。

const names = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Judy"];

function generateRandomUsers(count) {
    const users = [];
    for (let i = 0; i < count; i++) {
        users.push({
            age: Math.floor(Math.random() * 100), // 年齢を0から99のランダムな整数で生成
            name: names[Math.floor(Math.random() * names.length)] // ランダムな名前を選択
        });
    }
    return users;
}

const users = generateRandomUsers(100000); // 10万件のデータ生成

console.time("finalOutput")
const sortedUsers=users.slice().sort((a,b)=>{
    if(a.age-b.age!==0){
        return a.age-b.age
    }else{
        return a.name.localeCompare(b.name);
    }
})
console.timeEnd("finalOutput")
console.log(sortedUsers.slice(0,10))
// ------------------------------------------------------------------------------------------------------