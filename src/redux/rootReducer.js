import {combineReducers} from 'redux';

import modalReducer from './modals/reducer';
import alertReducer from './alerts/reducer'; 

export default combineReducers({
   modal : modalReducer, 
   alert : alertReducer
});