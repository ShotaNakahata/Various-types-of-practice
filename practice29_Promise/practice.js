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
// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.7 ? resolve("User data") : reject(new Error("Error fetching user data"));
//         }, 1000);
//     });
// }

// function fetchOrderData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.7 ? resolve("Order data") : reject(new Error("Error fetching order data"));
//         }, 1500);
//     });
// }

// function processUserData(data) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`Processed ${data}`);
//         }, 500);
//     });
// }

// function processOrderData(data) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`Processed ${data}`);
//         }, 500);
//     });
// }

// 非同期処理を実装してください。
// Promise.all([fetchUserData(),fetchOrderData()])
// .then(results=>{
//     return Promise.all(
//         [processUserData(results[0]),
//         processOrderData(results[1])])
// })
// .then(processedResult=>{
//     processedResult.forEach(result=>{
//         console.log(result)
//     })
// })
// .catch(error=>{
//     console.error(error.message)
// })
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 13: 逐次的な非同期処理と条件分岐
// 目的: 非同期処理を複数段階に分けて実行し、各段階の結果に応じて次の処理を制御する方法を学ぶ。

// 課題
// 以下の非同期関数 loadUserProfile, loadUserSettings, saveUserPreferences を使って、
// 以下のような処理を実装してください。

// loadUserProfile() を実行し、ユーザープロファイルを取得します。
// loadUserProfile() が成功した場合に loadUserSettings() を実行し、ユーザー設定を取得します。
// loadUserSettings() が成功した場合に saveUserPreferences() を実行し、
// ユーザープロファイルと設定を基にユーザーの設定を保存します。
// いずれかの非同期処理が失敗した場合は、その時点でエラーメッセージを console.error() で出力し、処理を中断します。
// function loadUserProfile() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.8 ? resolve("User profile data") : reject(new Error("Failed to load user profile"));
//         }, 1000);
//     });
// }

// function loadUserSettings() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.8 ? resolve("User settings data") : reject(new Error("Failed to load user settings"));
//         }, 1000);
//     });
// }

// function saveUserPreferences(profile, settings) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`Preferences saved for ${profile} with ${settings}`);
//         }, 1000);
//     });
// }

// 非同期処理を逐次実行し、条件に応じた処理を実装してください。
// loadUserProfile()
// .then(profile=>{
//     console.log(profile)
//     return loadUserSettings().then(setting=>{
//         console.log(setting);
//         return {profile,setting}
//     })
// })
// .then(({profile,setting})=>{
//     return saveUserPreferences(profile,setting)
// })
// .then(result=>{
//     console.log(result);
// })
// .catch(error=>{
//     console.error(error.message)
// })
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 課題
// 以下の非同期関数 checkUserStatus, loadDashboard, redirectToLogin を使用して、条件に基づいた処理を実装してください。

// checkUserStatus() を実行してユーザーのログイン状態を確認します。
// checkUserStatus() の結果が "Logged In" なら、loadDashboard() を実行してダッシュボードをロードし、
// その結果を console.log() に出力します。
// checkUserStatus() の結果が "Logged Out" なら、redirectToLogin() を実行してログインページにリダイレクトし、
// その結果を console.log() に出力します。
// checkUserStatus() が失敗した場合は、エラーメッセージを console.error() で出力し、処理を中断します。
// function checkUserStatus() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const status = Math.random() < 0.5 ? "Logged In" : "Logged Out";
//             Math.random() < 0.9 ? resolve(status) : reject(new Error("Failed to check user status"));
//         }, 1000);
//     });
// }

// function loadDashboard() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Dashboard loaded successfully");
//         }, 1000);
//     });
// }

// function redirectToLogin() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Redirected to login page");
//         }, 500);
//     });
// }

// 条件に基づいた非同期処理を実装してください。
// checkUserStatus()
// .then(result=>{
//     console.log(result)
//     if(result==="Logged In"){
//         return loadDashboard();
//     }else{
//         return redirectToLogin();
//     }
// })
// .then(result=>{
//     console.log(result);
// })
// .catch(error=>{
//     console.error(error.message)
// })
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 15: 条件付き非同期処理の組み合わせ
// 目的: 複数の非同期処理の結果を受け取り、条件に基づいて追加の非同期処理を行う方法を学ぶ。

