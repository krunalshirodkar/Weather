const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8321afe85cmsh3218455d041ef91p1c37e6jsn4afe2ad25d7f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
	cityName.innerHTML= city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)

		cloud_pct.innerHTML= response.cloud_pct   
		temp .innerHTML= response.temp
		temp2 .innerHTML= response.temp
		humidity.innerHTML= response.humidity
		humidity2.innerHTML= response.humidity
		min_temp.innerHTML= response.min_temp
		max_temp.innerHTML= response.max_temp
		wind_speed.innerHTML= response.wind_speed
		wind_speed2.innerHTML= response.wind_speed
		wind_degrees.innerHTML= response.wind_degrees
		sunrise.innerHTML= response.sunrise
		sunset.innerHTML= response.sunset
	
	

	})
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
	getWeather(city.value)
})

getWeather("Mumbai")