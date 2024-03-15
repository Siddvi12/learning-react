
import './App.css'
import Card from './component/card'
// import React , {useState} from 'react'

function App() {

  let newArr =[1,2,2]
  
let myObj ={
name:"vikash"
}
  return (
    <>
      <h1 className='bg-green-400 p-4 rounded mb-4'>Tailwind test</h1>
      <p>we have passed an object and an arry inside our card component</p>
      <Card myArr={newArr} someObj={myObj} username="Algolia" btnText="wanna know me" src="https://images.pexels.com/photos/8434877/pexels-photo-8434877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" work="software engg"/>
      <br />
      <Card username="maina" btnText="know more about me" src="https://images.pexels.com/photos/16943681/pexels-photo-16943681/free-photo-of-teenage-girl-sitting-with-her-eyes-closed-in-the-city-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" work="data analyst"/>
      <br />
      <Card username="nana" btnText="mobile legend" src="https://images.pexels.com/photos/7915286/pexels-photo-7915286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" work="mobile game char"/>

    </>
  )
}

export default App
