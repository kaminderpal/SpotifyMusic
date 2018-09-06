import React,{Fragment} from 'react'
import Track from './track';

const TrackList = (props) => {
     
  return (
    <Fragment>
      { props.tracks.map((track)=>(
           <Track name={track.name} key={track.id}/>
      )) }
    </Fragment>
  )
}

export default TrackList
