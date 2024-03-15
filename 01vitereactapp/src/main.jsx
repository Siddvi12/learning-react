// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


ReactDOM.createRoot(document.getElementById('root')).render(
  // yha .creatRoot() , expect krta hai ki ek html element select krke dedo jha render krna hai

    <App />,
    // we can write it like this also
    // App()
    // js k through html elements ko render kr skte ho
    // coustom tag
  
)
// crio method
// const reactElements = React.createElement("a", {href:"https:google.com"},"click me to visit google")