// 課題
// 以下の非同期関数 fetchDataA, fetchDataB, handleSuccess, handleFailure を使用して、
// 以下の条件で処理を実装してください。

// fetchDataA() と fetchDataB() を同時に実行し、両方の結果を取得します。
// 両方の Promise が成功した場合は、handleSuccess() を実行し、その結果を console.log() に出力します。
// いずれかの Promise が失敗した場合は、handleFailure() を実行し、その結果を console.log() に出力します。
// 各 Promise の状態も console.log() で出力してください。
// function fetchDataA() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.7 ? resolve("Data A") : reject(new Error("Error in fetchDataA"));
//         }, 1000);
//     });
// }

// function fetchDataB() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.7 ? resolve("Data B") : reject(new Error("Error in fetchDataB"));
//         }, 1500);
//     });
// }

// function handleSuccess() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Success handler executed");
//         }, 500);
//     });
// }

// function handleFailure() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Failure handler executed");
//         }, 500);
//     });
// }

// 条件に基づいた非同期処理を実装してください。
// Promise.all([fetchDataA(),fetchDataB()])
// .then(result=>{
//     console.log(result)
//     return handleSuccess()
// })
// .then(result=>{
//     console.log(result)
//     return null
// })
// .catch(error=>{
//     console.error(error.message)
//     return handleFailure();
// })
// .then(result=>{
//     if(result!==null){
//         console.log(result)
//     }
// })
// Promise.allSettled([fetchDataA(),fetchDataB()])
// .then(results=>{
//     results.forEach((result,index)=>{
//         if(result.status==="fulfilled"){
//             console.log(`Task ${index+1} fulfilled, value:${result.value}`)
//         }else{
//             console.log(`Task ${index+1} rejected, reason:${result.reason.message}`)
//         }
//     })
//     const allfullfilled = results.every(result=>result.status==="fulfilled");
//     if(allfullfilled){
//         return handleSuccess();
//     }else{
//         return handleFailure();
//     }
// })
// .then(result=>{
//     console.log(result)
// })
// .catch(error=>{
//     console.error(error.message)
// })
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 16: 最初に完了した非同期処理の結果を取得
// 目的: 複数の非同期処理を同時に実行し、その中で最初に完了した Promise の結果を使用する方法を学ぶ。

// 課題
// 以下の非同期関数 task1, task2, task3 を使用して、以下のような条件で処理を実装してください。

// task1(), task2(), task3() を同時に実行し、一番早く完了した Promise の結果を取得します。
// 一番早く完了したタスクが成功 (fulfilled) した場合、その結果を console.log() で出力してください。
// 一番早く完了したタスクが失敗 (rejected) した場合、そのエラーメッセージを console.error() で出力してください。
// function task1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.7 ? resolve("Task 1 completed") : reject(new Error("Task 1 failed"));
//         }, Math.random() * 3000);
//     });
// }

// function task2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.7 ? resolve("Task 2 completed") : reject(new Error("Task 2 failed"));
//         }, Math.random() * 3000);
//     });
// }

// function task3() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.7 ? resolve("Task 3 completed") : reject(new Error("Task 3 failed"));
//         }, Math.random() * 3000);
//     });
// }

// // 最初に完了したタスクの結果を取得する処理を実装してください。
// Promise.race([task1(),task2(),task3()])
// .then(result=>{
//     console.log(result)
// })
// .catch(error=>{
//     console.error(error.message)
// })
// // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 17: 複数の非同期処理の結果を集計して条件分岐
// 目的: 非同期処理で複数の Promise の結果を取得し、それに基づいて次の処理を行う方法を学ぶ。

// 課題
// 以下の非同期関数 getDataFromSource1, getDataFromSource2, 
// getDataFromSource3 を使用して、以下の条件に従って処理を実装してください。

// 3 つの Promise を同時に実行し、全ての結果を受け取ります。
// 3 つの Promise の中で fulfilled（成功）した結果を集め、その内容を console.log() で出力します。
// もし全てが rejected（失敗）だった場合、console.error() で「All promises failed」と出力してください。
// function getDataFromSource1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.5 ? resolve("Data from source 1") : reject(new Error("Error from source 1"));
//         }, 1000);
//     });
// }

// function getDataFromSource2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.5 ? resolve("Data from source 2") : reject(new Error("Error from source 2"));
//         }, 1500);
//     });
// }

// function getDataFromSource3() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.5 ? resolve("Data from source 3") : reject(new Error("Error from source 3"));
//         }, 2000);
//     });
// }

// // 複数の非同期処理の結果を集計して条件分岐を実装してください。
// Promise.allSettled([getDataFromSource1(),getDataFromSource2(),getDataFromSource3()])
// .then(results=>{
//     console.log(results)
//     const fullfilleds = results.filter(result=>result.status==="fulfilled").map(result=>result.value)
//     const faileds = results.filter(result=>result.status==="rejected");
//     if(faileds.length===results.length){
//         console.error("All promises failed")
//     }else{
//         fullfilleds.forEach(value=>console.log(value))
//     }
// })
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 18: 非同期処理のフィルタリングと条件分岐
// 目的: 複数の非同期処理の結果から特定の条件を満たすデータを抽出し、条件に応じて異なる処理を行う方法を学ぶ。

// 課題
// 以下の非同期関数 fetchData1, fetchData2, fetchData3 を使用して、以下の条件に従って処理を実装してください。

// 3 つの Promise を同時に実行し、その結果を受け取ります。
// 受け取った結果のうち、特定の文字列 "Important" を含む結果を console.log() で出力します。
// "Important" を含む結果が一つもなかった場合、「No important data found」と console.error() で出力してください。
// function fetchData1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.7 ? resolve("Normal data 1") : resolve("Important data 1");
//         }, 1000);
//     });
// }

// function fetchData2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.7 ? resolve("Normal data 2") : resolve("Important data 2");
//         }, 1500);
//     });
// }

// function fetchData3() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.7 ? resolve("Normal data 3") : resolve("Important data 3");
//         }, 2000);
//     });
// }

// // 非同期処理を実装してください。
// Promise.allSettled([fetchData1(), fetchData2(), fetchData3()])
//     .then(results => {
//         console.log(results)
//         const ImportantData = results.filter(result =>
//             result.status === "fulfilled" && result.value.includes("Important"))
//             .map(result => result.value)
//         if (ImportantData.length > 0) {
//             console.log(ImportantData)
//         } else {
//             console.error("No important data found")
//         }
//     })
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 19: 非同期処理の集計と統計情報の出力
// 目的: 複数の非同期処理の結果を集計し、統計情報を出力する方法を学ぶ。

// 課題
// 以下の非同期関数 getSalesData1, getSalesData2, getSalesData3 を使用して、
// 各データから合計売上を計算し、その結果を出力してください。

// 3 つの Promise を同時に実行し、すべての結果を受け取ります。
// 各 Promise が resolve された場合、その売上データを集計して合計を出力します。
// いずれかの Promise が rejected された場合は、そのエラーメッセージを console.error() で出力し、
// 集計を中止してください。
// function getSalesData1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.8 ? resolve(100) : reject(new Error("Error fetching sales data 1"));
//         }, 1000);
//     });
// }

// function getSalesData2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.8 ? resolve(200) : reject(new Error("Error fetching sales data 2"));
//         }, 1500);
//     });
// }

// function getSalesData3() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.8 ? resolve(300) : reject(new Error("Error fetching sales data 3"));
//         }, 2000);
//     });
// }

// // 非同期処理を実装してください。
// Promise.allSettled([getSalesData1(),getSalesData2(),getSalesData3()])
// .then(results=>{
//     console.log(results);
//     const resoleves = results.filter(result=>result.status==="fulfilled").map(result=>result.value);
//     const rejects = results.filter(result=>result.status==="rejected").map(result=>result.reason.message);
//     if(resoleves.length===results.length){
//         const sumPrice=resoleves.reduce((sum,price)=>{
//             sum+=price
//             return sum
//         },0)
//         console.log("sumPrice: ",sumPrice)
//     }else{
//         console.error("One or more promises failed:");
//         rejects.forEach((reject,index)=>{
//             console.error(`task ${index+1} is rejected reason : ${reject}`)
//         })
//     }
// })
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 20: 非同期データの収集と統合処理
// 目的: 複数の非同期処理を行い、その結果を収集して統合的に処理を行う方法を学ぶ。

