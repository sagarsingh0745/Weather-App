const cloud_pct = document.querySelector("#cloud_pct");
const temp = document.querySelector("#temp");
const temp2 = document.querySelector("#temp2");
const feels_like = document.querySelector("#feels_like");
const humidity = document.querySelector("#humidity");
const min_temp = document.querySelector("#min_temp");
const max_temp = document.querySelector("#max_temp");
const wind_speed = document.querySelector("#wind_speed");
const wind_degrees = document.querySelector("#wind_degrees");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");
const submit = document.querySelector("form #submit");
const city = document.querySelector("form #city");
const cityName = document.querySelector(".container #cityName")






// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '3901aefb06msh57d2947ce2f5a2fp184928jsne43c7cad03f8',
        'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = async (city) => {
    cityName.innerHTML = city;
    try {
        const response = await fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options);
        const result = await response.json();
        console.log(result)
        // cloud_pct.innerHTML = result.cloud_pct
        temp.innerHTML = result.temp
        temp2.innerHTML = result.temp
        temp3.innerHTML = result.temp
        feels_like.innerHTML = result.feels_like
        feels_like2.innerHTML = result.feels_like
        humidity.innerHTML = result.humidity
        humidity2.innerHTML = result.humidity
        humidity3.innerHTML = result.humidity
        min_temp.innerHTML = result.min_temp
        min_temp2.innerHTML = result.min_temp
        max_temp.innerHTML = result.max_temp
        max_temp2.innerHTML = result.max_temp
        wind_speed.innerHTML = result.wind_speed
        wind_speed3.innerHTML = result.wind_speed
        wind_speed2.innerHTML = result.wind_speed
        wind_degrees.innerHTML = result.wind_degrees
        wind_degrees2.innerHTML = result.wind_degrees
        sunrise.innerHTML = result.sunrise
        sunrise2.innerHTML = result.sunrise
        sunset.innerHTML = result.sunset
        sunset2.innerHTML = result.sunset


    } catch (error) {
        console.error(error);
    }
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
});
getWeather("delhi");
