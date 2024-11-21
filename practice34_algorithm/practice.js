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
// function isAnagram(str1, str2) {
//     if (str1 === "" && str2 === "") return true;
//     if(str1.length!==str1.length) return false;
//     return str1.toLowerCase().split("").sort().join("") ===
//     str2.toLowerCase().split("").sort().join("")

//     // const str1Arr=str1.toLowerCase().split("");
//     // const str2Arr=str2.toLowerCase().split("");
//     // // console.log(str1Arr.sort())
//     // // console.log(str2Arr.sort())

//     // if (str1Arr.length !== str2Arr.length) return false;
//     // if(str1Arr.sort().join("")===str2Arr.sort().join("")){
//     //     return true
//     // }else{
//     //     return false
//     // }
//     // const sort1 = str1Arr.sort().join("")
//     // const sort2 = str2Arr.sort().join("")
//     // console.log(sort1)
//     // console.log(sort2)
//     // if(sort1===sort2)return true
// }

// // テスト用
// console.log(isAnagram("listen", "silent")); // true
// console.log(isAnagram("hello", "world"));  // false
// console.log(isAnagram("triangle", "integral")); // true
// console.log(isAnagram("aabb", "bbaa")); // true
// console.log(isAnagram("abc", "abcc")); // false
// console.log(isAnagram("", "")); // true

// -----------------------------------------------------------
// 問題 3: フィボナッチ数列のn番目を求める
// 問題文:
// フィボナッチ数列とは、次のように定義される数列です：

// 最初の2つの項はそれぞれ 0 と 1。
// それ以降の項は、直前の2つの項の和。
// 数列の例:

// コードをコピーする
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// 与えられた整数 n に対して、フィボナッチ数列の n 番目の値を返す関数を作成してください。
// （0番目を 0、1番目を 1 とします）

// 要件
// 再帰的な実装とループによる実装の両方を試してください。
// n が 0 または 1 の場合、対応する値をすぐに返してください。
// 計算量に注意してください。再帰では計算量が大きくなる場合があるため、効率化も考慮してください。
// 再帰的に実装
// function fibonacciRecursive(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
// }

// // ループを使って実装
// function fibonacciIterative(n) {
//     let a = 0;
//     let b = 1;
//     for (let i = 2; i <= n; i++) {
//         let next = a + b
//         a = b
//         b = next
//     }
//     return b
//     // let arr = []
//     // //arr = [0,1]
//     // for (let i = 0; i <= n - 1; i++) {
//     //     if(i===0||i===1){
//     //         arr.push(i)
//     //     }else{
//     //         arr.push(arr[i-2]+arr[i-1])
//     //     }

//     // }
//     // console.log(arr)
//     // return arr[n - 2] + arr[n - 1]
// }
// function fibonacciRecursiveMemo(n,memo={}){
//     if(n in memo) return memo[n]
//     if(n===0) return 0;
//     if(n===1) return 1;
//     return  fibonacciRecursiveMemo(n - 1, memo) + fibonacciRecursiveMemo(n - 2, memo);
// }
// // テスト用
// console.log(fibonacciRecursive(10)); // 出力: 55
// console.log(fibonacciIterative(10)); // 出力: 55
// console.log(fibonacciRecursiveMemo(10)); // 出力: 55

// // -----------------------------------------------------------
// function fibonacciDPArray(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     const dp = [0, 1];
//     for (let i = 2; i <= n; i++) {
//         dp[i]=dp[i-1]+dp[i-2];
//     }
//     return dp[n]
// }
// console.log(fibonacciDPArray(10)); // 出力: 55
// -----------------------------------------------------------
// 問題: 部分文字列のアナグラム検出
// 目的
// スライディングウィンドウ法を使った効率的な文字列処理を学ぶ。
// アナグラム検出の応用問題に挑戦。
// ハッシュマップや配列の操作に慣れる。
// 問題文
// 文字列 A（部分文字列の基準）と、文字列 B（検索対象）が与えられます。
// 文字列 B の中から、A と同じ文字の並び（アナグラム）を持つすべての部分文字列の開始インデックスを返してください。

