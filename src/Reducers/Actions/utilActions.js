/**
 * Util actions for raising Error Modal
 * When token expires or deleted from storage.
 */
import Session from '../../Config/util';
import { SEARCH_ARTISTS_ERROR,LOG_OUT } from './types';
const initError = () => dispatch => {
     dispatch( {
         type : SEARCH_ARTISTS_ERROR,
         payload : {status : 401}
 } );
 }
export const getToken = () =>{
     const token =  Session.getToken();
     if( token === null ){
         initError();
     }
     else{
         return Session.getToken().access_token;
     }
 }
export const logout = () => dispatch => {
     dispatch({
         type : LOG_OUT,
         state : undefined
     }) 
 }