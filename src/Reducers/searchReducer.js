import { SEARCHING_ARTISTS, SEARCH_ARTISTS,SEARCH_ARTISTS_ERROR } from './Actions/types';

export default function( state = {} ,action ){
     switch (action.type){
          case SEARCHING_ARTISTS:
               return { ...state, isSearching : true };
           case SEARCH_ARTISTS :
                  return { ...state, artists : action.payload.data.artists, isSearching : action.isSearching };
            case SEARCH_ARTISTS_ERROR :
                return { ...state,error : action.payload,isSearching: false }
           default :
                  return state;
     }
}