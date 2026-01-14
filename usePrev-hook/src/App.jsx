
import { useState } from 'react'
import './App.css'
import usePrev from './Hook/usePrev';

function App() {
  
  const [count,setCount]=useState(0);
  const prev=usePrev(count);

  function increseHander(){
    setCount(c=>c+1);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={increseHander}>click me</button>
      <p>previous value of the count is {prev}</p>
    </div>
  )
}

export default App
