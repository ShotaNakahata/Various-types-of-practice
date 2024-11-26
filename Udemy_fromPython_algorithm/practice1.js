//O(log(n)) O(log10) 

// function logn(numbers) {
//     if(numbers<1){
//         return console.log("finished");
//     }else{
//         console.log(numbers)
//         return logn(numbers/2)
//     }

// }
// logn(10)
//-------------------------------------------------------
// function On(numbers) {
//     for(let number of numbers){
//         console.log(number)
//     }
// }
// On([1,2,3,4,5])
//-------------------------------------------------------
// O(n*log(n))
// function OnLogn(numbers) {
//     for (let i = 0; i < numbers; i++) {
//         console.log(i)
//     }
//     if (numbers <= 1) {
//         return;
//     } else {
//         OnLogn(Math.floor(numbers / 2))
//     }
// }
// OnLogn(10)
//-------------------------------------------------------
// O(n*n)
// function OnO(numbers) {
//     for(let i of numbers){
//         for(j of numbers){
//             console.log(i,j)
//         }
//     }
// }
// OnO([1,2,3,4,5])
//-------------------------------------------------------

// function BubbleSort(numbers) {
//     let count = 0
//     for(let j = 0; j<numbers.length; j++){
//         console.log(j+1,"回目（外側）")
//         count++
//         for (let i = 0; i < numbers.length -j - 1; i++) {
//             if (numbers[i] > numbers[i + 1]) {
//                 [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]]
//             }
//             console.log(j+1,"回目（内側) ",i,"文字目から ",`${numbers.length -j - 1}`," 文字目まで調べた")
//             count++
//         }
//     }
//     console.log(`最終回数：${count}回`)
//     console.log(numbers)
// }
// BubbleSort([6, 4, 5, 3, 1, 2])
//-------------------------------------------------------
// function cocktailsort(numbers) {
//     let count = 1
//     let outsideCount = 1
//     let insideCount = 1
//     let end = numbers.length - 1
//     let start = 0
//     let swap = false;
//     // let derection = ture
//     for (let i = 0; i < numbers.length; i++) {
//         swap = false
//         console.log("from 外側 : ", outsideCount, "回目")
//         for (let j = 0; j < numbers.length - 1; j++) {
//             if (numbers[j] > numbers[j + 1]) {
//                 [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]]
//                 swap = true
//             }
//             console.log("from 内側 : ", insideCount, "回目")
//             insideCount++
//             count++
//         }
//         if (swap === false){
//             console.log(`最終回数：${count}回 swap is false`)
//             return console.log(numbers)

//         };
//         // derection = !derection
//         outsideCount++
//         count++
//     }
//     console.log(`最終回数：${count}回`)
//     console.log(numbers)
// }
// // console.log(cocktailsort([1, 5, 3, 2, 4]))
// cocktailsort([1, 5, 3, 2, 4])
//-------------------------------------------------------
// function bubbleSort(numbers) {
//     let swap=true;
//     let count = 0; // ループ回数のカウント
//     let start =0;
//     let end = numbers.length-1
//     while(swap){
//         for (let i = start; i < end; i++) { // 範囲を調整
//             count++;
//             if (numbers[i] > numbers[i + 1]) {
//                 [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
//                 swap = true; // 交換があった場合、フラグをtrueに
//             }
//         }
//         if (!swap) break;
//         swap = false;
//         end--

//         for (let j = end; j > start; j--) { // 範囲を調整
//             count++;
//             if (numbers[j] < numbers[j - 1]) {
//                 [numbers[j], numbers[j - 1]] = [numbers[j - 1], numbers[j]];
//                 swap = true; // 交換があった場合、フラグをtrueに
//             }
//         }
//         if (!swap) break;
//         swap = false;
//         start++
//     }
//     console.log(`最終回数：${count}回`);
//     console.log(numbers); // ソートされた配列を出力
// }

// bubbleSort([1, 5, 3, 2, 4]);

//-------------------------------------------------------
// const numbers = [11, 2, 5, 9, 10, 3];
// const sum = 12;
// function getPair(numbers, sum) {
//     let A = null
//     let B = null
//     let outPut = []
//     let count=0;

