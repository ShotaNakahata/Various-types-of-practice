// 問題 1: 基本的な Promise の使い方
// 目的: Promise の基本的な構造を理解し、非同期処理を扱うための基礎を学ぶ。

// 課題
// 以下のコードを完成させてください。delayedHello 関数は、2 秒後に "Hello, World!" 
// というメッセージを console.log に出力します。Promise を使用して非同期処理を実装してください。
// function delayedHello() {
//     // Promise を作成し、2 秒後に "Hello, World!" を出力するように実装してください。
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Hello, World!")
//         }, 2000);
//     })
// }

// delayedHello().then(message=>{
//     console.log(message)
// });
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 2: Promise チェーン
// 目的: Promise チェーンの基本的な使い方を学び、非同期処理の順序を理解する。

// 課題
// 以下の関数 fetchData は、2 秒後にデータを返す Promise を返します。
// Promise チェーンを使用して、この関数を呼び出し、2 回連続でデータを取得し、その結果を出力してください。
// function fetchData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Data received")
//         }, 2000);
//     })
// }
// fetchData().then(result=>{
//     console.log(result);
//     return fetchData()
// }).then(result=>{
//     console.log(result)
// })

// fetchData を2回呼び出して、それぞれの結果を出力するPromiseチェーンを作成してください。
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 課題
// 以下に 3 つの非同期関数 fetchFirst, fetchSecond, fetchThird があります。
// それぞれが 1 秒、2 秒、3 秒の遅延の後に異なるデータを返します。これらを順番に実行し、
// 全ての結果を一つの配列にまとめて最後に console.log() で出力してください。
// function fetchFirst(){
//     return new Promise((resolve,rejecet)=>{
//         setTimeout(() => {
//             resolve("First result")
//         }, 1000);
//     })
// }
// function fetchSecond(){
//     return new Promise((resolve,rejecet)=>{
//         setTimeout(() => {
//             resolve("Second result")
//         }, 2000);
//     })
// }
// function fetchThird(){
//     return new Promise((resolve,rejecet)=>{
//         setTimeout(() => {
//             resolve("Third result")
//         }, 3000);
//     })
// }
// let output = []
// fetchFirst().then(result=>{
//     output.push(result)
//     return fetchSecond()
// }).then(result=>{
//     output.push(result)
//     return fetchThird()
// }).then(result=>{
//     output.push(result)
//     console.log(output)
// })
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 4: 複数の Promise とエラーハンドリング
// 目的: 複数の非同期処理を並列で実行し、エラーが発生した場合のハンドリングを学ぶ。

// 課題
// 以下に複数のデータをフェッチする関数 fetchData1, fetchData2, fetchData3 があります。
// それぞれの関数がランダムな遅延時間後にデータを返します。
// これらを Promise.all() を使って並列で実行し、全ての結果をまとめて console.log() で出力してください。
// ただし、いずれかの Promise でエラーが発生した場合、catch() を使ってエラーメッセージを出力してください。
// function firstFetch() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data from fetchData1");
//         }, Math.random() * 2000); // 修正: Math.random() を使用
//     });
// }

// function secondFetch() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.5) { // 修正: Math.random() > 0.5
//                 reject(new Error("Error in fetchData2"));
//             } else {
//                 resolve("Data from fetchData2");
//             }
//         }, Math.random() * 2000); // 修正: Math.random() を使用
//     });
// }

// function thirdFetch() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data from fetchData3");
//         }, Math.random() * 2000); // 修正: Math.random() を使用
//     });
// }

// Promise.all([firstFetch(), secondFetch(), thirdFetch()])
//     .then(result => {
//         console.log("All results:", result);
//     })
//     .catch(error => {
//         console.error("An error occurred:", error.message);
//     })
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 5: 複数の Promise と部分的なエラーハンドリング
// 目的: 複数の非同期処理を並列で実行し、一部の処理が失敗しても、成功した処理の結果を取得する方法を学ぶ。

