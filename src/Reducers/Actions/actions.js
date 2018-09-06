import axios from 'axios';
import { AUTHENTICATING, AUTHENTICATED, SEARCHING_ARTISTS,SEARCH_ARTISTS,SEARCH_ARTISTS_ERROR } from './types';
import API from '../../Config/api';
import { getToken } from './utilActions';

export const authenticating = () => dispatch => {
     dispatch( {  
                    type : AUTHENTICATING,
                    isLoggedIn : false
                } 
     );
};

export const authenticated = (data) => dispatch => {
     dispatch( {  
                    type : AUTHENTICATED,
                    isLoggedIn : true,
                    payload : data
               } 
     );
}

export const searchingArtists = () => dispatch => {
    dispatch( {
                type : SEARCHING_ARTISTS
    } );
}
export const searchArtists = (name) => dispatch => {
    axios.get(API.getArtists(name),{
        headers : {
            Authorization : 'Bearer ' + getToken()
        }
    })
    .then( artists => dispatch({
         type : SEARCH_ARTISTS,
         payload : artists,
         isSearching : false
    })  ).catch( error => dispatch({
            type : SEARCH_ARTISTS_ERROR,
            payload : error.response.data.error
    }) );
};

