import React, {useState} from 'react';

const SearchWeather = props => {

    const [ city, setCity ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.searchWeather(city);
    };

    return(
        
            <div className = "container">
                <div className = "row">
                    <div className = "d-block mx-auto">
                        <form className = "form-inline" onSubmit={handleSubmit}>
                            <div className = "form-group mx-sm-3 mb-2">
                                <input className = "form-control" type='text' placeholder='search a city...' name='city' onChange={(e) => setCity(e.target.value)}/>
                            </div>           
                            <button className = "btn btn-primary mb-2" type = "submit">Search</button>                            
                        </form>
                        <p id = "error"></p> 
                    </div>                       
                </div>
             </div>
               
        
    );
}

export default SearchWeather;