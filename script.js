let button = document.querySelector('.button');
let inputvalue = document.querySelector('.inputvalue');
let name = document.querySelector('.name');

let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');
let humidity = document.querySelector('.humidity');

button.addEventListener('click',function (){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&APPID=30429c71872f6537f65afa6465704978')

    .then(Response => Response.json())
    .then(data => {
        // console.log(data)
        let namevalue = data['name'] 
        let countryvalue = data ['sys']['country']
        let tempvalue = data['main']['temp']
        let descvalue = data['weather'] [0] ['description']
        let humidityvalue = data ['main']['humidity']

        //kelvin to celcious
        tempvalue = tempvalue - 273.15;
        tempvalue =  Math.round(tempvalue * 10) / 10;

        name.innerHTML = "City : "+ namevalue + ' ('+countryvalue+')';
        temp.innerHTML = "Temp : "+tempvalue+ " ℃";
        desc.innerHTML = " Description : "+ descvalue;
        humidity.innerHTML = "Humidity : "+ humidityvalue; 
    })

    
    .catch(err => alert('Wrong City name'))
})