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
async function getUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!response.ok) {
            throw new Error("Failed to fetch user data");
        }
        const user = await response.json();
        return user.id;
    } catch (error) {
        console.error("Error in getUser:", error.message);
        return null; // エラー時にnullを返す
    }
}

async function getUserPosts(userId) {
    try {
        // テンプレートリテラルの修正
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        if (!response.ok) {
            throw new Error("Failed to fetch user posts");
        }
        const posts = await response.json();
        return posts; // postsとして返す
    } catch (error) {
        console.error("Error in getUserPosts:", error.message);
        return null; // エラー時にnullを返す
    }
}

async function fetchUserData() {
    const userId = await getUser();
    if (userId === null) {
        console.error("User data could not be retrieved.");
        return null; // エラー時にnullを返す
    }

    const posts = await getUserPosts(userId);
    if (posts === null) {
        console.error("User posts could not be retrieved.");
        return { userId, posts: null };
    }

    return { userId, posts };
}

fetchUserData()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error("Unexpected error:", error.message);
    });

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー