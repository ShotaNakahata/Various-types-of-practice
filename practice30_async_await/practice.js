// 問題1: 基本的なasync/awaitの使用
// 非同期関数getUserを使用して、ユーザーデータを取得し、async/awaitを使用して関数内でその結果を取得し、
// ログに出力するfetchUserData関数を作成してください。

// 準備:
// getUser関数はすでに定義されている非同期関数です。
// async function getUser() {
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve({ id: 1, name: 'Alice' });
//         }, 1000);
//     })
// }
// async function fetchUser() {
//     const user = await getUser();
//     console.log(user);
// }
// fetchUser()
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題2: 複数の非同期関数を順に呼び出す
// 2つの非同期関数getUserDataとgetUserPostsがあり、ユーザー情報とそのユーザーの投稿をそれぞれ取得します。
// async/awaitを使用して、ユーザー情報を取得し、その情報を元に投稿を取得して、
// ユーザー情報と投稿を組み合わせてオブジェクトとして返すfetchUserDetails関数を作成してください。

// 準備:
// 以下の2つの非同期関数を使用してください。
// async function getUserData(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve({ id: 1, name: 'Alice' })
//         }, 1000);
//     })
// }

// async function getUserPost(userId) {
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve([
//                 { postId: 1, content: 'Hello World', userId },
//                 { postId: 2, content: 'Learning async/await', userId }
//             ])
//         }, 1000);
//     })
// }

// async function fetchUserDetails(){
//     const user = await getUserData();
//     const post = await getUserPost(user.id);
//     return {user,post}
// }
// fetchUserDetails().then(result=>{
//     console.log(result);
// })
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題3: 並行処理とPromise.all()の使用
// 複数の非同期処理を並行して実行し、それらの結果をまとめて出力する関数を作成します。
// 以下の3つの非同期関数fetchData1, fetchData2, fetchData3を並行して呼び出し、
// その結果を1つのオブジェクトとして返すfetchAllData関数を作成してください。
// async function fetchData1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Data from fetchData1');
//         }, 1000);
//     });
// }

// async function fetchData2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Data from fetchData2');
//         }, 2000);
//     });
// }

// async function fetchData3() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Data from fetchData3');
//         }, 1500);
//     });
// }

// async function fetchAllData() {
//     const [data1,data2,data3] = await Promise.all([fetchData1(), fetchData2(), fetchData3()])
//     return {data1,data2,data3}
// }

// (async()=>{
//     const result = await fetchAllData();
//     console.log(result)
// })();
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// async/awaitを使用して、複数の非同期処理を実行し、エラーハンドリングも行うコードを書いてください。3
// つの非同期関数fetchUserData, fetchPosts, fetchCommentsを並行して呼び出し、
// それらの結果をまとめてオブジェクトとして返すfetchAllDataWithHandling関数を作成します。
// なお、いずれかの関数でエラーが発生した場合は、そのエラーをキャッチして適切なエラーメッセージを出力してください。
// async function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() > 0.7 ? reject(new Error('Failed to fetch user data')) : resolve({ id: 1, name: 'Alice' });
//         }, 1000);
//     });
// }

// async function fetchPosts() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() > 0.7 ? reject(new Error('Failed to fetch posts')) : resolve(['Post 1', 'Post 2', 'Post 3']);
//         }, 1500);
//     });
// }

// async function fetchComments() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() > 0.7 ? reject(new Error('Failed to fetch comments')) : resolve(['Comment 1', 'Comment 2']);
//         }, 2000);
//     });
// }
// async function fetchAllDataWithHandling() {
//     try {
//         const [UserData, Posts, Comments] = await Promise.all([fetchUserData(), fetchPosts(), fetchComments()])
//         return { UserData, Posts, Comments }
//     } catch (error) {
//         console.error(error.message)
//         return null;
//     }
// }

// (async () => {
//     const result = await fetchAllDataWithHandling();
//     if (result) {
//         console.log(result)
//     }else{
//         console.log('Failed to fetch all data')
//     }
// })();
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題5: async/awaitとfetchを使用したAPIデータの取得
// async/awaitを使用して外部APIからデータを取得し、その結果を処理する関数を作成してください。
// 外部APIとしてJSONPlaceholderを使用します。このAPIは、テスト用のフェイクデータを提供するので、
// 簡単にAPIの呼び出しを練習できます。

// 要件:
// fetchData関数をasync関数として定義してください。
// fetchを使用して、https://jsonplaceholder.typicode.com/usersからデータを取得し、JSON形式に変換して返します。
// データ取得に失敗した場合はcatchブロックでエラーメッセージを出力してください。
// データ取得後、最初のユーザーの名前をコンソールに出力してください。
// ヒント:
// fetchはPromiseを返す関数です。awaitを使って結果を待機できます。
// レスポンスをresponse.json()でJSON形式に変換することができます。
// async function fetchData() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         // console.log(response)
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         console.log(data[0].name);
//     } catch (error) {
//         console.error('There has been a problem with your fetch operation:', error);
//     }
// }

// fetchData();
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題6: 複数のAPI呼び出しを組み合わせた非同期処理
// 複数のAPIからデータを取得し、それらを組み合わせた情報を表示する関数を作成してください。
// 外部APIとしてJSONPlaceholderを使用します。

// 要件:
// fetchUserAndPostsという名前のasync関数を作成してください。
// https://jsonplaceholder.typicode.com/users/1からユーザー情報を取得します。
// https://jsonplaceholder.typicode.com/posts?userId=1からそのユーザーの投稿一覧を取得します。
// これら2つのAPI呼び出しを並行して実行し、ユーザー情報と投稿を1つのオブジェクトにまとめて返します。
// 取得したオブジェクトをコンソールに出力してください。
// エラーハンドリングを行い、エラー発生時には適切なメッセージを出力してください。
// ヒント:
// API呼び出しを並行して行うためにPromise.all()を使用できます。
// 各fetchの結果はawaitで待機し、JSON形式にパースしてください。
// async function fetchUserAndPosts() {
//     try {
//         const [userResponse, postsResponse] =await Promise.all([
//             fetch("https://jsonplaceholder.typicode.com/users/1"),
//             fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
//         ])
//         if (!userResponse.ok || !postsResponse.ok) {
//             throw new Error("Failed to fetch user or posts");
//         }
//         const user = await userResponse.json();
//         const posts = await postsResponse.json();
//         const result = { user, posts }
//         console.log(result)
//     } catch (error) {
//         console.error(error.message);
//     }
// }
// fetchUserAndPosts();
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題7: 並行処理とエラーハンドリングを組み合わせた非同期処理
// 複数の非同期API呼び出しを組み合わせて、エラーハンドリングも適切に行う関数を作成してください。
// この問題では、外部APIから複数のデータを並行して取得し、
// 個別のAPI呼び出しでエラーが発生した場合も他のAPI呼び出しの結果を取得できるようにします。

// 要件:
// fetchUserData, fetchPostsData, fetchCommentsDataという3つの関数を作成し、それぞれ以下のURLからデータを取得します。
// ユーザーデータ: https://jsonplaceholder.typicode.com/users/1
// 投稿データ: https://jsonplaceholder.typicode.com/posts?userId=1
// コメントデータ: https://jsonplaceholder.typicode.com/comments?postId=1
// fetchAllDataSafely関数を作成し、これらの関数を並行して実行します。
// API呼び出しの1つがエラーになっても、他の呼び出しが続行されるようにします。
// 各関数の結果をまとめてオブジェクトとして返し、成功したデータだけが含まれるようにしてください。
// エラーメッセージはconsole.errorで出力してください
// async function fetchAllDataSafelyname() {
//     try {
//         const response = await Promise.allSettled([
//             fetch("https://jsonplaceholder.typicode.com/users/1"),
//             fetch("https://jsonplaceholder.typicode.com/posts?userId=1"),
//             fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
//         ])
//         const user = response[0].status === "fulfilled" ? await response[0].value.json() : null;
//         const post = response[1].status === "fulfilled" ? await response[1].value.json() : null;
//         const comment = response[2].status === "fulfilled" ? await response[2].value.json() : null;
//         return { user, post, comment }
//     } catch (error) {
//         console.error(error.message);
//     }
// }
// fetchAllDataSafelyname()
//     .then(result => {
//         console.log(result)
//     })
//     .catch(error => {
//         console.error(error.message)
//     })
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題8: 非同期関数の実行順序と待機処理
// この問題では、複数の非同期関数を順番に実行し、その結果を基に次の処理を行う練習をします。
// 複数のAPI呼び出しを順番に実行し、前の結果を使用して次のAPI呼び出しに渡してください。

// 要件:
// getUser関数を作成し、https://jsonplaceholder.typicode.com/users/1からユーザー情報を取得します。
// getUserPosts関数を作成し、
// 取得したユーザーのIDを使用してhttps://jsonplaceholder.typicode.com/posts?userId=1から投稿一覧を取得します。
// これらの関数をfetchUserData関数で順番に呼び出し、結果を1つのオブジェクトとして返してください。
// 取得したデータはコンソールに出力してください。
// 各API呼び出しでエラーハンドリングを行い、エラー時には適切なメッセージを出力してください。
// ヒント:
// awaitを使用して非同期関数の実行を順番に制御してください。
// 各関数でtry/catchを使ってエラーハンドリングを実装してください。
// async function getUser() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//         if (!response.ok) {
//             throw new Error("Failed to fetch user data");
//         }
//         const user = await response.json();
//         return user.id;
//     } catch (error) {
//         console.error("Error in getUser:", error.message);
//         return null; // エラー時にnullを返す
//     }
// }

// async function getUserPosts(userId) {
//     try {
//         // テンプレートリテラルの修正
//         const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
//         if (!response.ok) {
//             throw new Error("Failed to fetch user posts");
//         }
//         const posts = await response.json();
//         return posts; // postsとして返す
//     } catch (error) {
//         console.error("Error in getUserPosts:", error.message);
//         return null; // エラー時にnullを返す
//     }
// }

// async function fetchUserData() {
//     const userId = await getUser();
//     if (userId === null) {
//         console.error("User data could not be retrieved.");
//         return null; // エラー時にnullを返す
//     }

//     const posts = await getUserPosts(userId);
//     if (posts === null) {
//         console.error("User posts could not be retrieved.");
//         return { userId, posts: null };
//     }

//     return { userId, posts };
// }

// fetchUserData()
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.error("Unexpected error:", error.message);
//     });

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題9: エラーハンドリングとリトライ機能の実装
// この問題では、API呼び出しが失敗した場合に一定回数まで再試行（リトライ）を行う非同期関数を作成します。
// API呼び出しに失敗したときにエラーハンドリングを行い、再試行を繰り返して、最終的に成功したか、
// 失敗した場合は適切なメッセージを出力します。

// 要件:
// fetchWithRetryという名前の関数を作成し、urlとretries（再試行回数）を引数に取ります。
// fetchWithRetry関数はfetchを使って指定されたurlに対してリクエストを行います。
// リクエストが失敗した場合、指定されたretries回数だけ再試行を行い、
// それでも失敗した場合はエラーメッセージをconsole.errorで出力します。
// 成功した場合は取得したデータをJSON形式で返します。
// 再試行の間には一定の遅延（例えば500ms）を挟んでください。
// async function fetchWithRetry(url, entries = 3, delay = 500) {
//     for (let i = 0; i <= entries; i++) {
//         try {
//             const response = await fetch(url);
//             if (!response.ok) {
//                 throw new Error(`Request failed with status ${response.status}`);
//             }
//             const user = await response.json();
//             console.log('Data fetched successfully:', user);
//             return user
//         } catch (error) {
//             console.error(`Attempt ${i + 1} failed: ${error.message}`);
//             if (i === entries) {
//                 console.error("Error: Failed to fetch data after multiple attempts.")
//                 return null
//             }
//             await new Promise(resolve => setTimeout(resolve, delay));
//         }
//     }

// }

// fetchWithRetry('https://jsonplaceholder.typicode.com/users/1', 3, 500)
//     .then(result => {
//         if (result) {
//             console.log('Final result:', result);
//         }
//     })
//     .catch(error => {
//         console.error('Unexpected error:', error.message);
//     });
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題10: 非同期処理と条件付きAPI呼び出し
// この問題では、条件付きでAPI呼び出しを行う非同期処理を実装します。
// 特定の条件に基づいて複数のAPIを順番に呼び出し、結果を処理する方法を学びます。

// 要件:
// **checkCondition**という関数を作成し、Promiseを返します。
// この関数はランダムに成功（true）または失敗（false）を返します。
// **fetchDataFromAPI1とfetchDataFromAPI2**という関数を作成し、それぞれ別々のURLからデータを取得します。
// API 1: https://jsonplaceholder.typicode.com/posts/1
// API 2: https://jsonplaceholder.typicode.com/posts/2
// **mainFunction**を作成し、以下の条件付きロジックを実装してください。
// checkConditionがtrueの場合はfetchDataFromAPI1を呼び出して結果を処理。
// checkConditionがfalseの場合はfetchDataFromAPI2を呼び出して結果を処理。
// 各API呼び出しの結果をコンソールに出力し、エラーハンドリングを行ってください。
// async function checkCondition() {
//     return await new Promise((resolve, reject) => {
//         (Math.random() > 0.5 ? resolve({ message: "success", func: fetchDataFromAPI1 }) : reject({ message: "success", func: fetchDataFromAPI1 }));
//     })
// }

// async function fetchDataFromAPI1() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         if (!response.ok) {
//             throw new Error("fetch1 is failed."+ error.message);
//         }
//         const post1 = await response.json();
//         // console.log(post1)//--------------------------------------
//         return post1;
//     } catch (error) {
//         throw new Error("fetch1 is failed."+ error.message);
//     }
// }
// async function fetchDataFromAPI2() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
//         if (!response.ok) {
//             throw new Error("fetch2 is failed."+ error.message);
//         }
//         const post2 = await response.json();
//         // console.log(post2)//--------------------------------------
//         return post2;
//     } catch (error) {
//         throw new Error("fetch1 is failed."+ error.message);
//     }
// }
// checkCondition()
//     .then(async result => {
//         console.log(result.message);
//         console.log("from then with calling func1")
//         return await result.func();
//     })
//     .catch(async result => {
//         console.log(result.message);
//         console.log("from catch with calling func2")
//         return await result.func()
//     })
//     .then(result => {
//         console.log(result);
//         console.log("from then at second time")
//     })
//     .catch(error => {
//         console.error(error.message);
//         console.log("from catch at second time")
//     })
// output 
// Condition met, fetching from API 1...
// Data from API 1: { userId: 1, id: 1, title: '...', body: '...' }

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題11: 非同期処理でのタイムアウト機能の実装
// この問題では、API呼び出しに対してタイムアウト機能を実装します。API呼び出しが指定した時間内に応答しない場合、
// タイムアウトとしてエラーを返す非同期関数を作成してください。

// 要件:
// **fetchWithTimeout**という関数を作成し、urlとtimeout（ミリ秒単位）を引数として受け取ります。
// 関数は指定されたurlにfetchを使用してリクエストを行います。
// リクエストが指定したtimeout時間内に完了しなかった場合、タイムアウトエラーをスローします。
// 応答がタイムアウトした場合はcatchブロックで適切なエラーメッセージを表示してください
// async function fetchWithTimeout(url, timeout = 1000) {
//     const fetchfunc = async () => {
//         try {
//             const response = await fetch(url);
//             if (!response.ok) {
//                 throw new Error("response is not ok" + error.message);
//             }
//             const post1 = await response.json();
//             return post1
//         } catch (error) {
//             throw new Error("fetch didn't success" + error.message);
//         }
//     }
//     const timeoutFunc = async () => {
//         return new Promise((_, reject) => {
//             setTimeout(() => {
//             reject( new Error(`Request timed out after ${timeout}ms`))
//             }, timeout);
//         })
//     }
//     return Promise.race([fetchfunc(),timeoutFunc()])
// }

// fetchWithTimeout('https://jsonplaceholder.typicode.com/posts/1', 2000)
//     .then(data => {
//         console.log('Data fetched successfully:', data);
//     })
//     .catch(error => {
//         console.error('Error:', error.message);
//     });

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題12: 並列と逐次処理の違いを理解する
// この問題では、複数の非同期API呼び出しを並列と逐次の2つの方法で実装し、その実行時間の違いを確認します。

// 要件:
// **API呼び出し関数fetchData**を作成し、
// https://jsonplaceholder.typicode.com/posts/{id}にリクエストを送信して、指定されたIDの投稿データを取得します。
// fetchSequentially関数を作成し、ID 1から3までの投稿を逐次的に（順番に）取得し、合計の実行時間を測定します。
// fetchInParallel関数を作成し、ID 1から3までの投稿を並列で取得し、合計の実行時間を測定します。
// 両方の関数を呼び出し、それぞれの実行時間をコンソールに出力してください。
// async function fetchData() {
//     console.time("Sequential Fetch")
//     const fetchSequentially = async () => {
//         let data = []
//         for (let i = 1; i <= 3; i++) {
//             let id = i
//             const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//             if (!response.ok) {
//                 throw new Error("response.ok id not true");
//             }
//             const post = await response.json();
//             data.push(post);
//         }
//         return data
//     }
//     const sequentialData = await fetchSequentially()
//     console.timeEnd("Sequential Fetch");

//     console.time("Parallel Fetch");
//     const fetchInParallel = async () => {
//         const responses = await Promise.all([
//             fetch("https://jsonplaceholder.typicode.com/posts/1"),
//             fetch("https://jsonplaceholder.typicode.com/posts/2"),
//             fetch("https://jsonplaceholder.typicode.com/posts/3"),
//         ])

//         const data =await Promise.all(responses.map(response=>{
//             if(!response.ok){
//                 throw new Error("response is not ok")
//             }
//             return response.json();
//         }))
//         return data
//     }
//     const parallelData = await fetchInParallel();
//     console.timeEnd("Parallel Fetch");

//     return [sequentialData, parallelData];
// }
// fetchData()
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.error(error.message)
//     })
// // output
// // Sequential fetch complete in: 3000ms
// // Parallel fetch complete in: 1000ms
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題13: APIのデータ取得とデータのフィルタリング
// この問題では、複数のAPI呼び出しを行い、取得したデータを指定された条件でフィルタリングする関数を作成します。
// 今回はJSONPlaceholderのAPIを使用して、投稿データを取得し、特定の条件を満たす投稿だけを抽出します。

// 要件:
// APIエンドポイント: https://jsonplaceholder.typicode.com/posts
// **関数fetchAndFilterPosts**を作成し、すべての投稿を取得して、
// titleに特定の単語（例: "qui"）が含まれている投稿だけを返します。
// 非同期処理を使用してAPI呼び出しを行い、エラーハンドリングを適切に行ってください。
// 結果をコンソールに出力し、取得された投稿の配列を確認してください。
// async function fetchAndFilterPosts(url) {
//     try {
//         const response = await fetch(url);
//         if(!response.ok){
//             throw new Error("response.ok is fail" + error.message);
//         }
//         const posts = await response.json();
//         const filtered = posts.filter(post=>post.title.includes("qui"));
//         console.log("filtered : ",filtered)
//     } catch (error) {
//         console.error(error.message)
//     }
// }
// fetchAndFilterPosts("https://jsonplaceholder.typicode.com/posts")
// output
// Filtered posts: [
//     {
//         userId: 1,
//         id: 2,
//         title: "qui est esse",
//         body: "est rerum tempore vitae..."
//     },
//     {
//         userId: 1,
//         id: 7,
//         title: "magnam facilis autem",
//         body: "dolore placeat quibusdam ea quo vitae..."
//     },
//     ...
// ]

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題14: APIデータの結合とソート
// この問題では、複数のAPIからデータを取得し、それらを結合したうえで特定のプロパティでソートする関数を作成します。
// JSONPlaceholderのAPIを使用して、ユーザーデータと投稿データを結合します。

// 要件:
// APIエンドポイント:
// ユーザーデータ: https://jsonplaceholder.typicode.com/users
// 投稿データ: https://jsonplaceholder.typicode.com/posts
// **関数fetchAndMergeData**を作成し、ユーザーデータと投稿データを取得し、
// userIdをキーとして投稿にユーザーの情報を追加します。
// 投稿データをtitleプロパティのアルファベット順にソートし、結果を返します。
// 適切なエラーハンドリングを実装してください。
// async function fetchAndMergeData() {
//     try {
//         // const userResponse = await fetch("https://jsonplaceholder.typicode.com/users");
//         // const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const [userResponse,postResponse] = await Promise.all([
//             fetch("https://jsonplaceholder.typicode.com/users"),
//             fetch("https://jsonplaceholder.typicode.com/posts")
//         ]);
//         if (!userResponse.ok || !postResponse.ok) {
//             throw new Error("fetch result is not ok");
//         }
//         const users = await userResponse.json();
//         const posts = await postResponse.json();
//         const mergedData = posts.map(post => {
//             const user = users.find(user => user.id === post.userId)
//             return { ...post, user }

//         })
//         const sortedMergedData = mergedData.sort((a,b)=>a.title.localeCompare(b.title))
//         console.log(sortedMergedData)
//     } catch (error) {
//         console.error(error)
//     }
// }

// fetchAndMergeData();
// output
// Merged and sorted posts: [
//     {
//         userId: 1,
//         id: 2,
//         title: "at vero eos et accusamus",
//         body: "quia et suscipit...",
//         user: {
//             id: 1,
//             name: "Leanne Graham",
//             username: "Bret",
//             email: "Sincere@april.biz",
//             ...
//       }
//     },
//     {
//         userId: 3,
//         id: 11,
//         title: "dolorem dolore est ipsam",
//         body: "dignissimos aperiam dolorem...",
//         user: {
//             id: 3,
//             name: "Clementine Bauch",
//             username: "Samantha",
//             email: "Nathan@yesenia.net",
//             ...
//       }
//     },
//     ...
// ]

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題15: 複数の非同期APIからのデータ取得とエラーハンドリング
// この問題では、複数のAPIからデータを取得し、そのデータを組み合わせて最終的な結果を返す関数を作成します。
// ただし、いずれかのAPIでエラーが発生した場合、適切なエラーメッセージを出力し、その後も他のAPIのデータ取得を続けてください。

// 要件:
// APIエンドポイント:
// ユーザーデータ: https://jsonplaceholder.typicode.com/users
// 投稿データ: https://jsonplaceholder.typicode.com/posts
// コメントデータ: https://jsonplaceholder.typicode.com/comments
// **関数fetchAllData**を作成し、3つのAPIからデータを取得し、それぞれのレスポンスを処理して結果を返します。
// いずれかのAPIでエラーが発生した場合は、そのエラーをキャッチし、エラーメッセージをコンソールに出力してください。
// エラーが発生しても他のAPIの処理は継続します。
// 最終的に取得できたデータをコンソールに出力します。エラーが発生した場合は、そのデータをnullとして結果に含めてください。

// output
// Fetched data: {
//     users: [...], // ユーザー情報が正常に取得された場合
//     posts: null,  // 投稿データがエラーで取得できなかった場合
//     comments: [...] // コメントデータが正常に取得された場合
// }
// async function fetchAllData() {
//     try {
//         // [userResponse, postResponse, commentResponse]
//         let responses = await Promise.allSettled([
//             fetch("https://jsonplaceholder.typicode.com/users"),
//             fetch("https://jsonplaceholder.typicode.com/posts"),
//             fetch("https://jsonplaceholder.typicode.com/comments")
//         ])
//         responses = responses.flat()

//         const results = await Promise.all(
//             responses.map(async (response) => {
//                 if (response.status === "fulfilled") {
//                     try {
//                         const JsonData = await response.value.json();
//                         return JsonData
//                     } catch (error) {
//                         return { error: "Failed to parse JSON" };
//                     }
//                 }else{
//                     return { error: result.reason.message };
//                 }
//             })
//         )
//         console.log('Processed Results:', results);
//     } catch (error) {
//         console.error(error.message);
//     }
// }

// fetchAllData()
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題: 非同期処理で複数のAPIデータを合成する
// 2つの異なるAPIからデータを取得し、それらを合成して1つのオブジェクトにまとめる関数を作成してください。

// 要件:

// 2つのAPIエンドポイントからデータを取得します。
// エンドポイント1: https://jsonplaceholder.typicode.com/users/1
// エンドポイント2: https://jsonplaceholder.typicode.com/posts?userId=1
// データの取得に失敗した場合は、適切なエラーメッセージを出力してください。
// データを合成して、次のようなオブジェクトを返します:
// async function fetchAndMargeFunc() {
//     try {
//         const responses = await Promise.all([
//             fetch("https://jsonplaceholder.typicode.com/users/1"),
//             fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
//         ])
//         const result = await Promise.all(
//             responses.map(async (response) => {
//                 try {
//                     if (response.ok) {
//                         const JsonData = await response.json();
//                         return JsonData
//                     } else {
//                         return { error: "Failed to parse JSON" };
//                     }
//                 } catch (error) {
//                     return { error: "response is not ok" };
//                 }
//             })
//         )
//         const output = { user: result[0], posts: result[1] }
//         console.log(output)
//     } catch (error) {
//         console.error(error.message)
//     }
// }
// fetchAndMargeFunc();
// output
// {
//     user: { /* ユーザーデータ */ },
//     posts: [ /* 投稿データの配列 */]
// }
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題: 非同期処理のチェーンでデータの依存関係を処理する
// 複数の非同期関数を作成し、それらを順番に呼び出してデータを組み合わせ、最終的な結果を構築する関数を作成してください。

// 要件:

// 以下の3つの非同期関数を作成します。
// getUser() - ユーザーデータを取得する関数。APIエンドポイント: https://jsonplaceholder.typicode.com/users/1
// getPostsByUser(userId) - 特定のユーザーIDに基づいた投稿データを取得する関数。
// APIエンドポイント: https://jsonplaceholder.typicode.com/posts?userId={userId}
// getCommentsByPost(postId) - 特定の投稿IDに基づいたコメントデータを取得する関数。
// APIエンドポイント: https://jsonplaceholder.typicode.com/comments?postId={postId}
// getUser()で取得したユーザーIDを使用してgetPostsByUser(userId)を呼び出し、
// 次に取得した投稿の1つ目の投稿IDを使用してgetCommentsByPost(postId)を呼び出してください。
// すべてのデータをオブジェクトにまとめ、以下の形式で出力してください。
// async function fetchCompleteUserData() {
//     let output = {}
//     async function getUser() {
//         try {
//             const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//             if (!response.ok) {
//                 throw new Error("fail to fetch userData")
//             }
//             const user = await response.json();
//             // console.log(user)
//             output.user = user
//             return getPostsByUser(user.id)
//         } catch (error) {
//             console.error(error.message);
//         }
//     }
//     async function getPostsByUser(userId) {
//         try {
//             const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
//             if (!response.ok) {
//                 throw new Error("fail to fetch userData")
//             }
//             const post = await response.json();
//             // console.log(post)
//             output.post = post
//             return getCommentsByPost(post.userId)
//         } catch (error) {
//             console.error(error.message);
//         }
//     }

//     async function getCommentsByPost(postId) {
//         try {
//             const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
//             if (!response.ok) {
//                 throw new Error("fail to fetch userData")
//             }
//             const comment = await response.json();
//             output.comment = comment

//         } catch (error) {
//             console.error(error.message);
//         }
//     }
//     await getUser();
//     console.log(output)
// }
// fetchCompleteUserData();
// output
// {
//     user: { /* ユーザーデータ */ },
//     posts: [ /* 投稿データの配列 */ ],
//     comments: [ /* コメントデータの配列 */ ]
// }
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 問題: 複数のAPIデータを処理し、特定条件でフィルタリングして出力する
// 2つの異なるAPIエンドポイントからデータを取得し、
// 取得したデータを特定の条件でフィルタリングして結果を出力する関数を作成してください。

// 要件:

// 2つのAPIエンドポイントを使用してデータを取得します。
// API 1: https://jsonplaceholder.typicode.com/users
// API 2: https://jsonplaceholder.typicode.com/posts
// 2つのAPIから取得したデータを結合し、userIdが一致するユーザーと投稿をマージしてください。
// 投稿のタイトルに特定のキーワード（例: "qui"）が含まれているものだけを抽出してください。
// 結果をconsole.log()で出力します。
async function getUsersAndPostsData() {
    async function fetchUsers() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            if (!response.ok) {
                throw new Error("failed fetch user")
            }
            const users = await response.json();
            // console.log(users)
            return await fetchPosts(users);
        } catch (error) {
            console.error(error.message);
        }
    }
    async function fetchPosts(userData) {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            if (!response.ok) {
                throw new Error("failed fetch posts")
            }

            const posts = await response.json();
            // console.log(posts)
            const allData = { userData, posts }
            return await mergeUsersAndPosts(allData);
        } catch (error) {
            console.error(error.message);
        }
    }
    await fetchUsers()
}
// const a = { userData: A, postData: B }

async function mergeUsersAndPosts({ userData, posts }) {
    try {
        if (!userData || !posts) {
            throw new Error("couldn't get users or posts")
        }
        const merged = userData.map(user => {
            const post = posts.find(post => post.userId === user.id)
            return { user,post }
        })
        const filterMerged =merged.filter(data=>data.post.title.includes("qui"))
        console.log(filterMerged)
        // console.log(posts)
    } catch (error) {
        console.error(error.message)
    }
}

getUsersAndPostsData()

// users[
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: [Object]
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// },{},,,]

// posts
// [
//     {
//         userId: 1,
//         id: 1,
//         title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//         body: 'quia et suscipit\n' +
//             'suscipit recusandae consequuntur expedita et cum\n' +
//             'reprehenderit molestiae ut ut quas totam\n' +
//             'nostrum rerum est autem sunt rem eveniet architecto'
//     },{},,,]

// output
// [
//     {
//       user: { /* ユーザー情報 */ },
//       post: { /* 該当する投稿情報 */ }
//     },
//     // 条件を満たす他のユーザーと投稿
// ]

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー