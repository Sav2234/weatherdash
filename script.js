var weatherAPI = "3b43a958c68ec01d77c55ea8f28d89ec";
var searchForm = document.getElementById("stateSearch");


function weatherData (city){
  var weatherInfo = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${weatherAPI}`;
  fetch (weatherInfo)

.then (function(res){
return res.json()
})  
.then (function (weather){
   var lat = weather[0].lat
   var lon = weather[0].lon
   
    console.log (lat)
    console.log (lon)
    var weatherData = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${weatherAPI}`
    fetch (weatherData)
    .then (function(res){
    return res.json ()
    })
    .then (function (weather){
    
        console.log (weather)
        //display data to webpage//
        //current day//
        document.getElementById("temp").innerHTML = weather.current.temp
        document.getElementById("wind").innerHTML = weather.current.wind_speed
        document.getElementById("humidity").innerHTML = weather.current.humidity
        document.getElementById("uv-index").innerHTML = weather.current.uvi
        document.getElementById("icon").src = 'https://openweathermap.org/img/w/' + weather.current.weather[0].icon + ".png"

        document.getElementById("temp1").innerHTML = weather.daily[0].temp.max
        document.getElementById("wind1").innerHTML = weather.daily[0].wind_speed
        document.getElementById("humidity1").innerHTML = weather.daily[0].humidity
        document.getElementById("uv-index1").innerHTML = weather.daily[0].uvi
        document.getElementById("icon1").src = 'https://openweathermap.org/img/w/' + weather.daily[0].weather[0].icon + ".png"

        document.getElementById("temp2").innerHTML = weather.daily[1].temp.max
        document.getElementById("wind2").innerHTML = weather.daily[1].wind_speed
        document.getElementById("humidity2").innerHTML = weather.daily[1].humidity
        document.getElementById("uv-index2").innerHTML = weather.daily[1].uvi
        document.getElementById("icon2").src = 'https://openweathermap.org/img/w/' + weather.daily[1].weather[0].icon + ".png"

        document.getElementById("temp3").innerHTML = weather.daily[2].temp.max
        document.getElementById("wind3").innerHTML = weather.daily[2].wind_speed
        document.getElementById("humidity3").innerHTML = weather.daily[2].humidity
        document.getElementById("uv-index3").innerHTML = weather.daily[2].uvi
        document.getElementById("icon3").src = 'https://openweathermap.org/img/w/' + weather.daily[2].weather[0].icon + ".png"
        
        document.getElementById("temp4").innerHTML = weather.daily[3].temp.max
        document.getElementById("wind4").innerHTML = weather.daily[3].wind_speed
        document.getElementById("humidity4").innerHTML = weather.daily[3].humidity
        document.getElementById("uv-index4").innerHTML = weather.daily[3].uvi
        document.getElementById("icon4").src = 'https://openweathermap.org/img/w/' + weather.daily[3].weather[0].icon + ".png"

        document.getElementById("temp5").innerHTML = weather.daily[4].temp.max
        document.getElementById("wind5").innerHTML = weather.daily[4].wind_speed
        document.getElementById("humidity5").innerHTML = weather.daily[4].humidity
        document.getElementById("uv-index5").innerHTML = weather.daily[4].uvi
        document.getElementById("icon5").src = 'https://openweathermap.org/img/w/' + weather.daily[4].weather[0].icon + ".png"
    }) 
  
}) 
}



var weatherInfo = document.getElementById('weatherInfo');
//var saveButton = document.getElementById("Search");

searchForm.addEventListener("submit", 

function (event) {
    event.preventDefault() ;
    var city = document.getElementById("state").value;
    console.log(city)
    //console.log(weatherInfo)
    weatherData(city)
    
})