import {configureStore} from '@reduxjs/toolkit'; 
import createSagaMiddleware from 'redux-saga';

// roots
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';


const sagaMiddleware = createSagaMiddleware() ; 

export default configureStore({
    reducer : rootReducer, 
    middleware : (getDefaultMiddleware) => {
        
       return [...getDefaultMiddleware({thunk : false}), sagaMiddleware];
    }
});

sagaMiddleware.run(rootSaga);