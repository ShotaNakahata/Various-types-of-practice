// 課題
// 次の配列numbersを昇順に並べ替えた新しい配列sortedNumbersを作成してください。
// 元の配列は変更されていないことを確認してください。

const numbers = [43, 12, 56, 9, 32, 27];

const sortedNumbers = numbers.slice().sort((a,b)=>a-b)

console.log("元の配列:", numbers); // [43, 12, 56, 9, 32, 27] のままであるべき
console.log("並び替えた配列:", sortedNumbers); // [9, 12, 27, 32, 43, 56]

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー