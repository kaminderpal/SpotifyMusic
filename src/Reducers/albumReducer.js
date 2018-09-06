import { SEARCHING_ARTISTS_ALBUMS, SEARCH_ARTISTS_ALBUMS,SEARCH_ARTISTS_ALBUMS_ERROR,GETTING_ALBUM,GET_ALBUM,GET_ALBUM_ERROR } from './Actions/types';
import mapKeys from 'lodash/mapKeys'
export default function( state = {} ,action ){
     switch (action.type){
          case SEARCHING_ARTISTS_ALBUMS:
               return { ...state, isSearchingAlbums : true };
           case SEARCH_ARTISTS_ALBUMS :
                  return { 
                            ...state, 
                            albums  : mapKeys(action.payload.data.items,'id'), 
                            artistName : action.artistName,
                            isSearchingAlbums : action.isSearchingAlbums 
                        };
            case SEARCH_ARTISTS_ALBUMS_ERROR :
                return { ...state,error : action.payload,isSearchingAlbums: false }
            case GETTING_ALBUM : 
                return { ...state, isGettingAlbum : true };
            case GET_ALBUM: 
                state.albums[action.albumId].popularity = action.payload.data.popularity;
                state.albums[action.albumId].genres = action.payload.data.genres;
                state.albums[action.albumId].tracks = action.payload.data.tracks.items;
                return {...state, albums: mapKeys(state.albums,"id")}
            case GET_ALBUM_ERROR:
                return { ...state , error: action.payload, isGettingAlbum : false }
           default :
                  return state;
     }
}