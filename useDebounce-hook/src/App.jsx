
import { useEffect, useState } from 'react'
import './App.css'
import { useDebounce } from './Hook/useDebounce';

function App() {
  const [inputValue,setInputValue]=useState('');
  const debounceValue=useDebounce(inputValue,500); //initialy it takes inputValue, and wait for 500 ms , within this 500ms if inputValue changes then again inputValue are store in the useDebounce hook and again wait for 500ms time before backend api call.

  function changeHandler(e){
    setInputValue(e.target.value);
  }

  useEffect(()=>{

    //backend call(expensive operation)
    console.log('backend call');
    

  },[debounceValue])//when debouceValue changes then call the expensive function(backend call), rather than when input value change then expensive fun() call
  

  return (
    <div>
      <input type='text' placeholder='....search' onChange={changeHandler} value={inputValue} />
    </div>
  )
}

export default App
