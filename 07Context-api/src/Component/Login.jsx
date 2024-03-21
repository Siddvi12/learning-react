import React ,{useContext, useState} from 'react'
import UserContext from '../Context/UserContext'
function Login() {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [password1, setPassword1] = useState('')



const {setUser} =useContext(UserContext)
const handleSubmit =(e) => {
    e.preventDefault()
    // jo kuch bhi setUser me hoga vo user ki value ho jaegi
    setUser({username,password,password1})
}
// mujhe input samjne me thoda problm aaya
// first vala in input 
// sec on change event
  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username'/>

{" "}

        <input type="text" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'/>
        <button onClick={handleSubmit}>Submit</button>

        <input type="text" 
        value={password1}
        onChange={(e) => setPassword1(e.target.value)}
        placeholder='password1'/>
     

    </div>
  )
}

export default Login