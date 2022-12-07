// document.getelementby id
// get weather data
// get the data on submit button
// show or display that data to the browser


async function getWeatherData(){
    var cityName=document.getElementById('cityName').value 
    console.log(cityName)
    var cityName=document.getElementById('cityName').value 
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=34421bb6408c60735a9fd8a4eee99459`
    
    let data=await fetch(url)
    let res=await data.json()
    console.log(res)

    var weatherContainer=document.getElementById('weatherContainer')

    weatherContainer.innerHTML=`
    <div class="row g-0">
        <div class="col-md-4">
          <img src="https://cdn3.vectorstock.com/i/1000x1000/10/87/weather-forecast-vector-11181087.jpg
          " class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Weather update ${cityName}</h5>

            <p class="card-text" m-0><small class="text-muted">Humidity:${res.main.humidity}</small></p>
            <p class="card-text" m-0><small class="text-muted">Wind Speed:${res.wind.speed}</small></p>
            <p class="card-text" m-0><small class="text-muted">Temperature:${res.main.temp}</small></p>
            <p class="card-text" m-0><small class="text-muted">Description:${res.weather[0].description}</small></p>
          </div>
        </div>
    </div>
    `
}

 