// 課題
// 複数の非同期関数 fetchData1, fetchData2, fetchData3 を用意します。これらの関数を並列で実行し、
// いずれかが失敗しても、他の成功した結果をまとめて取得して出力してください。
// 失敗した場合でも、エラーメッセージを出力するようにしてください。

// function fetchData1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//         resolve("Data from fetchData1")
//         }, Math.random()*2000);
//     })
// }
// function fetchData2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//         if(Math.random()<0.5){
//             reject(new Error("Error in fetchData2"))
//         }else{
//             resolve("Data from fetchData2")
//         }
//         }, Math.random()*2000);
//     })
// }
// function fetchData3(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//         if(Math.random()<0.5){
//             reject(new Error("Error in fetchData3"))
//         }else{
//             resolve("Data from fetchData3")
//         }
//         }, Math.random()*2000);
//     })
// }

// Promise.allSettled([fetchData1(),fetchData2(),fetchData3()])
// .then(results=>{
//     results.forEach((result,index)=>{
//         if(result.status==='fulfilled'){
//             console.log(`Promise${index+1}: succeeded with: value ${result.value}`)
//         }else if(result.status==='rejected'){
//             console.log(`Promise${index+1}: failed with: reason ${result.reason.message}`)
//         }
//     })
// })
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 6: 順番に非同期処理を実行して結果を収集
// 目的: 複数の非同期処理を順番に実行し、その結果を一つの配列にまとめ、
// 最終的に全ての結果を console.log() で出力する方法を学ぶ。

// 課題
// 以下の 3 つの非同期関数を使用して、それらを順番に実行し、
// 各結果を一つの配列に集めて最後に出力してください。
// function task1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Result from task1")
//         }, 1000);
//     })
// }
// function task2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Result from task2");
//         }, 2000);
//     });
// }

// function task3() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Result from task3");
//         }, 1500);
//     });
// }
// task1()
//     .then(result1 => {
//         console.log(result1);
//         return task2()
//     })
//     .then(result2 => {
//         console.log(result2);
//         return task3();
//     })
//     .then(result3 => {
//         console.log(result3)
//         console.log("All results: [Result from task1, Result from task2, Result from task3]");
//     }).catch(error => {
//         console.error("An error occurred:", error)
//     });

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 7: シーケンシャルな非同期処理とエラーハンドリング
// 目的: 複数の非同期処理を順番に実行し、各処理でエラーが発生した場合のハンドリング方法を学ぶ。

// 課題
// 3 つの非同期関数 task1, task2, task3 を順番に実行し、それぞれの結果を console.log() に出力してください。
// ただし、各タスクでエラーが発生する可能性があります。エラーが発生した場合、
// その場でエラーメッセージを表示し、以降のタスクは実行されないようにしてください。
// function task1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() < 0.3) {
//                 reject(new Error("Error in task1"));
//             } else {
//                 resolve("Result from task1");
//             }
//         }, 1000);
//     });
// }

// function task2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() < 0.3) {
//                 reject(new Error("Error in task2"));
//             } else {
//                 resolve("Result from task2");
//             }
//         }, 2000);
//     });
// }

// function task3() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() < 0.3) {
//                 reject(new Error("Error in task3"));
//             } else {
//                 resolve("Result from task3");
//             }
//         }, 1500);
//     });
// }
// // task1, task2, task3 を順番に実行し、エラーハンドリングを実装してください。
// task1()
// .then(result1=>{
//     console.log(result1)
//     return task2();
// }).then(result2=>{
//     console.log(result2)
//     return task3();
// }).then(result3=>{
//     console.log(result3)
// })
// .catch(error=>{
//     console.error(error.message)
// })
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 8: 条件付き非同期処理
// 目的: 複数の非同期処理を順番に実行し、特定の条件に基づいて次の処理を制御する方法を学ぶ。

// 課題
// 以下の非同期関数 task1, task2, task3 を使用して、task1 の結果に応じて次の処理を実行してください。
// task1 が成功し、結果が "Result from task1" であれば、task2 を実行してください。
// それ以外の場合は、task3 を実行してください。それぞれの結果を console.log() に出力し、
// エラーハンドリングも追加してください。
// function task1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() < 0.5) {
//                 resolve("Result from task1");
//             } else {
//                 reject(new Error("Error in task1"));
//             }
//         }, 1000);
//     });
// }

