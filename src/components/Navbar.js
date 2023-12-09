import React,{useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import MyContext from '../context/context';

function NavBar() {
  const navigate= useNavigate();

  const {setShowContactModal} = useContext(MyContext);

  useEffect(()=>{
    const links = document.querySelectorAll('.navlink');
    links.forEach(link => {
      link.addEventListener('click',function handleClick(event){
        console.log('clicked');
       const target = link.getAttribute('to');
       navigate(target);
  
      })
    })
    },[]);
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id='navbar'>
      <Container>
        <Navbar.Brand to='/' href="#" className='navlink'>Osborn Maja</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>

          <Nav >
          
            <Nav.Link to="/websites" className='navlink' >Websites</Nav.Link>
            <Nav.Link to="/apps" className='navlink'>Apps</Nav.Link>
            <Nav.Link to="/about" className='navlink' >About</Nav.Link>
            <Nav.Link onClick={() =>setShowContactModal(true) }>Inquires</Nav.Link>
            

      
            
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
  )
}

export default NavBar