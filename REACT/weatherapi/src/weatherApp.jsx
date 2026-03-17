import{ useEffect, useState} from 'react';
import axios from 'axios';

const API_KEY= import.meta.env.VITE_API_KEY;

function weatherApp(){
    const [city,setCity]=useState([]);
    const [weather,setWeather]=useState([]);
    const [error,setError]=usestate([]);

    async function getWeather(e){
        e.preventDefault();

        if(!city) return;
        
        setError("");

        try{
            const res = await axios.get();
            setWeather(res.data);
            setCity("");
        } catch (err){
            setWeather(null);
            setError("City not found");
        
        }
            
    }

const weatherType = weather?.weather[0].main;

return(
    <div >
        <h1>Weather Search</h1>
     <form onSubmit={getWeather}>
        <input type="text"
        placeholder="Enter City Name"
        value={city}
        onChange={(e)=>setCity(e.target.value)}/>
     </form>

    </div>
)
}