// function task2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Result from task2");
//         }, 2000);
//     });
// }

// function task3() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Result from task3");
//         }, 1500);
//     });
// }

// // task1 の結果に応じて、task2 または task3 を実行し、各結果を出力してください。
// task1()
// .then(result1=>{
//     console.log(result1);
//     if(result1==="Result from task1"){
//         return task2();
//     }else{
//         return task3();
//     }
// })
// .then(result=>{
//     console.log(result)
// })
// .catch(error=>{
//     console.log(error.message)
//     return task3().then(result3=>{
//         console.log(result3)
//     })
// })
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 9: 条件分岐付き非同期処理
// 目的: 非同期処理を順番に実行し、それぞれの結果に応じて次に実行するタスクを動的に変更する方法を学ぶ。

// 課題
// 以下の非同期関数 task1, task2, task3, task4 を使用して、次のような条件付きで処理を実行してください。

// task1 を実行し、その結果が "Result from task1" であれば task2 を実行し、次に task3 を実行する。
// task1 の結果が "Special case" であれば、task4 を実行して処理を終了する。
// task1 がエラーの場合は、エラーメッセージを出力して終了する。

// function task1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const results = ["Result from task1", "Special case", "Another result"];
//             const result = results[Math.floor(Math.random() * results.length)]
//             if (result === "Another result") {
//                 reject(new Error("Error in task1"))
//             } else {
//                 resolve(result);
//             }
//         }, 1000);
//     })
// }
// function task2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Result from task2");
//         }, 2000);
//     });
// }

// function task3() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Result from task3");
//         }, 1500);
//     });
// }

// function task4() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Result from task4");
//         }, 1000);
//     });
// }
// task1()
// .then(result1=>{
//     if(result1==="Result from task1"){
//         console.log("Result from task1")
//         return task2().then(result2=>{
//             console.log(result2)
//             return task3().then(result3=>{
//                 console.log(result3)
//                 return
//             })
//         })
//     }else{
//         console.log("Special case")
//         return task4();
//     }
// })
// .then(result4=>{
//     console.log(result4)
// })
// .catch(error=>{
//     console.error(error.message)
// })
// function task1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const results = ["Result from task1", "Special case", "Another result"];
//             const result = results[Math.floor(Math.random() * results.length)];
//             if (result === "Another result") {
//                 reject(new Error("Error in task1"));
//             } else {
//                 resolve(result);
//             }
//         }, 1000);
//     });
// }

// function task2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Result from task2");
//         }, 2000);
//     });
// }

// function task3() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Result from task3");
//         }, 1500);
//     });
// }

// function task4() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Result from task4");
//         }, 1000);
//     });
// }

// task1()
// .then(result1=>{
//     console.log(result1)
//     if(result1==="Result from task1"){
//         return task2()
//     }else{
//         return task4();
//     }
// })
// .then(result=>{
//     if(result==="Result from task2"){
//         console.log(result);
//         return task3();
//     }else{
//         console.log(result)
//         return null;
//     }
// })
// .then(result=>{
//     if(result!==null){
//         console.log(result)
//     }
// }).catch(error=>{
//     console.error(error.message)
// })
// 条件分岐に基づいてタスクを実行し、各結果を出力するコードを書いてください。

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 10: 並列処理と条件付きのシーケンシャル実行
// 目的: 並列に非同期処理を実行し、その結果に基づいて条件付きで次の処理をシーケンシャルに実行する方法を学ぶ。

// 課題
// 以下の非同期関数 taskA, taskB, taskC を用意しました。これらの関数を使用して、
// 次のような条件付きの処理を実装してください。

// taskA と taskB を 同時に実行 します。
// 両方のタスクが完了した後に、どちらか一方でも "Success" の結果を返した場合は、taskC を実行します。
// 両方のタスクが "Failure" の結果を返した場合は、taskC は実行せず、エラーメッセージを出力して終了します。
// function taskA() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const result = Math.random() < 0.5 ? "Success" : "Failure";
//             resolve(result);
//         }, 1000);
//     });
// }

