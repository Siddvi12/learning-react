
import './App.css'
import Card from './component/card'
// import React , {useState} from 'react'

function App() {
  

  return (
    <>
      <h1 className='bg-green-400 p-4 rounded mb-4'>Tailwind test</h1>
      <Card username="Algolia" btnText="wanna know me" src="https://images.pexels.com/photos/8434877/pexels-photo-8434877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      <br />
      <Card username="maina" btnText="know more about me" src="https://images.pexels.com/photos/16943681/pexels-photo-16943681/free-photo-of-teenage-girl-sitting-with-her-eyes-closed-in-the-city-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>

    </>
  )
}

export default App
