import React, {useState, useEffect} from 'react';
import WeatherCurrent from './WeatherCurrent';
import WeatherForecast from './WeatherForecast';
import SearchWeather from './SearchWeather';
import  '../App.css';

const Weather = () => {

    const [weatherData, setWeatherData] = useState([]);
    const [forecastData, setForecastData] = useState([]);    

    useEffect(() => {
        const getAll = async () => {

            let weather = await getWeather("Stockholm");
            let forecast = await getForecast("Stockholm");
            setWeatherData([weather]);
            setForecastData([forecast]);   
          };       
        getAll();       
      }, []);
    
    const getWeather = async (searchString) => {
        let data;        
        let city;
        city = `?q=${searchString}`;        
        let units="&units=metric";
        let api = "&appid=34ade633d0c2e3c56329e6d869685a4e";
        let url ="https://api.openweathermap.org/data/2.5/weather";      
        
        await fetch(`${url}${city}${units}${api}`)
        .then(res => {
            data = res.json();
        });
        return data;
    };

    const getForecast = async (searchString) => {
        let data;        
        let city;
        city = `?q=${searchString}`;        
        let units="&units=metric";
        let api = "&appid=34ade633d0c2e3c56329e6d869685a4e";
        let url ="https://api.openweathermap.org/data/2.5/forecast";      
        
        await fetch(`${url}${city}${units}${api}`)
        .then(res => {
            data = res.json();
        });        
        return data;
    };

    const handleSearchWeather = async (searchString) => {
        let weather = await getWeather(searchString);
        let forecast = await getForecast(searchString);
        if(weather.cod === 200){
        setWeatherData([weather]);
        setForecastData([forecast]);
        document.getElementById("error").innerHTML = "";
        }
        else
        {
            document.getElementById("error").innerHTML = "*City does not exist in database";
        }
    }

    return(
        <React.Fragment>
            <div className="jumbotron">
                <div className = "row">
                    <div className="d-block mx-auto">            
                        <h2 className = "display-4">Weather App</h2>
                    </div>
                </div>
            </div>
            <SearchWeather searchWeather = {handleSearchWeather} />                
            <WeatherCurrent weatherData = {weatherData} />
            <WeatherForecast forecastData = {forecastData} />
        </React.Fragment>
    );
}

export default Weather;