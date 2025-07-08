import React, { useEffect, useState } from "react";
import { FaStreetView } from "react-icons/fa";
import "./style.css";
import { FaCloudSun } from "react-icons/fa";

const Tempapp=()=>{
    
const[city,setCity]=useState(null);
const [wind, setWind] = useState(null);
const[search,setSearch]=useState("jalpaiguri");


useEffect(()=>{
    const fetchApi=async()=>{
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=bc3338c18d14439c2e6966979d9019c4`;

        const response= await fetch(url);
        const resjson =await response.json();
        setCity(resjson.main);
        setWind(resjson.wind);
    }
    fetchApi();
    },[search])

    return(
        <>

        <h1 className="logo">Weather Report <FaCloudSun/></h1>

        <div className="border">
            <div>
                <br/>
                <br/>
                <input type="search" value={search} className="input" onChange={(event)=>{
                            setSearch(event.target.value)
                }}/>
            </div>
                {!city?
                (
                    <div className="info">

                        <h1 className="loc">
                            <FaStreetView /> no place found
                        </h1>

                        <h1 className="temp">00°c</h1>

                        <h3 className="max">Min: 00°c | Max: 00°c</h3>
                        <hr className="line"/>  
                        <h3 className="realfeel">Feels Like: 00°c</h3>
                        <hr className="line"/>
                        <h3 className="humidity">Humidity: 00%</h3>
                        <hr className="line"/>
                        <h3 className="wind">Wind Speed: 00 km/h</h3>

                    </div>
                ):(
                <>  
                    <div className="info">
                    
                        <h1 className="loc">
                            <FaStreetView /> {search}
                        </h1>

                        <h1 className="temp">{Math.round(city.temp)}°c</h1>
                    
                        <h3 className="max">Min: {Math.round(city.temp_min - 1)}°c | Max: {Math.round(city.temp_max + 1) }°c</h3>
                        <hr className="line"/>
                        <h3 className="realfeel">Feels Like: {Math.round(city.feels_like)}°c</h3>
                        <hr className="line"/>
                        <h3 className="humidity">Humidity: {city.humidity}%</h3>
                        <hr className="line"/>
                        <h3 className="wind">Wind Speed: {(wind.speed * 3.6).toFixed(1)} km/h</h3>

                    </div>
                </>
                )}
          
        </div> 
        <p className="credit">~ Data provided in part by OpenWeatherMap API</p>
        </>
    )
}

export default Tempapp;