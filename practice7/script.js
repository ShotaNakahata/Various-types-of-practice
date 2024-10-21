//外部APIのlink準備
const APILINK = 'https://jsonplaceholder.typicode.com/users';
//html要素取得
const userList = document.getElementById("userList");
const fetchUsersButton = document.getElementById("fetchUsers");

// ボタンがクリックされた時にユーザー情報を取得する
fetchUsersButton.addEventListener("click",()=>{
    if(userList.innerHTML !== ""){
        return;
    }
    fetch(APILINK)
    .then(respones=>respones.json())
    .then(data=>{
        console.log(data)
        displayUser(data);
    })
    .catch(erro =>{
        console.error('エラーが発生しました:',erro);
        userList.innerHTML="<p>データの取得に失敗しました</p>"
    });
});

function displayUser(users){
    users.forEach(user=>{
        const userItem = document.createElement("div");
        userItem.classList.add('user-item');
        userItem.innerHTML = `
    <h2>${user.name} (${user.username})</h2>
    <p>Email: ${user.email}</p>
    <a href="userList.html?userId=${user.id}">詳細を見る</a>
    <hr>
`;

            userList.appendChild(userItem);
    })
}