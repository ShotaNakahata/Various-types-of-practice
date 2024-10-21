const inputCity = document.getElementById("inputCity");
const button = document.getElementById("button");
const whetherInfo = document.getElementById("weatherInfo");
console.log(whetherInfo);
let inputVal = "";

button.addEventListener("click", () => {
    const cityName = inputCity.value.trim();
    if(!cityName){
        whetherInfo.innerHTML="<p>Cityを入力してください</p>"
        return;
    }

    console.log(cityName);
    fetch("./mockData.json")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.name.toLocaleLowerCase() == cityName.toLocaleLowerCase()) {
                whetherInfo.innerHTML = `
            <h1>city name: ${data.name}</h1>
            <h3>wheather: ${data.weather[0].description}</h3>
            <h3>温度: ${data.main.temp}</h3>
            `
            }else{
                whetherInfo.innerHTML=`<p>${cityName}の天気情報が見つかりません。</p>`;
            }
        })
        .catch(error=>{
            console.error('エラーが発生しました:', error);
            whetherInfo.innerHTML= "<p>データの取得に失敗しました。</p>";
        })
})