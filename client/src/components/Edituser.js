import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { useDispatch } from 'react-redux';
import { edituser } from '../redux/userslice';
function Edituser({el, ping, setping}) {
    const dispatch=useDispatch();
      const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edited, setedited] = useState({
    name:el?.name,
    lastname:el?.lastname,
    dateofbirth:el?.dateofbirth,
    email:el?.email
  })
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
   edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>edit user</Modal.Title>
        </Modal.Header>
        <Modal.Body>

             <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder={el?.name} onChange={(e)=>setedited({...edited, name:e.target.value})}/>

      </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>lastname</Form.Label>
        <Form.Control type="text" placeholder={el?.lastname} onChange={(e)=>setedited({...edited, lastname:e.target.value})} />

      </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Date of birth</Form.Label>
        <Form.Control type="date" placeholder="Enter date" onChange={(e)=>setedited({...edited, date:e.target.value})} />

      </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>email</Form.Label>
        <Form.Control type="text" placeholder={el?.email} onChange={(e)=>setedited({...edited, email:e.target.value})} />

      </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(edituser({id:el?._id, edited})); setping(!ping)}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edituser