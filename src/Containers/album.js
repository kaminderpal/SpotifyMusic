import React, { Component } from 'react'
import {connect} from 'react-redux'
import Header from '../Components/Header/header'
import Albums from '../Components/Album/albums'
import Spinner from '../Components/Spinner/spinner'
import ErrorModal from '../Components/ErrorModal/errorModal'
import PropTypes from 'prop-types';
import { gettingAlbum , getAlbum ,searchingArtistAlbum,searchArtistAlbum } from '../Reducers/Actions/albumAction'

export class Album extends Component {
  constructor(props) {
    super(props)
    this.state ={
      isGettingAlbums : false
    }
  }
/**
 * Dispatch call for loading artists
 * Dispatch call for getting artists from server.
 */
  componentDidMount(){
    this.props.searchingArtistAlbum();
    this.props.searchArtistAlbum( this.props.location.state.id, this.props.location.state.name );
  }
/**
 * Update the UI after getting all albums.
 * Then get album details from server.
 * isGetting albums flag for not making again call for album details.
 */
  componentDidUpdate(){
    if(this.state.isGettingAlbums=== false){
        !this.props.isSearchingAlbums ?  Object.keys(this.props.albums).map( (key) => {
          this.props.getAlbum(key);
          this.setState({  isGettingAlbums : true });
        } ) : null;
    }
  }
  render() {
    return (
      <div>
         <Header value={this.props.location.state.name} disabled={true} classname={`input_title`}/>
         { this.props.isSearchingAlbums ? <Spinner/> : <Albums albums={this.props.albums} /> } 
         { this.props.error ? <ErrorModal open={this.props.error}/> : null }
      </div>
    )
  }
}
Album.propTypes = {
  albums : PropTypes.object.isRequired,
  artistName :PropTypes.string,
  isSearchingAlbums : PropTypes.bool
};
const mapStateToProps = state => ({
  albums: !state.albums.albums ? {} :state.albums.albums,
  artistName : state.albums.artistName,
  isSearchingAlbums : state.albums.isSearchingAlbums,
  error : state.search.error
})
export default connect(mapStateToProps,{ gettingAlbum , getAlbum ,searchingArtistAlbum,searchArtistAlbum } )(Album)
