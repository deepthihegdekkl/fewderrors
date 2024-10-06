const input = document.getElementById('input');
const btn = document.getElementById('btn');
const output = document.getElementById('output');
const api = "b1693ed7ad181ad79817cc99d0523aa3";
btn.addEventListener('click',()=>{
    const city = input.value;
    if(city.trim()==="")
    {
        alert("Please enter some city name");
        return;
    }
    url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`
    fetch(url)
        .then(response=>response.json())
        .then(data =>{
            const temp = data.main.temp;
            const description = data.weather[0].description;
            const outputscreen = `<p>The temperature is ${temp}</p>
                                  <p>The description is ${description}</p>`
            output.innerHTML=outputscreen;
        })
        .catch(error=>
        {
            alert("No city exists",error);
        })
})