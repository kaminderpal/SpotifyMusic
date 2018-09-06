import React from 'react'
import AlbumCard from './albumCard';

const Albums = (props) => {
  const list = Object.keys(props.albums).map((key)=>{
      const obj = props.albums[key];
      return <AlbumCard  img={obj.images[0].url} name={obj.name} year={obj.release_date} genre={obj.genres} rating={obj.popularity} tracks={obj.tracks} key={key} />
  });
  return (
    <div className='container'>
          <div className='row'>
               {list}
          </div>
    </div>
  )
}

export default Albums
