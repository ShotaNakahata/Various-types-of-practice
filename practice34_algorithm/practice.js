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
function reverseString(input) {
    if(input===""){
        return `""`
    }
    const splitInputArr = input.split("");
    splitInputArr.reverse();
    const JoinStr = splitInputArr.join("");
    return JoinStr

}

// テスト用
console.log(reverseString("hello")); // 出力: "olleh"
console.log(reverseString("frontend")); // 出力: "dnetnorf"
console.log(reverseString("abc 123!")); // 出力: "!321 cba"
console.log(reverseString("")); // 出力: ""

// -----------------------------------------------------------
