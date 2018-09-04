import axios from 'axios';
import { AUTHENTICATING, AUTHENTICATED, SEARCHING_ARTISTS,SEARCH_ARTISTS } from './types';
import API from '../../Config/api';
import Session from '../../Config/util';

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
    axios.get(API.URL_SEARCH_ARTISTS+name,{
        headers : {
            Authorization : 'Bearer ' + Session.getToken().access_token
        }
    })
    .then( artists => dispatch({
         type : SEARCH_ARTISTS,
         payload : artists,
         isSearching : false
    }));
};
