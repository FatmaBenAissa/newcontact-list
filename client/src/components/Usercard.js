import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteuser } from '../redux/userslice';
import { useDispatch } from 'react-redux';
import Edituser from './Edituser';
function Usercard({el, ping, setping}) {
    const dispatch=useDispatch();
  return (
 <Card style={{ width: '18rem' ,margin:"10px"}}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{el?.name} {el?.lastname}</Card.Title>
        <Card.Text>
          {el?.email}
        </Card.Text>
        <Button variant="primary" onClick={()=>{dispatch(deleteuser(el?._id)); setping(!ping)}}>delete</Button>
        <Edituser el={el} ping={ping} setping={setping}/>
      </Card.Body>
    </Card>
  )
}

export default Usercard