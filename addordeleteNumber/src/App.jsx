import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)
 // let counter = 5
  const addValue = () => {
    console.log("value added" , Math.random());
    counter = counter + 1
    setCounter(counter)
  }
  const deleteValue = () => {
    if(counter > 0){ 
    
    counter = counter - 1
   
    setCounter(counter)
  }
}

  return (
    <>
     <h1>hello yash </h1>
     <h2>Counter Value: {counter}</h2>
     <button onClick={addValue}>Add value</button>
     <br />
     <button onClick={deleteValue}>Delete value</button>
    </>
  )
}

export default App
