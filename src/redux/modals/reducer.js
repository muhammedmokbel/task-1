import {createSlice} from '@reduxjs/toolkit';


const modalSlice = createSlice({
    name : 'modal', 
    initialState : {
        isOpen : false , 
        modalType : '', 
        modalProps : {}, 
        actionResponse : false 
    }, 
    reducers : {
        openModal : (state , action) => {
            state.isOpen = true ; 
            state.modalType = action.payload.type ; 
            state.modalProps = action.payload.props ; 
        }, 
        closeModal : (state , action) => {
            state.isOpen = false; 
            state.actionResponse = action.payload;
        }
        
    }, 


});

export const {openModal, closeModal}  = modalSlice.actions; 
export default modalSlice.reducer; 