import {useSelector, useDispatch} from 'react-redux';

import { closeModal } from '../../redux/modals/reducer';

import ConfirmationModal from './ConfirmationModals/ConfirmationModal';


const MODAL_COMPONENTS = {
    CONFIRM_MODAL : ConfirmationModal, 
  /* other modals */
};

const RootModal =() => {
    const isOpen = useSelector(state => state.modal.isOpen); 
    const type = useSelector(state => state.modal.modalType); 
    const props = useSelector(state => state.modal.modalProps); 
    const dispatch = useDispatch();

   const closeModalDispatched = (response) => dispatch(closeModal(response));

    
    if (!type)
        return null; 
    const SpecificModal = MODAL_COMPONENTS[type];
    return <SpecificModal {...props} isOpen={isOpen} closeModal={closeModalDispatched}  />; 
};

export default RootModal;