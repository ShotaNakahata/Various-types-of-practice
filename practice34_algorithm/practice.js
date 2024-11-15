// 問題文:
// 与えられた文字列を逆順に並び替えて返す関数を実装してください。

// 例:
// 入力: "hello"
// 出力: "olleh"

// 入力: "frontend"
// 出力: "dnetnorf"

// 要件:
// 空文字列が与えられた場合は、空文字列を返してください。
// 例: "" → ""
// 文字列の大文字と小文字は区別してください。
// 例: "Hello" → "olleH"
// スペースや記号も逆順に含めてください。
// 例: "abc 123!" → "!321 cba"
// function reverseString(input) {
//     if (input === "") return "";
//     return input.split("").reverse().join("");
//     // if(input===""){
//     //     return `""`
//     // }
//     // const splitInputArr = input.split("");
//     // splitInputArr.reverse();
//     // const JoinStr = splitInputArr.join("");
//     // return JoinStr

// }

// // テスト用
// console.log(reverseString("hello")); // 出力: "olleh"
// console.log(reverseString("frontend")); // 出力: "dnetnorf"
// console.log(reverseString("abc 123!")); // 出力: "!321 cba"
// console.log(reverseString("")); // 出力: ""

// -----------------------------------------------------------
// 問題 2: アナグラムの判定
// 問題文:
// 2つの文字列がアナグラム（同じ文字を並べ替えたら一致する文字列）かを判定する関数を実装してください。

// アナグラムとは？
// 例: "listen" と "silent" はアナグラムです。
// なぜなら、両方とも同じ文字（l, i, s, t, e, n）を含み、並び替えただけで一致するからです。
// 要件:
// 文字列の大文字小文字は区別しないものとします（例: "Listen" と "Silent" はアナグラムと見なす）。
// 空文字列はアナグラムと見なします（例: isAnagram("", "") → true）。
// 文字列の長さが異なる場合はアナグラムではありません。
function isAnagram(str1, str2) {
    if (str1 === "" && str2 === "") return true;
    if(str1.length!==str1.length) return false;
    return str1.toLowerCase().split("").sort().join("") ===
    str2.toLowerCase().split("").sort().join("")

    // const str1Arr=str1.toLowerCase().split("");
    // const str2Arr=str2.toLowerCase().split("");
    // // console.log(str1Arr.sort())
    // // console.log(str2Arr.sort())

    // if (str1Arr.length !== str2Arr.length) return false;
    // if(str1Arr.sort().join("")===str2Arr.sort().join("")){
    //     return true
    // }else{
    //     return false
    // }
    // const sort1 = str1Arr.sort().join("")
    // const sort2 = str2Arr.sort().join("")
    // console.log(sort1)
    // console.log(sort2)
    // if(sort1===sort2)return true
}

// テスト用
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));  // false
console.log(isAnagram("triangle", "integral")); // true
console.log(isAnagram("aabb", "bbaa")); // true
console.log(isAnagram("abc", "abcc")); // false
console.log(isAnagram("", "")); // true

// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
