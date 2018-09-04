import { SEARCHING_ARTISTS, SEARCH_ARTISTS } from './Actions/types';

export default function( state = {} ,action ){
     switch (action.type){
          case SEARCHING_ARTISTS:
               return { ...state, isSearching : true };
           case SEARCH_ARTISTS :
                  return { ...state, artists : action.payload.data.artists, isSearching : action.isSearching };
           default :
                  return state;
     }
}