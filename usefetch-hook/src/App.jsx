
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data,setData]=useState({});

  
  useEffect(()=>{
    async function getData() {
      const response=await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const json=await response.json();
      setData(json);
    }
    getData();
  },[])
 

  return (
    <div>
      {data.title}
    </div>
  )
}

export default App
