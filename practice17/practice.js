// 1から100までの数字について、以下のルールに従って出力するプログラムを作成してください。

// 数字が3の倍数の場合は、"Fizz"と出力します。
// 数字が5の倍数の場合は、"Buzz"と出力します。
// 数字が3の倍数かつ5の倍数の場合は、"FizzBuzz"と出力します。

for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
