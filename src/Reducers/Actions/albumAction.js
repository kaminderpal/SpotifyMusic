/**
 * Redux actions to get artists and thir albums.
 */
import axios from 'axios';
import { SEARCHING_ARTISTS_ALBUMS,SEARCH_ARTISTS_ALBUMS,SEARCH_ARTISTS_ALBUMS_ERROR,GETTING_ALBUM,GET_ALBUM,GET_ALBUM_ERROR } from './types';
import API from '../../Config/api';
import { getToken } from './utilActions';
export const searchingArtistAlbum = () => dispatch => {
     dispatch( {
                 type : SEARCHING_ARTISTS_ALBUMS
     } );
 }
 export const searchArtistAlbum = (id,name) => dispatch => {
     axios.get(API.getArtistAlbums(id),{
         headers : {
             Authorization : 'Bearer ' + getToken()
         }
     })
     .then( albums => dispatch({
          type : SEARCH_ARTISTS_ALBUMS,
          payload : albums,
          isSearchingAlbums : false,
          artistName : name
     })  ).catch( error => dispatch({
             type : SEARCH_ARTISTS_ALBUMS_ERROR,
             payload : error.response.data.error
     }) );
 };

 export const gettingAlbum = () => dispatch => {
     dispatch({  
         type : GETTING_ALBUM
     })
 }
 export const getAlbum = (id) => dispatch => {
    axios.get(API.getAlbumById(id),{
        headers : {
            Authorization : 'Bearer ' + getToken()
        }
    })
    .then( album => dispatch({
         type : GET_ALBUM,
         payload : album,
         isGettingAlbum : false,
         albumId : id
    })  ).catch( error => dispatch({
            type : GET_ALBUM_ERROR,
            payload : error.response.data.error
    }) );
};