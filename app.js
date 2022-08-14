let apiKey = "dccc0525a2b1e89d07a6dc8f66525157";
let url = "https://api.openweathermap.org/data/2.5/weather?";
let $ = document.querySelector.bind(document);
let searchBtn = $(".search-btn");
let cityName;

function getInputValue(obj) {
  cityName = obj.value;
}

searchBtn.onclick = function search() {
  axios
    .get(url, {
      params: {
        lang: "en",
        units: "metric",
        q: cityName,
        appid: apiKey,
      },
    })
    .then((response) => {
      $(".city").innerText = response.data.name;
      $(".country").innerText = response.data.sys.country;
      $(".temp").innerText = response.data.main.temp;
      $(".humidity").innerText = response.data.main.humidity;
      $(".weather").innerText = response.data.weather[0].description;
      $(
        ".weatherIcon"
      ).src = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@4x.png`;

      console.log(response);
    })
    .catch(() => alert(`Wrong city! Pls enter correct city's name`));
};

document.onkeydown = (e) => {
  if (e.key === "Enter") {
    $(".search-btn").click();
  }
};

let imgStatus = $(".weatherIcon");
if (imgStatus === "") {
  $(".tempIcon").style.display = "block";
}
