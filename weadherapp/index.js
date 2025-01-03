const city=document.querySelector('#city')
const temperature=document.querySelector('#temperature')
const search=document.querySelector('#search')
const btn=document.querySelector('#btn')
const diverror=document.querySelector('#div-error')
const error=document.querySelector('#error')
const humidity=document.querySelector('#humidity')
const wind=document.querySelector('#wind')
const APIkey="86de165af82459d71b9eb54e100728d2"
const APIlink="https://api.openweathermap.org/data/2.5/weather?q="
const weather=async(city)=>{
    try{
        const response=await fetch(APIlink)+city+"&appid"
        if(response.status!=200){
            diverror.style.display='block'
            error.innerHTML="something went wrong"
        }
        else{
            const data=await response.json()
            temperature.innerHTML=data.main.temp 
            wind.innerHTML=data.wind.speed
            humidity.innerHTML=data.main.humidity
            city.innerHTML=data.name
        }

    }
    catch{
        console.log(error)
    }
}
btn.addEventListener('click',weather())