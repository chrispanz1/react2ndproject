import './App.css';
import {useState} from 'react';
import axios from 'axios';



function App() {
  //we use the use state hook to use a setter function to set a random quote from the api!//
  const[quote,setQuote]=useState('')
  const[author,setAuthor]=useState('')
  const getQuote=()=>{
    axios.get('https://api.quotable.io/random')
    .then(res=>{
      console.log(res.data.content)
      setQuote(res.data.content)
      setAuthor(res.data.author)
      
      

    }).catch(err=>{
      console.log(err)

    })
  }
  return (
    <div className='App'>
      <button onClick={getQuote}>get inspiring quote</button>
      {quote && <p className='quote'>{quote}</p>}
      {author && <p className='author'>{author}</p>}

      
      
    </div>
  )
}

export default App