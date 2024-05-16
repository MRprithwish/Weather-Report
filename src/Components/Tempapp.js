import React, { useEffect, useState } from "react";
import { FaStreetView } from "react-icons/fa";
import "./style.css";

const Tempapp=()=>{
const[city,setCity]=useState(null);
const[search,setSearch]=useState("jalpaiguri");

useEffect(()=>{
    const fetchApi=async()=>{
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=bc3338c18d14439c2e6966979d9019c4`;

        const response= await fetch(url);
        const resjson =await response.json();
        setCity(resjson.main);
    }
    fetchApi();
    },[search])

    return(
        <div className="border">
                <div><br/>
                    <br/>
                    <input type="search" value={search} className="input" onChange={(event)=>{
                            setSearch(event.target.value)
                    }}/>
                </div>
                {!city?(<h1 className="nodata">No data found</h1>):(<>  
                <div className="info">
                <br/>
                    <br/>
                    <h1 className="loc">
                    <FaStreetView />{search}
                    </h1>
                    <h1 className="temp">{city.temp}°c</h1>
                    
                    <h3 className="max">Min:{city.temp_min}°c | Max:{city.temp_max}°c</h3>
                    <br/>
                    <br/>
                    
                    <br/>
                    <br/>
                </div>
                </>)}
          
        </div> 
    )
}

export default Tempapp;