// 課題
// 以下の非同期関数 getUserInfo, getUserOrders, getUserNotifications を使用して、
// ユーザー情報、注文履歴、通知を同時に取得し、全てのデータを統合して1つのオブジェクトとして出力してください。

// getUserInfo(), getUserOrders(), getUserNotifications() を同時に実行し、全ての結果を受け取ります。
// すべての Promise が成功した場合、各データを console.log() で表示し、全てのデータをまとめたオブジェクトを出力してください。
// いずれかの Promise が失敗した場合は、そのエラーメッセージを console.error() で出力し、処理を中止してください。
// function getUserInfo() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.8 ? resolve({ name: "John Doe", age: 30 }) : reject(new Error("Failed to get user info"));
//         }, 1000);
//     });
// }

// function getUserOrders() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.8 ? resolve(["Order1", "Order2", "Order3"]) : reject(new Error("Failed to get user orders"));
//         }, 1500);
//     });
// }

// function getUserNotifications() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.8 ? resolve(["Notification1", "Notification2"]) : reject(new Error("Failed to get user notifications"));
//         }, 2000);
//     });
// }

// // 非同期処理を実装してください。
// Promise.allSettled([getUserInfo(), getUserOrders(), getUserNotifications()])
//     .then(results => {
//         console.log(results); // デバッグ用に全ての `Promise` の結果を出力

//         const fulfilledResults = {
//             userInfo: results[0].status === "fulfilled" ? results[0].value : null,
//             userOrders: results[1].status === "fulfilled" ? results[1].value : null,
//             userNotifications: results[2].status === "fulfilled" ? results[2].value : null,
//         };

//         const errors = results
//             .filter(result => result.status === "rejected")
//             .map(result => result.reason.message);

//         if (errors.length === 0) {
//             console.log(fulfilledResults);
//         } else {
//             errors.forEach(error => console.error(error));
//         }
//     });
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 21: 非同期処理のリトライ機能
// 目的: 非同期処理でエラーが発生した際に、再試行を行う方法を学ぶ。

// 課題
// 以下の非同期関数 fetchDataWithPotentialError を使用して、非同期処理を実行し、
// エラーが発生した場合に最大3回まで再試行する処理を実装してください。

// fetchDataWithPotentialError() を実行します。
// もしエラーが発生した場合、合計で最大3回まで再試行を行います。
// 3回目の試行でも失敗した場合は、console.error() で「Failed after 3 attempts」と出力してください。
// 成功した場合は、その結果を console.log() で出力してください。
// function fetchDataWithPotentialError() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.2 ? resolve("Data fetched successfully") : reject(new Error("Fetch failed"));
//         }, 1000);
//     });
// }

// // リトライ機能を実装してください。
// function retryAsyncOperation(asyncFunc, maxAttempt) {
//     let attempt = 1;
//     function execute() {
//         return asyncFunc()
//             .then(result => {
//                 console.log(result);
//                 return result;
//             })
//             .catch(error => {
//                 if (attempt < maxAttempt){
//                     console.warn(`Attempt ${attempt} failed. Retrying...`)
//                     attempt++
//                     return execute();
//                 }else{
//                     console.log("Failed after 3 attempts")
//                     throw error;
//                 }
//         })
//     }
//     return execute();
// }

// retryAsyncOperation(fetchDataWithPotentialError, 3)
// .then(result=>{
//     console.log("Final success:", result);
// })
// .catch(error=>{
//     console.error(error.message);
// })
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 22: 条件付き非同期処理の連携
// 目的: 複数の非同期処理を実行し、その結果に基づいて次の非同期処理を条件付きで行う方法を学ぶ。

