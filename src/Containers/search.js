import React, { Component } from 'react'
import Header from '../Components/Header/header'
import debounce from 'lodash/debounce'
import {connect} from 'react-redux'
import { searchingArtists, searchArtists } from '../Reducers/Actions/actions'
import Spinner from '../Components/Spinner/spinner'
import Artists from '../Components/Artists/artists'
import { withRouter } from 'react-router-dom'
import ErrorModal from '../Components/ErrorModal/errorModal'
import PropTypes from 'prop-types'

export class Search extends Component {
  
  constructor(props) {
    super(props)
    this.state = { value : "" }
    this.getArtists = debounce(this.props.searchArtists,1000);
  }
  /**
   * By default show artists on search page.
   */
  componentDidMount(){
    this.props.searchingArtists();
    this.props.searchArtists("bob");
  }
  /**
   * Search artists when user type in search box.
   */
  onSearch = (e) => {
    const value = e.target.value ? e.target.value : "bob";
    this.props.searchingArtists();
    this.setState({ value : e.target.value });
    this.props.searchArtists(value);
  }
  
  render() {
    return (
      <div>
        <Header onSearch={this.onSearch.bind(this)} value={this.state.value} disabled={false} />
        { this.props.isSearching ? <Spinner/> : <Artists artists={this.props.artists} isSearching={this.props.isSearching} /> }
        { this.props.error ? <ErrorModal open={this.props.error}/> : null }
      </div>
    )
  }
}
Search.propTypes = {
  artists : PropTypes.array.isRequired,
  isSearching : PropTypes.bool
};
const mapStateToProps = state => ({
  artists : !state.search.artists ? [] : state.search.artists.items,
  isSearching : state.search.isSearching,
  error : state.search.error
});

export default withRouter( connect(mapStateToProps,{ searchingArtists, searchArtists })(Search));
