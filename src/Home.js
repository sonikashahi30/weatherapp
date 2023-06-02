import React, { useEffect, useState } from 'react'
import './index.css'
import axios from "axios";
import windImg from "./wind.png";


function Home(){
 const [data, setData] = useState({
    celcius: 10,
    name: 'Nepal',
    humidity: 10,
    speed: 2

 })
 const [name, setName] = useState('');

 const handleClick = () => {
    if (name !== "  ")
{
const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=6c453f0442eaf2dc71d15dc52a2203a8&units=metric`;
   axios.get(apiurl)
    .then(res => {
        setData({...data, celcius: res.data.main.temp, name: res.data.name,
        humidity: res.data.main.humidity, speed: res.data.wind.speed })
    })
    .catch( err => console.log(err));

}    
 }
    return (
        <div className='container'>
        <div className= "weather">
          <div className="search">
            <input type='text' placeholder='Enter City Name' onChange={e => setName(e.target.value)}/>
            <button> <img src='search.jpg' onClick={handleClick} alt=''/></button>
            </div>  
            <div className='winfo'>
                <img src='clouds.png' alt='' />
                <h1>{Math.round(data.celcius)}°C</h1>
                <h2>{data.name}</h2> 
<div className='details'>
    <div className='col'>
        <img src='humi.png' alt=''/>
        <div className='humidity'>
            <p>{Math.round(data.humidity)}%</p>
            <p>Humidity</p>
        </div>
    </div>
    <div className='col'>
        <img src={windImg} alt=''/>
        <div className='wind'>
            <p>{ data.speed}km/h</p>
            <p>Wind</p>
        </div>

    </div>
    </div>  

            </div>
        </div>
        </div>
    )
}

export default Home;