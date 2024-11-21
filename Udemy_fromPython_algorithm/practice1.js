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
function cocktailsort(numbers) {
    let count = 1
    let outsideCount = 1
    let insideCount = 1
    let end = numbers.length - 1
    let start = 0
    let swap = false;
    // let derection = ture
    for (let i = 0; i < numbers.length; i++) {
        console.log("from 外側 : ", outsideCount, "回目")
        for (let j = 0; j < numbers.length - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]]
                swap = true
            }
            console.log("from 内側 : ", insideCount, "回目")
            insideCount++
            count++
        }
        if (swap === false){
            console.log(`最終回数：${count}回 swap is false`)
            return console.log(numbers)
            
        };
        swap = false
        // derection = !derection
        outsideCount++
        count++
    }
    console.log(`最終回数：${count}回`)
    console.log(numbers)
}
// console.log(cocktailsort([1, 5, 3, 2, 4]))
cocktailsort([1, 5, 3, 2, 4])
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------