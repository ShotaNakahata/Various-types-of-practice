// -----------------------------------------------
// const input = 50
// function prime(num) {
//     let primes = []
//     for (let i = 2; i <= num; i++) {
//         let isPrime = true
//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 isPrime = false;
//                 break
//             }
//         }
//         if (isPrime) {
//             primes.push(i)
//         }
//     }
//     return primes
// }
// console.log(prime(input))
// -----------------------------------------------
// function fermatLastTheorem(maxNum, squireNum) {
//     let result = []
//     let zMaxNum = 
//     for (let x = 1; x < maxNum + 1; x++) {
//         for (let y = x + 1; y < maxNum + 1; y++) {
//             for (let z = y + 1; z < zMaxNum; z++) {

//             }
//         }
//     }
// }
// -----------------------------------------------
function caesarCipher(text, shift) {
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = ""
    for (let char of text) {
        if (upperAlphabet.includes(char)) {
            let index = (upperAlphabet.indexOf(char) + shift) % upperAlphabet.length
            result+=upperAlphabet[index];
        }else if(lowerAlphabet.includes(char)) {
            let index = (lowerAlphabet.indexOf(char) + shift) % lowerAlphabet.length
            result+=lowerAlphabet[index];
        }else{
            result += char
        }
    }
    return result
}
console.log(caesarCipher("ATTACK SILICON VALLEY by engineer", 3));
// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------