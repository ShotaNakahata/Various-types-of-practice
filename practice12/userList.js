const URL = "https://jsonplaceholder.typicode.com/users";
const userList = document.getElementById("userList");
const userListError = document.getElementById("userListError")
const nowLoading = document.getElementById("nowLoading")
console.dir(userList);
const button = document.getElementById("button");
console.dir(name);

button.addEventListener("click", () => {
    nowLoading.style.display="block"
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
            userList.innerHTML = ""
            data.forEach(user => {
                const card = document.createElement("div")
                card.classList.add("card");

                const name = document.createElement("p")
                name.classList.add("name");
                name.textContent = `name : ${user.name}`
                card.appendChild(name);

                const email = document.createElement("p")
                email.classList.add("email");
                email.textContent = `email : ${user.email}`
                card.appendChild(email);

                const city = document.createElement("p")
                city.classList.add("city");
                city.textContent = `city : ${user.address.city}`
                card.appendChild(city);
                
                userList.appendChild(card);
            });
            nowLoading.style.display="none"
        })
        .catch(error=>{
            console.error("error fetching ",error);
            userListError.style.display = "block"
        })
})

// const URL = "https://jsonplaceholder.typicode.com/users";
// const userList = document.getElementById("userList");
// const userListError = document.getElementById("userListError");
// const nowLoading = document.getElementById("nowLoading");

// function fetchUserData() {
//     nowLoading.style.display = "block";
//     fetch(URL)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             userList.innerHTML = "";
//             data.forEach(user => {
//                 const card = document.createElement("div");
//                 card.classList.add("card");

//                 const name = document.createElement("p");
//                 name.classList.add("name");
//                 name.textContent = `name : ${user.name}`;
//                 card.appendChild(name);

//                 const email = document.createElement("p");
//                 email.classList.add("email");
//                 email.textContent = `email : ${user.email}`;
//                 card.appendChild(email);

//                 const city = document.createElement("p");
//                 city.classList.add("city");
//                 city.textContent = `city : ${user.address.city}`;
//                 card.appendChild(city);

//                 userList.appendChild(card);
//             });
//             nowLoading.style.display = "none";
//         })
//         .catch(error => {
//             console.error("error fetching ", error);
//             userListError.style.display = "block";
//         });
// }

// // ページ読み込み時にfetchUserData関数を実行
// window.onload = fetchUserData;
