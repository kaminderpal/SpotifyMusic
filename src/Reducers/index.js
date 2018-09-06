import { combineReducers } from 'redux';
import authReducer from './authReducer';
import searchReducer from './searchReducer'
import albumReducer from './albumReducer'

export default combineReducers({
     auth : authReducer,
     search : searchReducer,
     albums : albumReducer
});