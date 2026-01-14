

import './App.css'
import useFetch from './Hooks/useFetch'

function App() {
  
 const titleData=useFetch('https://jsonplaceholder.typicode.com/todos/1');

  return (
    <div>
      {JSON.stringify(titleData)}
    </div>
  )
}

export default App
