import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15) //15 is the default value that we want set
  //let counter = 5

  const addValue = () => {
    console.log("clicked", counter);
    //counter++;
    if(counter<20){
      counter = counter + 1;
    
      setCounter(counter);
    }
  
  }

  const removeValue = () => {
    if(counter>0){
      counter = counter-1;
      setCounter(counter);
    }
    
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value</button>
      <br/>
      <button
      onClick={removeValue}
      >Remove Value</button>
      <footer>footer: {counter}</footer>
    </>
  )
}

export default App