//     for (let j = 0; j < numbers.length - 1; j++) {
//         count++
//         for (let i = j + 1; i < numbers.length; i++) {
//             count++
//             // console.log(numbers[i])
//             let newSum = numbers[j] + numbers[i];
//             if (newSum === sum) {
//                 outPut.push([numbers[j], numbers[i]])
//             }
//         }
//     }
//     return {outPut,count}
// }
// console.log(getPair(numbers, sum))
//-------------------------------------------------------
// const numbers = [11, 2, 5, 9, 10, 3];
// const sum = 12;
// function getPair(numbers,sum) {
//     let output =[]
//     let seen = new Set();
//     let count = 0;
//     for(let number of numbers){
//         const pairNumber = sum - number;
//         if(seen.has(pairNumber)){
//             output.push([pairNumber,number])
//         }
//         seen.add(number)
//         count++
//     }
//     return {output,count}
// }
// console.log(getPair(numbers,sum))
//-------------------------------------------------------
// const numbers = [11, 2, 5, 9, 10, 3];
// function getPair(numbers) {
//     const sum = numbers.reduce((acc, number) => acc + number, 0);
//     if (sum % 2 !== 0) return null;

//     const harfSum = sum/2
//     let cash = new Set();
//     const output = []
//     for(let number of numbers){
//         let pairNumber = harfSum - number
//         if(cash.has(pairNumber)){
//             output.push([pairNumber,number])
//         }else{
//             cash.add(number);
//         }
//     }
//     return output
// }

// console.log(getPair(numbers))
//-------------------------------------------------------
// function memoize(func) {
//     const cash = new Map();

//     return function (...args) {
//         const key = JSON.stringify(args)
//         if(cash.has(key)){
//             console.log(`Cache hit for arguments: ${args}`);
//             return cash.get(key);
//         }
//         console.log(`Cache miss for arguments: ${args}`);
//         const result = func(...args)
//         cash.set(key,result)
//         return result
//     }
// }
// function heavyCalculation(num) {
//     console.log(`Performing calculation for: ${num}`);
//     return num * 2; // 簡単な計算
// }
// const cachedCalculation = memoize(heavyCalculation) ;

// console.log(cachedCalculation(5)); 
// console.log(cachedCalculation(5)); 
//-------------------------------------------------------
// function isPrime(number) {
//     if (number <= 1) return false;
//     for (let i = 2; i < number; i++){
//         if(number%i===0){
//             return false
//         }else{
//             return true;
//         }
//     }

// }
// // console.log(isPrime([1,2,3,4,5,6,7,8,9,10]))
// console.log(isPrime(11))
//-------------------------------------------------------
// function isPrime(numbers) {
//     let output = {}
//     for (number of numbers) {

//         if (number <= 1) output[number]=false;

//         let isPrime = true;
//         for (let i = 2; i <= Math.sqrt(number); i++) {
//             if (number % i === 0) {
//                 isPrime=false
//                 break;
//             } 
//         }
//         output[number]=isPrime;
//     }
//     return output
// }
// console.log(isPrime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// console.log(isPrime(11))
//-------------------------------------------------------
//SelectSort 計算量O(n**2)
// const numbers = [1, 5, 2, 3, 6, 4]

// function SlectSort(numbers) {
//     const numsLength = numbers.length
//     for (let i = 0; i < numsLength - 1; i++) {
//         let min_idx = i
//         // console.log(numbers[i])
//         for (let j = i+1; j < numsLength; j++) {
//             if (numbers[min_idx] > numbers[j]) {
//                 min_idx = j
//             }
//         }
//         [numbers[i], numbers[min_idx]] = [numbers[min_idx], numbers[i]];
//     }
//     return numbers
// }
// console.log(SlectSort(numbers))
//-------------------------------------------------------
//gnome Sort
// const numbers = [5, 4, 2, 3, 1]
// function gnomeSort(numbers) {
//     let index = 0
//     let numLength = numbers.length;
//     while (index < numLength) {
//         if (index === 0) {
//             index++
//         } else {
//             if (numbers[index] < numbers[index - 1]) {
//                 [numbers[index], numbers[index - 1]] = [numbers[index - 1], numbers[index]]
//                 index--
//             }else{
//                 index++
//             }
//         }
//     }
//     return numbers
// }
// console.log(gnomeSort(numbers));
//number=[1,2,3,4,5,0]
//-------------------------------------------------------
const numbers = [5, 4, 2, 3, 1]
function insertSort(numbers) {

    const numLength = numbers.length;
    for (let i = 1; i < numLength; i++) {
        let forcusNunber = numbers[i]
        let finalIdx = i - 1
        while (finalIdx >= 0 && numbers[finalIdx] > forcusNunber) {
            numbers[finalIdx + 1] = numbers[finalIdx];
            finalIdx--
        }
        numbers[finalIdx + 1] = forcusNunber
    }
    return numbers
}
console.log(insertSort(numbers));
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------