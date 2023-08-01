
import './App.css';
import {useState} from 'react';
import axios, { Axios } from 'axios';


function App() {
  const [country,setCountry]=useState('default')
  const[official,setOfficial]=useState('default')
  const[capital,setCapital]=useState('default')
  const[population,setPopulation]=useState('default')
  const[region,setRegion]=useState('default')
  
  

  const receiveCountry=()=>{
    axios.get('https://restcountries.com/v3.1/all')
    .then(res=>{
      console.log(res);
      //ok so now we display the information from our api!, since there are roughly 190 nations we will generate a random number!//
      let random = Math.floor(Math.random()*(190-1)+1)
      setCountry(res.data[random].name.common)
      setOfficial(res.data[random].name.official)
      setCapital(res.data[random].capital)
      setPopulation(res.data[random].population.toLocaleString())
      setRegion(res.data[random].region)
    
      
      

    }).catch(err=>{
      console.log(err)

    })
  }
   
  return (
    <div className="App">
     <button onClick={receiveCountry}>country!</button>
    <p>COUNTRY {country}</p>
    <p>official {official}</p>
    <p>capital:{capital}</p>
    <p>Population is {population} people</p>
    <p>Region of world:{region}</p>
    </div>
  );
}

export default App;
