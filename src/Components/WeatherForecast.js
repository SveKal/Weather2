import React from 'react';

const WeatherForecast = props => {      

      let forecast = props.forecastData.map(d => {
        return(
            <div className = "container" key = '0'>
                <h3 id = "fore">5-Day forecast for {d.city.name}</h3>
            <div className = "card-deck" key = {d.city}>
                <div className = "card text-center" key = '1'>
                    <h5 className = "card-header bg-primary text-white">{new Date(d.list[7].dt_txt).toLocaleString('en-GB').substring(0,10)}</h5>
                    <div className = "card-body">
                        <img src={`http://openweathermap.org/img/wn/${d.list[7].weather[0].icon}.png`} alt = "icon" />   
                        <p className = "card-text">&#8595; {Math.round(d.list[7].main.temp_min)} °C</p>
                        <p className="card-text">&#8593; {Math.round(d.list[7].main.temp_max)} °C</p>
                    </div>
                </div>
                <div className="card text-center" key = '2'>
                    <h5 className="card-header bg-primary text-white">{new Date(d.list[15].dt_txt).toLocaleString('en-GB').substring(0,10)}</h5>
                    <div className="card-body">
                        <img src={`http://openweathermap.org/img/wn/${d.list[15].weather[0].icon}.png`} alt = "icon" />   
                        <p className="card-text">&#8595; {Math.round(d.list[15].main.temp_min)} °C</p>
                        <p className="card-text">&#8593; {Math.round(d.list[15].main.temp_max)} °C</p>
                    </div>
                </div>
                <div className="card text-center" key = '3'>
                    <h5 className="card-header bg-primary text-white">{new Date(d.list[23].dt_txt).toLocaleString('en-GB').substring(0,10)}</h5>
                    <div className="card-body">
                        <img src={`http://openweathermap.org/img/wn/${d.list[23].weather[0].icon}.png`} alt = "icon" />   
                        <p className="card-text">&#8595; {Math.round(d.list[23].main.temp_min)} °C</p>
                        <p className="card-text">&#8593; {Math.round(d.list[23].main.temp_max)} °C</p>
                    </div>
                </div>
                <div className="card text-center" key = '4'>
                    <h5 className="card-header bg-primary text-white">{new Date(d.list[31].dt_txt).toLocaleString('en-GB').substring(0,10)}</h5>
                    <div className="card-body">
                        <img src={`http://openweathermap.org/img/wn/${d.list[31].weather[0].icon}.png`} alt = "icon" />   
                        <p className="card-text">&#8595; {Math.round(d.list[31].main.temp_min)} °C</p>
                        <p className="card-text">&#8593; {Math.round(d.list[31].main.temp_max)} °C</p>
                    </div>
                </div>
                <div className="card text-center" key = '5'>
                    <h5 className="card-header bg-primary text-white">{new Date(d.list[39].dt_txt).toLocaleString('en-GB').substring(0,10)}</h5>
                    <div className="card-body">
                        <img src={`http://openweathermap.org/img/wn/${d.list[39].weather[0].icon}.png`} alt = "icon" />   
                        <p className="card-text">&#8595; {Math.round(d.list[39].main.temp_min)} °C</p>
                        <p className="card-text">&#8593; {Math.round(d.list[39].main.temp_max)} °C</p>
                    </div>
                </div>
            </div>
            </div>
        );
    });
        

  
    return <>{forecast}</>;

}
export default WeatherForecast;