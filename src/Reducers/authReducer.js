import { AUTHENTICATING, AUTHENTICATED } from './Actions/types';

export default function( state = {} ,action ){
     switch (action.type){
          case AUTHENTICATING:
               return { ...state,isLoggedIn : false };
           case AUTHENTICATED :
                  const data = action.payload;
                  return { ...state, data : data, isLoggedIn : true };
           default :
                  return state;
     }
}