import React from 'react'
const Track = (props) => {
  return (
    <li className='collection-item'>{props.number} . {props.name}</li>
  )
}

export default Track
