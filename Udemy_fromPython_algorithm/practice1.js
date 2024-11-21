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
function OnLogn(numbers) {
    for (let i = 0; i < numbers; i++) {
        console.log(i)
    }
    if (numbers <= 1) {
        return;
    } else {
        OnLogn(Math.floor(numbers / 2))
    }
}
OnLogn(10)
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------