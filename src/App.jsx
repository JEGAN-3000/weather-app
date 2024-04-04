
import './App.css'
import WeatherDetails from './Components/WeatherDetails';

import searchIcon from './assets/search.png';
import humidityIcon from './assets/humidity.png';
import rainIcon from './assets/rain.png';
import snowIcon from './assets/snow.png';
import windIcon from './assets/wind.png';
import { useEffect, useState } from 'react';
import clearIcon from './assets/clear.png';
import drizzleIcon from './assets/drizzle.png';
import cloudIcon from './assets/cloud.png';
import Navbar from './Components/Navbar';


function App() {
  let apiKey="5c5a6ee2f19ad23c7ae597ba991c1c01";
  const [icon,setIcon]=useState(rainIcon);
  const [temp,setTemp]=useState(0);
  const [city, setCity] = useState("");
  const [country,setCountry]=useState("");
  const [lat,setLat]=useState(0);
  const [log,setLog]=useState(0);
  const [humidity,setHumidity]=useState(0);
  const [wind,setWind]=useState(0);
  const [text,setText]=useState("Madurai");
  const [cityNotFound,setCityNotFound]=useState(false);
  const [loading,setLoading] = useState(false);
  const [error,setError]=useState(null)
  const weatherIconMap={
    "01d":clearIcon,
    "01n":clearIcon,
    "02d":cloudIcon,
    "02n":cloudIcon,
    "03d":drizzleIcon,
    "03n":drizzleIcon,
    "04d":drizzleIcon,
    "04n":drizzleIcon,
    "09d":rainIcon,
    "09n":rainIcon,
    "10d":rainIcon,
    "10n":rainIcon,
    "13d":snowIcon,
    "13n":snowIcon
  }
  const Search=async()=>
  {
    setLoading(true)
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apiKey}&units=Metric`;
    try { 
      let response=await fetch(url);    
      var data= await response.json();
      if(data.cod==="404") {
        console.log("City not found");
        setCityNotFound(true);
        setLoading(false)
        return;
      }; 
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setTemp(Math.floor(data.main.temp));
      setCity(data.name);
      setCountry(data.sys.country);
      setLat(data.coord.lat);
      setLog(data.coord.lon);
      const weatherIconCode=data.weather[0].icon;
      setIcon(weatherIconMap[weatherIconCode] || clearIcon);     
      setCityNotFound(false);
    } catch (error) {
        console.error(error);
        setError("An error occur while fetching data of weather")
    }
    finally{
      setLoading(false)
    }
  }
  const handleCity=(e)=>{
    setText(e.target.value)
  }
  const onKeyDown=(e)=>{if (e.key==='Enter') Search();}
  useEffect(()=>{Search()},[]);
  return (
    <>
    <Navbar/>
     <div className="container" data-aos="zoom-in"   data-aos-duration="1000">
      <div className="input_container"  data-aos="fade-right" data-aos-duration="1000">
        <input type="text" className='cityInput' value={text} placeholder='Search city' onChange={handleCity} onKeyDown={onKeyDown}/>
        <div className="searchIcon" onClick={()=>Search()}>
          <img src={searchIcon} alt="search" />
        </div>
      </div>
        {loading && <div className="loadingMessage">
          Loading...
        </div>}
        {error && <div className="errorMessage">
          {error}
        </div>}
        {cityNotFound && <div className="cityNotFound">
        City not found
        </div>}
        {!loading && !cityNotFound && <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} log= {log} humidityIcon={humidityIcon} windIcon={windIcon} humidity={humidity} wind={wind}/>}
        <p className='copyright' data-aos="fade-up"
     data-aos-duration="1000">
          Designed by <span>Jegan</span>
        </p>
     </div>
        
    </>
  )
}

export default App
