import { useState,useCallback } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [Password,setPassword]=useState("")
  const passwordGeneraor = useCallback(()=>{

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed)
    {str += '~`!@#$%^&*()_-{}[]:;/><,.|?';}
    if(charAllowed) 
    {str += '1234567890';}
    
    for (let index = 1; index <= length; index++) {
      
      let char = Math.floor(Math.random()*str.length + 1);
      
      pass = str.charAt(char)
      
    }
    setPassword(pass);
    

  }, [length, numberAllowed, charAllowed, setPassword])

  // passwordGeneraor(); we can not call it directly like this  we need to study one more hook

  // variable and defauld value printing in console //////////////
  console.log(length,numberAllowed,charAllowed,Password);



  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 ">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" 
          value={Password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input 
            type="range" 
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=> {setLength(e.target.value)}}
            />
            <label>length: {length}</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input
             type="checkbox" 
             defaultChecked={numberAllowed}
             id='numberInput'
             onChange={()=>
              // hame yha previous value ka acsess milta hai prev = previous value
              {setNumberAllowed((prev)=>!prev)}}
             />
             <label>Number</label>

             <input
             type="checkbox" 
             defaultChecked={charAllowed}
             id='numberInput'
             onChange={()=>
              // hame yha previous value ka acsess milta hai prev = previous value
              {setCharAllowed((prev)=>!prev)}}
             />
             <label>Alphabets</label>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
