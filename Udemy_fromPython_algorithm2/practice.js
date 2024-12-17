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
// function caesarCipher(text, shift) {
//     const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
//     let result = ""
//     for (let char of text) {
//         if (upperAlphabet.includes(char)) {
//             let index = (upperAlphabet.indexOf(char) + shift) % upperAlphabet.length
//             result+=upperAlphabet[index];
//         }else if(lowerAlphabet.includes(char)) {
//             let index = (lowerAlphabet.indexOf(char) + shift) % lowerAlphabet.length
//             result+=lowerAlphabet[index];
//         }else{
//             result += char
//         }
//     }
//     return result
// }
// console.log(caesarCipher("ATTACK SILICON VALLEY by engineer", 3));
// -----------------------------------------------
// function caesarCipher(text, shift) {
//     const lenAlphabet = 26; // アルファベットの長さ
//     let result = "";
//     for (let char of text) {
//         if (char >= "A" && char <= "Z") {
//             const charCode = ((char.charCodeAt(0) - "A".charCodeAt(0) + shift) % lenAlphabet + lenAlphabet) % lenAlphabet + "A".charCodeAt(0);
//             result += String.fromCharCode(charCode);
//         } else if (char >= "a" && char <= "z") {
//             const charCode = ((char.charCodeAt(0) - "a".charCodeAt(0) + shift) % lenAlphabet + lenAlphabet) % lenAlphabet + "a".charCodeAt(0);
//             result += String.fromCharCode(charCode);
//         } else {
//             result += char
//         }
//     }
//     return result
// }

// const encrypted = caesarCipher("ATTACK SILICON VALLY by engineer", 3);
// console.log(encrypted); // 暗号化された文字列
// const decrypted = caesarCipher(encrypted, -3);
// console.log(decrypted); // 復号化された文字列
// -----------------------------------------------
// function vigenereCipher(text, key, encrypt = true) {
//     const lenAlphabet = 26;
//     const NewKey = key.repeat(Math.ceil(text.length / key.length)).slice(0, text.length);
//     let result = ""
//     for (let i = 0; i < text.length; i++) {
//         let charText = text[i]
//         let charKey = NewKey[i]
//         if ((charText >= "A" && charText <= "Z") || (charText >= "a" && charText <= "z")) {
//             const baseChar = charText >= "A" && charText <= "Z" ? "A".charCodeAt(0) : "a".charCodeAt(0)
//             const baseKey = charKey >= "A" && charKey <= "Z" ? "A".charCodeAt(0) : "a".charCodeAt(0)
//             const charIdx = charText.charCodeAt(0) - baseChar
//             const keyIdx = charKey.charCodeAt(0) - baseKey
//             let newIndex;
//             if (encrypt) {
//                 newIndex = (charIdx + keyIdx) % lenAlphabet
//             } else {
//                 newIndex = (charIdx - keyIdx + lenAlphabet) % lenAlphabet
//             }
//             result += String.fromCharCode(newIndex+baseChar)
//         } else {
//             result += charText
//         }
//     }
//     return result
// }

// const encrypted = vigenereCipher("Hello, World!", "KeY", true);
// console.log("Encrypted:", encrypted);

// -----------------------------------------------
function hanoi(diskNum, start, end, center) {
    if (diskNum < 1) return;
    hanoi(diskNum - 1, start, center, end);
    console.log(`diskNum ${diskNum} move from ${start} to ${end}`)
    hanoi(diskNum-1,center,end,start);
}
hanoi(4, "A", "C", "B");
// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------