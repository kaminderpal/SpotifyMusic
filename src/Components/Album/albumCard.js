import React from 'react'
import TrackList from './trackList';
import StarRatingComponent from 'react-star-rating-component';

const rating = (rating) => {
  if( rating >= 80 && rating <= 100){
    return 5;
  }else if(rating >= 60 && rating <80 ){
    return 4;
  }else if( rating >= 40 && rating <60){
    return 3;
  }else if( rating >= 20 && rating < 40 ){
    return 2;
  }else{
    return 1;
  }
}

export const AlbumCard = (props) => {
  
  return (
    <div className='col s12 m4'>
      <div className="card z-depth-1 hoverable">
          <div className="card-image waves-effect waves-block waves-light">
               <img className="activator" src={props.img} />
          </div>
          <div className="card-content">
               <span className="truncate activator grey-text text-darken-4 f-16 f-w-600">{props.name}<i className="material-icons right cursor-pointer">more_vert</i></span>
               <p>Year - {props.year.split("-")[0]}</p>
               <p>Genre - { props.genre ?  !props.genre.length ? "Not Available" : props.genre : null  }</p>
          </div>
          <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Tracks<i className="material-icons right ">close</i></span>
              <ul className='collection'>
                
                { props.tracks  ? !props.tracks.length ? "No Tracks Available" :  <TrackList tracks={props.tracks}/> : null  }
              </ul>
          </div>
          <div className="card-action center">
            <div className='rating-stars'>
              <StarRatingComponent
                name="Album Rating" /* name of the radio input, it is required */
                value={ props.rating ? rating(props.rating) : 0 } /* number of selected icon (`0` - none, `1` - first) */
                starCount={5} /* number of icons in rating, default `5` */
                starColor={"#4db6ac"} /* color of selected icons, default `#ffb400` */
                emptyStarColor={"#333"} /* color of non-selected icons, default `#333` */
                editing={false} /* is component available for editing, default `true` */
              />
              </div>
          </div>
          </div>
    </div>
  )
}

export default AlbumCard
