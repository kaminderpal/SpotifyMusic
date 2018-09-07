import React from 'react'

const NoMatch = (props) => {
  return (
    <div className='center'>
      <h4>No Page {props.location.pathname.substring(1,props.location.pathname.length)} Found</h4>
    </div>
  )
}

export default NoMatch
