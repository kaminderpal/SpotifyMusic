import React from 'react'
import {Link} from 'react-router-dom';
const LogoutButton = (props) => {
  return (
    <div className='right' style={{marginRight:"10px"}}>
      <Link to="/" onClick={props.onClick} className="waves-effect waves-light btn">Log Out</Link>
    </div>
  )
}

export default LogoutButton
