import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { adduser } from '../redux/userslice';
import { useDispatch } from 'react-redux';
function Adduser({ping, setping}) {
    const dispatch=useDispatch();
      const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newuser, setnewuser] = useState({
    name:"",
    lastname:"",
    dateofbirth:"",
    email:""
  })
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
   add user
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New user</Modal.Title>
        </Modal.Header>
        <Modal.Body>

             <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name"  onChange={(e)=>setnewuser({...newuser, name:e.target.value})}/>

      </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>lastname</Form.Label>
        <Form.Control type="text" placeholder="Enter lastname" onChange={(e)=>setnewuser({...newuser, lastname:e.target.value})} />

      </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Date of birth</Form.Label>
        <Form.Control type="date" placeholder="Enter date" onChange={(e)=>setnewuser({...newuser, date:e.target.value})} />

      </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>email</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={(e)=>setnewuser({...newuser, email:e.target.value})} />

      </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(adduser(newuser));alert("the new user is added"); setping(!ping)}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Adduser