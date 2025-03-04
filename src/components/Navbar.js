import React,{useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useNavigate,useLocation } from 'react-router-dom';
import { useContext } from 'react';
import MyContext from '../context/context';
import ProgressBar from 'react-bootstrap/ProgressBar';
import codetags from '../assets/images/html.png'
import { Link } from 'react-router-dom';
import { SiGoogledocs } from "react-icons/si";


function NavBar() {
  const navigate= useNavigate();
  const [showProgressBar,setShowProgressBar] = useState('none')
  const [animate,setAnimate] = useState(false);
  const {setShowContactModal,navBarIsOpen,toggleNavbar,setNavBarIsOpen} = useContext(MyContext);
 const location = useLocation();

 const [isHidden, setIsHidden] = useState(false); // Tracks whether the navbar is hidden
const [lastScrollY, setLastScrollY] = useState(0); // Tracks the last scroll position

useEffect(() => {
  const handleScroll = () => {
  const currentScrollY = window.scrollY;
  
  if (currentScrollY > lastScrollY && currentScrollY > 10) {
  // Hide navbar when scrolling down
  setIsHidden(true);
  console.log('Scrolling down');
  } else {
  // Show navbar when scrolling up
  setIsHidden(false);
  console.log('Scrolling up');
  }
  
  setLastScrollY(currentScrollY);
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);


   
  useEffect(()=>{
    const links = document.querySelectorAll('.navlink');
    // links.forEach(link => {
    //   link.addEventListener('click',function handleClick(event){
    //     console.log('clicked');
    //    const target = link.getAttribute('to');
    //    navigate(target);
    //   })
    // });
    //only run when user is not on current page
      if(location.pathname !== window.location.pathname){
     //dismiss navbar collapsible on small screen
       setNavBarIsOpen(false);
       //show & animate progressbar 
       setAnimate(true);
       setShowProgressBar('');
      }
    

  

    },[]);

    useEffect(() => {
      // Your code to run when the route changes
      console.log('Route changed:', location.pathname);

      // setTimeout(() => {
      // }, 2000);

         setAnimate(false);
      setShowProgressBar('none');  
      setNavBarIsOpen(false);

    }, [location]);
  
    const getNavLinkClass = (path) => {
      return location.pathname === path ? 'navlink active-nav-link' : 'navlink';
    };

  return (
    <>
     <ProgressBar  variant='success' animated={animate} now={100} style={{borderRadius:0,height:'10px', 
     display:showProgressBar}} />
    <Navbar expand="lg"  className="bg-body-tertiary" id='navbar' sticky={isHidden ? "":"top"}>
      <Container>
        <Navbar.Brand to='/' as={Link} className='navlink'> <img src={codetags} width={40} />  Osborn Maja</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar}/>
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end' in={navBarIsOpen}>

          <Nav >
          
            <Nav.Link to="/websites" className={getNavLinkClass('/websites')}   as={Link}>Websites</Nav.Link>
            <Nav.Link to="/apps" className={getNavLinkClass('/apps')}  as={Link}>Mobile apps</Nav.Link>
            <Nav.Link to="/about" className={getNavLinkClass('/about')} as={Link}>About</Nav.Link>
            {/* <Nav.Link to="/project/1" className='navlink'  as={Link}>Project</Nav.Link> */}
            <Nav.Link onClick={() =>setShowContactModal(true) }>Inquires</Nav.Link>
            <Nav.Link className='app-link bold d-flex align-items-center gap-05'
             href={`https://drive.google.com/file/d/1GGMxiR6LOuukiSrUTa4-DmgseEWIsBha/view?usp=sharing`}>
             <SiGoogledocs /> Resume
             </Nav.Link>
            

      
            
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </>
  )
}

export default NavBar