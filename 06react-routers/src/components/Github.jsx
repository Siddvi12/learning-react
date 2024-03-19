import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
//use loader data to use loader in main.jsx in router
function Github() {


const [data, setData] =useState([])

//jab bhi page lode hoga ya dependensicy array me changese hoga useEffect call hota hai
    useEffect(()=>{

        fetch('https://api.github.com/users/Siddvi12')
        .then(Response => Response.json())
        .then(data=> {
            console.log(data);
            setData(data)
        })
    },[])


  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}
    <img  src={data.avatar_url} alt="Github" />
    <h1>Name:{data.name}</h1>
    <h2>public repos:{data.public_repos}</h2>
    <h2>repos_url:{data.repos_url}</h2>
    </div>
  )
}

export default Github