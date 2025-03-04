import React, { useContext, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import MyContext from '../context/context';
import Button from 'react-bootstrap/Button';

function Modals() {
 const {showDribbleModal, setShowDribbleModal,handleDribbleModalClose, handleDribbleModalShow} = useContext(MyContext)
  return (
    <>
      <Modal show={showDribbleModal} onHide={handleDribbleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDribbleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDribbleModalClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Modals