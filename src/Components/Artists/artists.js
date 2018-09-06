import React from 'react'
import ArtistCard from './artistCard';
import logo from '../../Assets/default.jpg'
import NotFound from '../NotFound/notfound';
const Artists = (props) => {
  let list = [];
     if( props.artists.length > 0 ){
          list = props.artists.map( function(artist,index){
               var url = artist.images.length ? artist.images[0].url : logo
               return  <ArtistCard  img={url} name= {artist.name}  key={artist.id} id={artist.id} getAlbums={props.getAlbums}  />
          })
     }
  return (
    <div className='container'>
          <div className='row'>
               {  list.length > 0 && !props.isSearching ? list : <NotFound/> }
          </div>
    </div>
  )
}

export default Artists