// 課題
// 以下の非同期関数 checkUserCredentials, fetchUserData, fetchAdditionalDetails を使用して、
// 以下のような条件付き非同期処理を実装してください。

// checkUserCredentials() を実行し、ユーザーの認証を確認します。
// 認証が成功した場合、fetchUserData() を実行してユーザーデータを取得し、console.log() で出力してください。
// fetchUserData() が成功した場合、さらに fetchAdditionalDetails() を実行し、
// その結果を console.log() で出力してください。
// いずれかの非同期処理が失敗した場合、そのエラーメッセージを console.error() で出力し、処理を中止してください。
// function checkUserCredentials() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.8 ? resolve("User authenticated") : reject(new Error("User authentication failed"));
//         }, 1000);
//     });
// }

// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.8 ? resolve({ id: 1, name: "John Doe" }) : reject(new Error("Failed to fetch user data"));
//         }, 1000);
//     });
// }

// function fetchAdditionalDetails() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.8 ? resolve({ details: "Additional user details" }) : reject(new Error("Failed to fetch additional details"));
//         }, 1000);
//     });
// }

// // 条件付き非同期処理を実装してください。
// checkUserCredentials()
// .then(result=>{
//     console.log(result);
//     return fetchUserData();
// })
// .then(result=>{
//     console.log(result);
//     return fetchAdditionalDetails();
// })
// .then(result=>{
//     console.log(result);
// })
// .catch(error=>{
//     console.error(error.message);
// })
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 23: 再帰的リトライと条件付き非同期処理
// 目的: 複数回の再試行を含む非同期処理の実装を学び、条件に応じて次の処理を行う方法を理解する。

// 課題
// 以下の非同期関数 fetchData, processData を使用して、データを取得し、
// 失敗した場合は最大3回まで再試行を行い、成功した場合はそのデータを処理する流れを実装してください。

// fetchData() を実行し、成功すればデータを processData() に渡して処理を行い、結果を console.log() で出力します。
// fetchData() が失敗した場合、最大3回まで再試行します。
// 3回目の試行でも fetchData() が失敗した場合は、エラーメッセージを console.error() で出力し、処理を中止してください。
// processData() が失敗した場合も console.error() でそのエラーメッセージを出力し、処理を中止してください。
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.5 ? resolve("Fetched data") : reject(new Error("Fetch failed"));
//         }, 1000);
//     });
// }

// function processData(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.7 ? resolve(`Processed ${data}`) : reject(new Error("Processing failed"));
//         }, 500);
//     });
// }

// // 再帰的リトライを含めた非同期処理を実装してください。
// function retryAsyncOperation(asyncFunc1,asyncFunc2, maxAttempt) {
//     let attempt = 1
//     function execute() {
//         return asyncFunc1()
//             .then(result=>{
//                 console.log("asyncFunc1",result)
//                 return asyncFunc2(result)
//                 .then(result=>{
//                     console.log("asyncFunc2",result)
//                     return result
//                 })
//             })
//             .catch(error=>{
//                 console.error(error.message);
//                 if(attempt>=maxAttempt){
//                     console.log(`attemt is ${attempt}`)
//                     throw error;
//                 }else{
//                     console.log(`attemt is ${attempt}`)
//                     attempt++
//                     return execute()
//                 }
//             })
//     }
//     return execute();
// }
// retryAsyncOperation(fetchData,processData, 3)
// .then(result=>{
//     console.log(result)
// })
// .catch(error=>{
//     console.error(error.message);
// })
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 24: 再帰的リトライとエラーログの管理
// 目的: 再帰的リトライを行い、各試行のエラーログを保持し、最終的に出力する方法を学ぶ。

// 課題
// 以下の非同期関数 attemptAsyncOperation を使用して、最大3回までリトライし、
// 試行ごとのエラーをログとして保持し、すべての試行が失敗した場合にエラーログを出力する処理を実装してください。

// attemptAsyncOperation() を実行します。
// 失敗した場合、エラーメッセージをリストに追加し、最大3回まで再試行します。
// 3回目の試行でも失敗した場合は、保持していたすべてのエラーログを console.error() で出力し、
// 「Failed after 3 attempts」と出力します。
// 成功した場合は、その結果を console.log() で出力してください。
// function attemptAsyncOperation() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.1 ? resolve("Operation succeeded") : reject(new Error("Operation failed"));
//         }, 1000);
//     });
// }

