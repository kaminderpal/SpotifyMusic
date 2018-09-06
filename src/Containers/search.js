import React, { Component } from 'react'
import Header from '../Components/Header/header'
import debounce from 'lodash/debounce'
import {connect} from 'react-redux'
import { searchingArtists, searchArtists } from '../Reducers/Actions/actions'
import { searchingArtistAlbum,searchArtistAlbum  } from '../Reducers/Actions/albumAction'
import Spinner from '../Components/Spinner/spinner'
import Artists from '../Components/Artists/artists'
import { Redirect } from 'react-router-dom'
import ErrorModal from '../Components/ErrorModal/errorModal';

export class Search extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       value : ""
    }
    this.getArtists = debounce(this.props.searchArtists,1000);
  }
  componentDidMount(){
    this.props.searchArtists("bob");
    
  }
  onSearch = (e) => {
    const value = e.target.value ? e.target.value : "bob";
    this.props.searchingArtists();
    this.setState({ value : e.target.value });
    this.props.searchArtists(value);
  }
  getAlbums(e){
    e.preventDefault();
    const id = e.target.dataset.id;
    const name = e.target.dataset.name;
    this.props.searchArtistAlbum(id,name);
  }
  render() {
    console.log(this.props.albums);
    return (
      <div>
        <Header onSearch={this.onSearch.bind(this)} value={this.state.value} disabled={false} />
        { this.props.isSearching ? <Spinner/> : <Artists artists={this.props.artists} isSearching={this.props.isSearching} getAlbums={this.getAlbums.bind(this)} /> }
        { this.props.error ? <ErrorModal open={this.props.error}/> : null }
        { this.props.albums ? <Redirect to="/album" push={true} /> : null }
      </div>
    )
  }
}
const mapStateToProps = state => ({
  artists : !state.search.artists ? [] : state.search.artists.items,
  isSearching : state.search.isSearching,
  error : state.search.error,
  albums : state.albums.albums
});

export default connect(mapStateToProps,{ searchingArtists, searchArtists, searchingArtistAlbum,searchArtistAlbum })(Search);
