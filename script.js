document.addEventListener("DOMContentLoaded",function(){
    const apiKey="b1693ed7ad181ad79817cc99d0523aa3";
    const fetchWeatherButtton=document.getElementById("fetchWeather");
    const cityInput=document.getElementById("cityInput");
    const weatherResult=document.getElementById("weatherResult");
    fetchWeatherButtton.addEventListener("click",function(){
        const city=cityInput.value;
        if(city.trim===""){
            alert("please enter a city name");
        return;
       }
const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
fetch(apiUrl)
.then((response)=>response.json())
.then((data)=>{
    const temperature=data.main.temp;
    const weatherDescription=data.weather[0].description;
    const weatherOutput=`
    <p> Temperature:${temperature} &#8451;</p>
    <p> WeatherDescription:${weatherDescription}</p>`;
    weatherResult.innerHTML=weatherOutput;
})
.catch((error)=>{
console.error("error ehile getcjing weather data",err);
weatherResult.innerHTML="weather data not found";



});
});
});
