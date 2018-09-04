import { AUTHENTICATING, AUTHENTICATED } from './types';

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