// // 再帰的リトライとエラーログの管理を実装してください。
// function retryAsyncOperation(asyncFunc, maxAttempt) {
//     let attempt = 1;
//     let errorbox = [];
//     function excute() {
//         return asyncFunc()
//             .then(result => {
//                 console.log(`Attempt ${attempt} succeeded`);
//                 return result
//             })
//             .catch(error => {
//                 console.warn(`Attempt ${attempt} failed: ${error.message}`);
//                 errorbox.push(`Attempt ${attempt}: ${error.message}`);
//                 attempt++;
//                 if (attempt < maxAttempt) {
//                     return excute();
//                 } else {
//                     console.error("Failed after maximum attempts");
//                     errorbox.push(error)
//                     const finalError = new Error("Failed after 3 attempts")
//                     finalError.log = errorbox
//                     return Promise.reject(finalError);
//                 }
//             })
//     }
//     return excute()
// }


// retryAsyncOperation(attemptAsyncOperation, 3)
//     .then(result => {
//         console.log("Final result:", result);
//     })
//     .catch(error => {
//         console.error("Error:", error.message);
//         if (error.logs) {
//             console.error("Full error log:\n" + error.logs.join("\n"));
//         }
//     });
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 25: 条件付き非同期処理と結果の集約
// 目的: 非同期処理を組み合わせて条件に応じた結果を処理し、結果を集約して表示する方法を学ぶ。

// 課題
// 以下の非同期関数 fetchProductDetails, fetchProductReviews, fetchProductStock を使用して、
// 商品の詳細、レビュー、在庫情報を取得し、結果を集約して出力するコードを実装してください。

// fetchProductDetails()、fetchProductReviews()、fetchProductStock() を並列で実行して結果を集めます。
// すべての処理が成功した場合、結果をまとめて次の形式で console.log() に出力します:
// function fetchProductDetails() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.9 ? resolve({ name: "Product A", price: 100 }) : reject(new Error("Failed to fetch product details"));
//         }, 1000);
//     });
// }

// function fetchProductReviews() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.9 ? resolve(["Review 1", "Review 2"]) : reject(new Error("Failed to fetch product reviews"));
//         }, 1500);
//     });
// }

// function fetchProductStock() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.9 ? resolve({ stock: 20 }) : reject(new Error("Failed to fetch product stock"));
//         }, 1200);
//     });
// }

// // 条件付き非同期処理を実装してください。
// Promise.all([fetchProductDetails(), fetchProductReviews(), fetchProductStock()])
// .then(results=>{
//     console.log(results);
//     const Details = results[0]
//     const Review = results[1]
//     const Stock = results[2]
//     console.log({Details,Review,Stock})

// })
// .catch(error=>{
//     console.error(error.message)
// })
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題 26: Promise.any() を使用した非同期処理
// 目的: 複数の非同期処理の中で、最初に成功したものを取得し、すべて失敗した場合はエラーを処理する方法を学ぶ。

// 課題
// 以下の非同期関数 taskA, taskB, taskC を使用して、Promise.any() を使って最初に成功した結果を取得し、
// 結果を console.log() で出力してください。すべての処理が失敗した場合は、
// AggregateError のメッセージを console.error() で出力してください。
// function taskA() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.1 ? resolve("Result from taskA") : reject(new Error("Error in taskA"));
//         }, 1000);
//     });
// }

// function taskB() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.1 ? resolve("Result from taskB") : reject(new Error("Error in taskB"));
//         }, 1500);
//     });
// }

// function taskC() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.1 ? resolve("Result from taskC") : reject(new Error("Error in taskC"));
//         }, 1200);
//     });
// }

// // `Promise.any()` を使った非同期処理を実装してください。
// Promise.any([taskA(),taskB(),taskC()])
// .then(result=>{
//     console.log(result)
// })
// .catch(error=>{
//     console.error(error.message)
// })
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー