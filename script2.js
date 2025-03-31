const userLocation=document.getElementById("userLocation"),converter=document.getElementById("converter"),weatherIcon=document.querySelector(".weatherIcon"),temperature=document.querySelector(".temperature"),feelslike=document.querySelector(".feelslike"),description=document.querySelector(".description"),date=document.querySelector(".date"),city=document.querySelector(".city"),hValue=document.getElementById("hValue"),wValue=document.getElementById("wValue"),sRValue=document.getElementById("sRValue"),sSValue=document.getElementById("sSValue"),cValue=document.getElementById("cValue"),uVValue=document.getElementById("uVValue"),pValue=document.getElementById("pValue"),Forecast=document.querySelector(".Forecast");

WEATHER_API_ENDPOINT=`https://api.openweathermap.org/data/2.5/weather?appid=c3fab1d8f40717b8a9a3b2abeae91ac4&q=`;
WEATHER_DATA_ENDPOINT=`https://api.openweathermap.org/data/2.5/onecall?appid=c3fab1d8f40717b8a9a3b2abeae91ac4&exclude=minutely&units=metric&`;

function findUserLocation(){
	fetch(WEATHER_API_ENDPOINT+ userLocation.value)
	.then((response)=>response.json())
	.then((data)=>{
		if(data.cod!=''&& data.cod!=200){
			alert(data.message);
			return;
		}
		console.log(data);

		city.innerHTML=data.name+", "+data.sys.country;
		temperature.innerHTML=data.main.temp;
		feelslike.innerHTML="Feels Like"+data.main.feels_like;
		description.innerHTML=`<i class="fa-brands fa-cloudversify"></i> &nbsp`+data.weather[0].description;
		hValue.innerHTML=data.main.humidity+"%";
		wValue.innerHTML=data.wind.speed+"ms";

		sSValue.innerHTML=data.main.temp_min;
		cValue.innerHTML=data.clouds.all+"%";
		uVValue.innerHTML=data.main.temp_max;
		pValue.innerHTML=data.main.pressure+"hPa";

		
		weatherIcon.style.background='url(https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png)'
		fetch(
			WEATHER_DATA_ENDPOINT+`lon=$(data.coord.lon)&lat=$(data.coord.lat)`)
			.then((response)=>response.json())
			.then((data)=>{
				console.log(data);

				
				
				
				
			});
		
	});
}
