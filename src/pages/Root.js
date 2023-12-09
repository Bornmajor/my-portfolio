import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactModal from '../components/ContactModal'
import { Outlet } from 'react-router-dom'
function Root() {
  return (
    <>
    <NavBar />
    <ContactModal />
    <Outlet />
     <Footer />
    </>
  )
}

export default Root