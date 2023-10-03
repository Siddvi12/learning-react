import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] =useState(15)

  

  function addValue() {
    console.log("value added", Math.random());
    // counter = counter+1;
    setCounter(counter +1);
    console.log(counter)
  }

  function removeValue(){
     setCounter(counter =counter-1)
  }
  

  return (
    <>
     <h1>Chai aur React</h1>
     <h2>counter valur: {counter}</h2>
     <button onClick={addValue}>add value{counter} </button>
     <br />
     <button onClick={removeValue}>remove value {counter}</button>
    </>
  )
}

export default App
