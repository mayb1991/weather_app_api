console.log("Hello from, The Weather Tracker 5000");

// All temps are in °F


const api = {
    key: "082e5fd325ace68507edeb45b28b83d0",
    base: "https://api.openweathermap.org/data/2.5/weather",
  };
  
  document.getElementById("submit").addEventListener("click", function () {
    const searchInputValue = document.getElementById("search-action").value;
    // console.log(searchInputValue);
    // const apiKey='082e5fd325ace68507edeb45b28b83d0';
    fetch(`${api.base}?q=${searchInputValue}&units=imperial&appid=${api.key}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        document.getElementById("Temperature").innerText = data.main.temp + ("°");
        document.getElementById("city").innerText = data.name;
        const iconStatus = data.weather[0].icon;
        document.getElementById(
          "WeatherIconStatus"
        ).src = `http://openweathermap.org/img/wn/${iconStatus}@2x.png`;
        // document.getElementById("status").innerText = data.weather[0].main;
        document.getElementById("feels").innerText = data.main.feels_like + ("°");
        document.getElementById("Description").innerText = data.weather[0].description;
        document.getElementById("Humidity").innerText = data.main.humidity + ("%");
        document.getElementById("Wind Speed").innerText = data.wind.speed + ("MPH");
      })
  
      .catch((error) => alert("City not found"));
  });