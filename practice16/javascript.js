for (let i = 1; i <= 100; i++) {
    let output = i;

    // 条件に応じて文字列を追加
    if (i % 3 === 0) {
        output += "a";
    }
    if (i % 5 === 0) {
        output += "b";
    }
    if (i % 15 === 0) {
        output += "c";
    }

    console.log(output);
}