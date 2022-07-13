import {useSelector , useDispatch} from 'react-redux'
import { openModal, closeModal } from '../redux/modals/reducer'

export const useModal = (type, props={}) => {
    if (!type)
        throw new Error('No modal type found!')
    const isOpen = useSelector(state => state.modal.isOpen); 
    const actionResponse = useSelector(state => state.modal.actionResponse); 
    const dispatch = useDispatch();
    const setIsOpen = (value) => {
        if (typeof value !== 'boolean')
            dispatch(closeModal()); 
        else 
        {
            if (value)
                dispatch(openModal({type, props})); 
            else 
                dispatch(closeModal()); 
        }
    }


   
    return [isOpen, actionResponse, setIsOpen]; 
}