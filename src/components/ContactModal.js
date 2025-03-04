import React, { useContext } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MyContext from '../context/context';
import NetlifyForm from './NetlifyForm';
import ServerlessMail from './ServerlessMail';

function ContactModal() {

    const {showContactModal,setShowContactModal} =  useContext(MyContext);


  return (
   <>
  

      <Modal show={showContactModal} onHide={() => setShowContactModal(false)}>
        <Modal.Header closeButton className='modal_header' >
         
        </Modal.Header>
        <Modal.Body>

         <ServerlessMail />
        
        </Modal.Body>
    
      </Modal>
   </>
  )
}

export default ContactModal