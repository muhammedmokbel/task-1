import {useSelector , useDispatch} from 'react-redux'
import { MESSAGES_TAGS } from '../constants/ErrorsMassages';
import { openModal, closeModal } from '../redux/modals/reducer'

export const useModal = (type, props={}) => {
    if (!type)
        throw new Error(MESSAGES_TAGS.MODAL_TYPE_SENT)
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