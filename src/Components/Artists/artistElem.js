import React from 'react'

const ArtistElem = (props) => {
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
               </div>
          </div>
     </div>
  )
}

export default ArtistElem
