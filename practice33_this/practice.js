// 問題 1: 基本的なcallの使用
// 要件
// 関数describeはthisを使用してオブジェクトの情報を出力します。
// callメソッドを使って、オブジェクトpersonをthisとして指定し、正しい出力を得てください。
// function describe(age, city) {
//     console.log(`I am ${this.name}, ${age} years old, and I live in ${city}.`);
// }

// const person = { name: 'John' };
// describe.call(person,25,"Tokyo")
// describeを使って正しい出力を得ること
// 出力例: "I am John, 25 years old, and I live in Tokyo."

// ------------------------------------------------------------------------------
// 問題 2: applyメソッドを使う
// 要件
// 同じdescribe関数を使います。
// 今度は**applyメソッド**を使って、同じ出力を得てください。
// 引数は配列として渡す必要があります。
// function describe(age, city) {
//     console.log(`I am ${this.name}, ${age} years old, and I live in ${city}.`);
// }

// const person = { name: 'John' };
// // describe.call(person, 25, "Tokyo");
// describe.apply(person,[25,"Tokyo"])
// ------------------------------------------------------------------------------
// 問題 3: bindを使って固定した関数を後で呼び出す
// 要件
// 同じdescribe関数を使います。
// bindメソッドを使って、thisをpersonに固定した新しい関数を作成してください。
// その新しい関数を使って、引数25と"Tokyo"を渡して呼び出し、同じ出力を得てください。
// function describe(age, city) {
//     console.log(`I am ${this.name}, ${age} years old, and I live in ${city}.`);
// }

// const person = { name: 'John' };
// const bindDescribe = describe.bind(person);
// bindDescribe(25,"Tokyo")
// describeを使って正しい出力を得ること
// 出力例: "I am John, 25 years old, and I live in Tokyo."

// ------------------------------------------------------------------------------
// 問題 4: 複数のオブジェクトで関数を使い回す
// 要件
// 複数の人を表すオブジェクト（person1とperson2）があります。
// introduce関数を定義し、この関数を使って、それぞれの人の情報を表示してください。
// call と bind を活用してください。
// function introduce(job, country) {
//     console.log(`Hi, I am ${this.name}. I work as a ${job}, and I live in ${country}.`);
// }

// const person1 = { name: 'Alice' };
// const person2 = { name: 'Bob' };
// introduce.call(person1,"Developer","Japan")
// const bindIntroduce=introduce.bind(person2)
// bindIntroduce("Designer","USA")
// introduceを使ってそれぞれの情報を出力してください。
// ------------------------------------------------------------------------------
// 問題 5: 配列の最大値を計算する（applyの応用）
// 要件
// 配列numbersが与えられます。この配列の中で最大値を求めて出力してください。
// Math.max関数を使います。ただし、Math.maxは配列を直接受け取れないため、**apply**を使って解決してください。
// const numbers = [45, 3, 89, 23, 78];

// console.log(Math.max.apply(null, numbers))
// console.log(Math.min.apply(null,numbers),Math.max.apply(null,numbers))
// ------------------------------------------------------------------------------
// 問題: 配列のコピーと新しい要素の追加
// 要件
// 配列numbersがあります。
// 新しい要素（例: 99）を追加した新しい配列を作成します。
// **applyを活用してArray.prototype.pushを使い、既存の配列をコピーしつつ、新しい要素を追加してください。
// 元の配列を変更してはいけません（イミュータブルに処理する）。
// const numbers = [45, 3, 89, 23, 78];
// const newNumbers = [...numbers];
// const input = [99]
// Array.prototype.push.apply(newNumbers,input)
// console.log(newNumbers)
// const newNumbers = Array.prototype.push.call(numbers, [99])

// console.log(numbers)
// console.log(newNumbers)
// ここに新しい配列を作成するコードを追加
// output
// Original array: [45, 3, 89, 23, 78]
// New array: [45, 3, 89, 23, 78, 99]
// ------------------------------------------------------------------------------
// 問題: 配列内の要素を動的に操作する
// 要件
// 配列numbersが与えられます。
// 配列内のすべての要素を2倍にして、新しい配列を作成してください。
// 元の配列は変更せず、新しい配列を生成する必要があります。
// Array.prototype.map を使って解決してください。
// const numbers = [1, 2, 3, 4, 5];
// // const newNumbers = [...numbers]
// // const numbers2 = newNumbers.map(number => number * 2)
// const  multiplierObj={
//     multiplier:2
// }
// const doubledNumbers = Array.prototype.map.call(numbers, function (num) {
//     return num * this.multiplier
// }, multiplierObj)

// console.log(doubledNumbers)

// ここに新しい配列を作成するコードを追加
// ------------------------------------------------------------------------------
// 問題: 複数のオブジェクトを動的に操作する
// 要件
// 複数のオブジェクト（person1とperson2）があります。
// 共通の関数introduceを作成し、thisを明示的に指定して、各オブジェクトの情報を表示してください。
// callやbindを活用して、person1とperson2を動的に操作してください。
// applyも使って、引数が動的に渡されるケースを考慮してください。
// function introduce(job, country) {
//     console.log(`Hi, I am ${this.name}. I work as a ${job}, and I live in ${country}.`);
// }

// const person1 = { name: 'Alice' };
// const person2 = { name: 'Bob' };
// introduce.call(person1, "Developer", "Japan")
// const person2Introduce = introduce.bind(person2,"Designer", "USA")
// person2Introduce()
// 各オブジェクトを`introduce`関数で操作してください。
// ------------------------------------------------------------------------------
// 次の問題: 配列のデータを動的に操作する
// 要件
// 配列peopleが与えられます。この配列には、名前と年齢を持つオブジェクトが格納されています。
// 各要素について、名前を大文字に変換し、年齢に10を加える操作を行い、新しい配列を作成してください。
// mapを使用して新しい配列を生成しつつ、bindを活用して動的に操作できるようにしてください。
// const peoples = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
// ];
// function fixPeople(peoples) {
//     const OriginalArray = peoples.map(people => {
//         const UpperName = people.name.toUpperCase();
//         const age2 = people.age * 2
//         return { UpperName, age2 }
//     })
//     return OriginalArray
// }
// console.log(fixPeople(peoples));
// const bindFixPeople = fixPeople.bind(peoples)

// const makeNewPeople = people.bind()
// ここにコードを追加してください
// Original array: [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
// ]

// New array: [
//     { name: 'ALICE', age: 35 },
//     { name: 'BOB', age: 40 },
//     { name: 'CHARLIE', age: 45 }
// ]
const ageIncrement = 10;
const context = { ageIncrement };

const peoples = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];
const operation = {
    toUpperName(person) {
        return {
            name: person.name.toUpperCase(),
            age: person.age + this.ageIncrement
        }
    }
}

const processPerson = operation.toUpperName.bind(context);
const newPeople = peoples.map(processPerson)
console.log(newPeople)
// ------------------------------------------------------------------------------