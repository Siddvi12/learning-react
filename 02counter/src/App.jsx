import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// how to use hooks u have to learn

function App() {

  let [counter, setCounter] =useState(10) // yha value 10 hai but hum kuch bhi de skte hai mtlb kuch bhi
  // setCounter is a method
  // react bolta hai ki jab bhi UI updation hoga usee mai contro krunga by hooks

  

  function addValue() {
    // console.log("value added", Math.random());

    if(counter<20){
    // counter = counter+1; yha console log krne pe value to increase ho rhi hai but not showing in UI or on screen becoz yr to js hi hai but why not showing on screen UI updation
    // setCounter(counter); esa bhi likha ja skta tha
    setCounter(counter +1);
    // setCounter(counter+2)
    console.log(counter)
    }
  }

  function removeValue(){

// logic was that if counter value should not be negetive
    if (counter>0){
      setCounter(counter =counter-1);
    }
    //  setCounter(counter =counter-1)
  
}

  return (
    <>
     
     <h1>Chai aur React</h1>
     <h1>counter value: {counter}</h1>
     <button onClick={addValue}>add value {counter} </button>
     <br />
     <button onClick={removeValue}>remove value {counter}</button>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas quisquam at distinctio excepturi architecto voluptate similique fugit vero eum soluta consequatur velit recusandae itaque qui magni sed, vitae beatae quibusdam.</p>
    </>
  )
}

export default App