// function taskB() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const result = Math.random() < 0.5 ? "Success" : "Failure";
//             resolve(result);
//         }, 1500);
//     });
// }

// function taskC() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Task C completed");
//         }, 2000);
//     });
// }

// // 並列処理と条件分岐を組み合わせて、指定された条件通りにタスクを実行するコードを書いてください。
// Promise.allSettled([taskA(),taskB()])
// .then(results=>{
//     results.forEach((result,index)=>{
//         console.log(`Task ${index+1} result: `,result);
//     })
//     const anySuccess = results.some(result=>result.status==="fulfilled"&&result.value==="Success");
//     if(anySuccess){
//         return taskC()
//     }else{
//         throw new Error("Both tasks failed. Task C will not be executed.");
//     }
// })
// .then(result=>{
//     console.log(result);
// })
// .catch(error=>{
//     console.error(error.message);
// })
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 11: 非同期タスクの結果を集約し、条件に応じた処理を行う
// 目的: 複数の非同期処理を実行し、その結果をもとにさらに複雑な条件分岐を実装する方法を学ぶ。

// 課題
// 以下の非同期関数 fetchData1, fetchData2, fetchData3 を実行し、それぞれの結果を集約して、
// 以下の条件を満たす処理を行ってください。

// 全てのタスクが成功した場合:

// それぞれの結果を配列に格納し、console.log() で「All tasks succeeded: [結果1, 結果2, 結果3]」と出力する。
// いずれかのタスクが失敗した場合:

// エラーメッセージを console.error() で「One or more tasks failed.」と出力し、失敗したタスクの詳細を表示する。
// function fetchData1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.8 ? resolve("Data from fetchData1") : reject(new Error("Error in fetchData1"))
//         }, 1000);
//     })
// }
// function fetchData2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.8 ? resolve("Data from fetchData2") : reject(new Error("Error in fetchData2"))
//         }, 1500);
//     })
// }
// function fetchData3() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.8 ? resolve("Data from fetchData3") : reject(new Error("Error in fetchData3"))
//         }, 2000);
//     })
// }
// Promise.allSettled([fetchData1(), fetchData2(), fetchData3()])
//     .then(results => {
//         const successes = results.filter(result => result.status === "fulfilled").map(result => result.value);
//         const failures = results.filter(result => result.status === "failures").map(result => result.value);
//         if(failures.length>0){
//             console.log("One or more tasks failed.");
//             failures.forEach(error=>console.error(error))
//         }else{
//             console.log("All tasks succeeded:",successes)
//         }
//     })

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 12: タスク完了後の追加処理
// 目的: 複数の非同期タスクを実行し、その結果に基づいて次のステップで異なる処理を実装する方法を学ぶ。

// 課題
// 以下の非同期関数 fetchUserData, fetchOrderData, processUserData, processOrderData 
// を使用して、次のような条件で処理を実装してください。

// fetchUserData() と fetchOrderData() を並列で実行し、どちらも完了するまで待機します。
// 両方のタスクが成功した場合、それぞれの結果を processUserData() と processOrderData() 
// に渡して処理を行い、最終的な結果を console.log() に出力します。
// いずれかのタスクが失敗した場合、エラーメッセージを console.error() で出力し、処理を中断します。
function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.7 ? resolve("User data") : reject(new Error("Error fetching user data"));
        }, 1000);
    });
}

function fetchOrderData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.7 ? resolve("Order data") : reject(new Error("Error fetching order data"));
        }, 1500);
    });
}

function processUserData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Processed ${data}`);
        }, 500);
    });
}

function processOrderData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Processed ${data}`);
        }, 500);
    });
}

// 非同期処理を実装してください。
Promise.all([fetchUserData(),fetchOrderData()])
.then(results=>{
    return Promise.all(
        [processUserData(results[0]),
        processOrderData(results[1])])
})
.then(processedResult=>{
    processedResult.forEach(result=>{
        console.log(result)
    })
})
.catch(error=>{
    console.error(error.message)
})
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー