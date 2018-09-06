import React from 'react'
import { Link } from 'react-router-dom'
const ArtistCard = (props) => {
  return (
     <div className="col s12 m6">
          <div className="card horizontal hoverable">
               <div className="card-image">
                    <img src={props.img} style={{width:"160px",height:"160px"}}/>
               </div>
               <div className="card-stacked">
                    <div className="card-content">
                         <h5>{props.name}</h5>
                    </div>
                    <div className="card-action border-none right-align">
                      <Link to="/" className='teal-text' data-id={props.id} data-name={props.name} onClick={event => props.getAlbums(event)}>Albums</Link>
                  </div>
               </div>
          </div>
     </div>
  )
}

export default ArtistCard
