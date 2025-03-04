import React, { useEffect } from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactModal from '../components/ContactModal'
import { Outlet } from 'react-router-dom'
import Trends from '../components/Trends'
import PageSkeleton from '../components/PageSkeleton'
import { useNavigation,useLocation } from 'react-router-dom'
import GoToBtn from '../components/GoToBtn'
import Blogs from '../components/Blogs'
import DribbbleShots from '../components/DribbbleShots'
import Modals from '../components/Modals'


function Root() {
  const navigation = useNavigation();
  const {pathname} = useLocation();

  useEffect(()=>{
   // Scroll to the top whenever the user navigates to a new page
   window.scrollTo(0, 0);
  },[pathname])


  return (
    <>
    { navigation.state === 'loading' ? 
  <PageSkeleton />
    : 
      <div>
      <NavBar />
    <ContactModal />
    <Outlet />
    <Blogs />
    <Trends />
    {/* <DribbbleShots /> */}
     <Footer /> 
     <GoToBtn />
    </div>
    }
   
    </>
  )
}

export default Root