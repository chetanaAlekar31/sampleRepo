//import { Search } from '@mui/icons-material';
import axios from 'axios';
import React,{ useState} from 'react'
//import Apicall from './AxiosCall';

import "./index.css"
function App() {
  const [data,setData] = useState({})
  const[location,setLocation]=useState('')
  const url = (`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=18ba290a616fc56438f6b9070e07074f`)
  const SearchLocation=(event)=>{
    if(event.key ==='Enter'){
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)
      })
    //Apicall.get(`weather?q=${Search}&appid=18ba290a616fc56438f6b9070e07074f`)
    //.then((resp)=>{
    
      //setData(resp.data)
   // })
    setLocation('')
    }
 }

 
  return (
    <div className='App'>
      <div className='search'>
        <input
        // style={
        //   {
        //     width:'15rem',
        //     height: '2rem'
        //   }
        // }
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={SearchLocation}
        placeholder='Enter Location'
        type='text'/>
      </div>
      
      <div className='container'>
        <div className='top'>
        
          <div className='location'>
          
           <p>{data.name}</p>
          </div>
          <div className='teamp'>
          
          {data.main ? <h1 className='bold'>{data.main.temp}°C</h1>: null}
          </div>
          <div className='description'>
            {data.weather ? <h2>{data.weather[0].main}</h2>: null}
           
          </div>
        </div>
        {data.name != undefined &&
        
        <div className='bottom'>
          <div className='feels'>
          {data.main ? <p className='bold'>{data.main.feels_like}°C</p>: null}
           
            <p>Feels like</p>
          </div>
          <div className='Humidity'>
          {data.main ? <p className='bold'>{data.main.humidity}%</p>: null}
            
            <p>Humidity</p>

          </div>
          <div className='Wind'>
          {data.Wind? <p className='bold'>{data.main.Wind.speed}MPH</p>: null}
            
            <p>Wind speed</p>
          </div>
        </div>
}
      </div>
      
    </div>
    

   
  );
}

export default App;
