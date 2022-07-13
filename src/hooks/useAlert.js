import {useSelector , useDispatch} from 'react-redux';
import { MESSAGES_TAGS } from '../constants/ErrorsMassages';

import { openAlert, closeAlert } from '../redux/alerts/reducer';

export const useAlert = (type , props = {}) => {
    if (!type)
        throw new Error(MESSAGES_TAGS.ALERT_TYPE_SENT);
    const isOpen = useSelector(state => state.alert.isOpen); 
    const types = useSelector(state => state.alert.types); 
    const dispatch = useDispatch(); 

    if (!types.find(eachType => eachType === type))
        throw new Error(MESSAGES_TAGS.ALERT_TYPE_EXIST);

    const setIsOpen = (value) => {
        if (typeof value !== 'boolean')
            dispatch(closeAlert()); 
        else 
        {
            if (value)
                dispatch(openAlert({type, ...props})); 
            else 
                dispatch(closeAlert()); 
        }
    };

    return [isOpen , setIsOpen];


};