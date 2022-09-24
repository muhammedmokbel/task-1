import {combineReducers} from 'redux';

import modalReducer from './modals/slice';
import alertReducer from './alerts/slice'; 

export default combineReducers({
   modal : modalReducer, 
   alert : alertReducer
});