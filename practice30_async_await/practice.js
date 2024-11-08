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
async function getUserData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve({ id: 1, name: 'Alice' })
        }, 1000);
    })
}

async function getUserPost(userId) {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve([
                { postId: 1, content: 'Hello World', userId },
                { postId: 2, content: 'Learning async/await', userId }
            ])
        }, 1000);
    })
}

async function fetchUserDetails(){
    const user = await getUserData();
    const post = await getUserPost(user.id);
    return {user,post}
}
fetchUserDetails().then(result=>{
    console.log(result);
})
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー