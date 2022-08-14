let apiKey = "dccc0525a2b1e89d07a6dc8f66525157";

document.onkeydown = (e) => {
  if (e.key === "Enter") {
    document.querySelector(".search-btn").click();
  }
};

let imgStatus = document.querySelector(".weatherIcon");
if (imgStatus === "") {
  document.querySelector(".tempIcon").style.display = "block";
}

document.querySelector(".search-btn").onclick = () =>
  getCityName()
    .then((weatherApi) => {
      axios.get(weatherApi).then((response) => {
        let cityName = response.data[0].name;
        let localName = response.data[0].local_names.vi;
        let country = response.data[0].country;
        document.querySelector(".city").textContent = `${localName}`;
        document.querySelector(".country").textContent = `${country}`;

        let weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=vi`;
<<<<<<< HEAD
        console.log(weatherApi);
=======
>>>>>>> 380f2bf48746c536740bd3e8efc210679f53b902
        axios.get(weatherApi).then((weatherApi) => {
          let temp = weatherApi.data.main.temp;
          let humidity = weatherApi.data.main.humidity;
          let weatherDescription = weatherApi.data.weather[0].description;
          let weatherIcon = weatherApi.data.weather[0].icon;

          document.querySelector(
            ".weatherIcon"
          ).src = `http://openweathermap.org/img/wn/${weatherIcon}@4x.png`;
          document.querySelector(
            ".temp"
          ).innerHTML = `Nhiệt độ: ${temp} &#8451`;
          document.querySelector(".humidity").innerHTML = `Độ ẩm: ${humidity}%`;
          document.querySelector(
            ".weatherDescription"
          ).innerHTML = `Thời tiết: ${weatherDescription}`;
        });
      });
    })
<<<<<<< HEAD
    .catch(() => alert("Sai tên thành phố. Mời nhập lại"));
=======
    .catch(() => console.log("Api error"));
>>>>>>> 380f2bf48746c536740bd3e8efc210679f53b902

function getCityName() {
  let cityName = document.querySelector(".inputValue").value;
  let geocodingApi = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`;
  return Promise.resolve(geocodingApi);
}
