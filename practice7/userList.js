// URLからクエリパラメータ(userId)を取得
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');  // userIdを変数に代入

const APILINK = `https://jsonplaceholder.typicode.com/users/${userId}`;

const userDetails = document.getElementById("userDetails");

// ユーザーの詳細情報を取得
fetch(APILINK)
    .then(response => response.json())
    .then(user => {
        userDetails.innerHTML = `
            <h2>${user.name} (${user.username})</h2>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Website: <a href="http://${user.website}" target="_blank">${user.website}</a></p>
            <h3>住所</h3>
            <p>${user.address.street}, ${user.address.city}, ${user.address.zipcode}</p>
        `;
    })
    .catch(error => {
        console.error('エラーが発生しました:', error);
        userDetails.innerHTML = "<p>ユーザー詳細情報の取得に失敗しました</p>";
    });

