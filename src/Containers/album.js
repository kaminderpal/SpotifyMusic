import React, { Component } from 'react'
import {connect} from 'react-redux'
import Header from '../Components/Header/header'
import Albums from '../Components/Album/albums'
import Spinner from '../Components/Spinner/spinner'
import { gettingAlbum , getAlbum  } from '../Reducers/Actions/albumAction'
export class Album extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       albums : this.props.albums
    }
  }
  
  componentDidMount(){
   Object.keys(this.props.albums).map((key)=>{
      this.props.getAlbum(key);
   });
  }
  
  render() {

    return (
      <div>
         <Header value={this.props.artistName} disabled={true} classname={`input_title`}/>
         { !this.props.albums ? <Spinner/> : <Albums albums={this.props.albums} /> }
      </div>
    )
  }
}
const mapStateToProps = state => ({
  albums: state.albums.albums,
  artistName : state.albums.artistName,
})
export default connect(mapStateToProps,{ gettingAlbum , getAlbum  } )(Album)
