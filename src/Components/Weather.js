import React, {useState, useEffect, createContext} from 'react';

const Weather = () => {

    useEffect(() => {
        const fetch = async () => {
          
             
          
            let fetchedWeather = await getWeather("Stockholm");
            let fetchedForecast = await getForecast("Stockholm");
            setWeatherData([fetchedWeather]);
            setForecastData([fetchedForecast]);
            setSearch(["Stockholm"]);
          }; 
       
        fetch();
       
      }, []);
    const [weatherData, setWeatherData] = useState([]);
    const [forecastData, setForecastData] = useState([]);
    const [search, setSearch] = useState("");
    const api = '34ade633d0c2e3c56329e6d869685a4e';

    const getWeather = async (city) => {
        let data;
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${api}&units=metric`)
        .then(res => {
            data = res.json();
        });
        return data;
    };

    const getForecast = async (city) => {
        let data;

        await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${api}&units=metric`)
        .then(res => {
            data = res.json();
        });
        return data;
    };  
}

export default Weather;