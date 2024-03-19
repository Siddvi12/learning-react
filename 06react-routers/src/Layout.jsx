// import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'

// dynMically home about us pe ja ke isiliye ek outlet milta hai react router se
// jha jha outlet hoga vha ki cheeze change hoti rhegi
function Layout() {

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout