import React from 'react'
import { useSelector } from 'react-redux';
import Usercard from './Usercard';

function Userlist({ping, setping}) {
    const users=useSelector((state)=>state.user.userlist);
    console.log(users)
  return (
    
    <div className='data'>
        {users?.map((el)=><Usercard el={el} ping={ping} setping={setping}/>)}
    </div>
  )
}

export default Userlist