// 制約
// 文字列 A と B は英小文字のみで構成されます。
// 入力例:
// A = "abc"
// B = "cbaebabacd"
// function findAnagrams(A, B) {
//     const ALength = A.length
//     // const newA = A.split("")
//     //     .sort()
//     //     .reduce((acc, element) => {
//     //         if (!acc[element]) {
//     //             acc[element] = 1;
//     //         } else {
//     //             acc[element] += 1
//     //         }
//     //         return acc
//     //     }, {})
//     const newA = A.split("").sort().join("")
//     console.log("newA : ", newA)
//     // return {newA,ALength}
//     const newB = B.split("")
//     const newBlength = newB.length
//     const forcusB = newB.slice(0, ALength).sort().join("");
//     console.log("forcusB : ", forcusB)
//     // console.log("newA === forcusB : ", newA === forcusB)
//     let output = []
//     for (let i = 0 ; i < newBlength; i++) {
//         let compareB = newB.slice(i,i+ALength).sort().join("")
//         // console.log(newB.slice(i,i+ALength))
//         console.log("newA ; ",newA," compareB : ",compareB)
//         console.log(newA===compareB)
//         if(newA===compareB){
//             output.push(i)
//         }
//     }

//     console.log("newB : ", newB)
//     console.log("newB.slice(0,ALength) : ", newB.slice(0, ALength))
//     console.log(output)
// }

// // テスト用
// findAnagrams("abc", "cbaebabacd")
// console.log(findAnagrams("abc", "cbaebabacd")); // 出力: [0, 6]
// console.log(findAnagrams("ab", "abacbabc"));    // 出力: [0, 3, 4]

// -----------------------------------------------------------
// function findAnagrams(A, B) {
//     const ALength = A.length;
//     const BLength = B.length;
//     if (ALength > BLength) return [];

//     const countA = Array(26).fill(0);
//     const countwindow = Array(26).fill(0);
//     const charCodeA = "a".charCodeAt(0)

//     for (let char of A) {
//         countA[char.charCodeAt(0) - charCodeA]++;
//     }
//     for (let i = 0; i < ALength; i++) {
//         countwindow[B.charCodeAt(i) - charCodeA]++;
//     }
//     const output = []
//     if (arraysEqual(countA, countwindow)) {
//         output.push(0)
//     }

//     for (let i = ALength; i < BLength; i++) {
//         countwindow[B.charCodeAt(i) - charCodeA]++;
//         countwindow[B.charCodeAt(i - ALength) - charCodeA]--;

//         if (arraysEqual(countA, countwindow)) {
//             output.push(i - ALength + 1)
//         }
//     }
//     return output;
// }
// function arraysEqual(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false;
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) return false;
//     }
//     return true
// }
// console.log(findAnagrams("abc", "cbaebabacd")); // 出力: [0, 6]
// console.log(findAnagrams("ab", "abacbabc"));    // 出力: [0, 3, 4]
// -----------------------------------------------------------
// function findAnagrams(A, B) {
//     const ALength = A.length;
//     const BLength = B.length;
//     if (ALength > BLength) return [];
//     const countA = Array(26).fill(0);
//     const countWindow = Array(26).fill(0);
//     const charCodeA = "a".charCodeAt(0);
//     for (let char of A) {
//         countA[char.charCodeAt(0) - charCodeA]++;
//     }
//     const output = [];
//     for (let i = 0; i < BLength; i++) {
//         countWindow[B.charCodeAt(i) - charCodeA]++;
//         if (i >= ALength) {
//             countWindow[B.charCodeAt(i - ALength) - charCodeA]--;
//         }
//         if (i >= ALength - 1 && arraysEqual(countA, countWindow)) {
//             output.push(i - ALength + 1);
//         }
//     }
//     return output
// }
// function arraysEqual(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false;
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) return false;
//     }
//     return true
// }
// console.log(findAnagrams("ab", "abacbabc"));
// -----------------------------------------------------------
// function lengthOfLongestSubstring(s) {
//     let maxLength = 0; // 最長部分文字列の長さを記録
//     let start = 0; // 現在のウィンドウの開始位置
//     const seen = new Set(); // ウィンドウ内の文字を記録

//     //s = "abcabcbb" / s.length = 8
//     for (let end = 0; end < s.length; end++) {
//         while(seen.has(s[end])){
//             seen.delete(s[start])
//             start++;
//         }
//         seen.add(s[end])
//         maxLength = Math.max(maxLength, end - start + 1);
//         // console.log(maxLength)
//     }

//     return maxLength;
// }

// // テストケース
// console.log(lengthOfLongestSubstring("abcabcbb")); // 出力: 3
// console.log(lengthOfLongestSubstring("bbbbb"));    // 出力: 1
// console.log(lengthOfLongestSubstring("pwwkew"));   // 出力: 3

// -----------------------------------------------------------
// function longestPalindrome(s) {
//     if(s.length<=1) return s;

// }
// // console.log(longestPalindrome("babad")); // 出力: "bab" または "aba"
// // console.log(longestPalindrome("cbbd"));  // 出力: "bb"
// console.log(longestPalindrome("a"));     // 出力: "a"
// -----------------------------------------------------------
// (log)
// -----------------------------------------------------------
