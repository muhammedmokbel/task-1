import {createSlice} from '@reduxjs/toolkit';


const alertSlice = createSlice({
    name : 'alert', 
    initialState : {
        isOpen : false , 
        anchor : {vertical : 'top' , horizontal : 'left'}, 
        type : 'success' , 
        message : '', 
        hideDuration : null , 
        types : ['success', 'error' , 'warning' , 'info']
    }, 
    reducers : {
        openAlert  : (state, action) => {
          
            state.isOpen = true;  
            state.anchor =action.payload.anchor || state.anchor;
            state.type = action.payload.type || state.type;
            state.message = action.payload.message;
            state.hideDuration = action.payload.duration;
        },
        closeAlert : state => {
            state.isOpen = false ;
        }
    }
});

export const {openAlert, closeAlert}  = alertSlice.actions; 
export default alertSlice.reducer; 