import {useSelector , useDispatch} from 'react-redux';
import { MESSAGES_TAGS } from '../constants/ErrorsMassages';
import { openModal, closeModal } from '../redux/modals/slice';

export const useModal = (type, props={}) => {
    if (!type)
        throw new Error(MESSAGES_TAGS.MODAL_TYPE_SENT);
    const isOpen = useSelector(state => state.modal.isOpen); 
  
    const dispatch = useDispatch();
    const setIsOpen = (value, addtionalProps = {}) => {
        if (typeof value !== 'boolean')
            dispatch(closeModal()); 
        else 
        {
            if (value)
                dispatch(openModal({
                    type, props: {
                        ...props, 
                        ...addtionalProps
                }})); 
            else 
                dispatch(closeModal()); 
        }
    };


   
    return [isOpen, setIsOpen]; 
};