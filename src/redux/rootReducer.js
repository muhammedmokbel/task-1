import {combineReducers} from 'redux'

import modalReducer from './modals/reducer'

export default combineReducers({
   modal : modalReducer
})