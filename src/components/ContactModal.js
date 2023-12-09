import React, { useContext } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MyContext from '../context/context';

function ContactModal() {
    
    const {showContactModal,setShowContactModal} =  useContext(MyContext)


  return (
   <>
  

      <Modal show={showContactModal} onHide={() => setShowContactModal(false)}>
        <Modal.Header closeButton className='modal_header' >
       
        </Modal.Header>
        <Modal.Body>
        <form action="" method="post">
<div className="form-floating mb-3">
<input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required />
<label for="floatingInput">Your email address</label>
</div>

<div class="form-floating mb-3">
<select class="form-select" id="floatingSelect" aria-label="Floating label select example">
    <option selected>Choose an item</option>
    <option value="1">App</option>
    <option value="2">Website</option>
    <option value="3">others</option>
  </select>
  <label for="floatingSelect">Product type</label>
</div>

<div class="form-floating">
<textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" required></textarea>
<label for="floatingTextarea2">More details</label>
</div>

<button type='submit' class='btn btn-success mt-3'>Send</button>

</form>
        </Modal.Body>
    
      </Modal>
   </>
  )
}

export default ContactModal