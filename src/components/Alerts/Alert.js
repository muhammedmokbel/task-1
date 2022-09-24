import * as React from 'react';
import {useSelector , useDispatch} from 'react-redux';

import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import MuiAlert from "@mui/material/Alert";

import { closeAlert } from '../../redux/alerts/slice';
/*eslint-disable */

const AlertBar = React.forwardRef(function AlertBar(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const TransitionLeft = (props) => {
  return <Slide {...props} direction="right" />;
};

const Alert = () => {
  const state = useSelector(state => state.alert); 
  const dispatch = useDispatch(); 

  const { 
    isOpen, 
    anchor , 
    message , 
    hideDuration , 
    type  , 
   } = state;

   const handleCloseAlertDispatched = () => dispatch(closeAlert());

  
 



  return (
    <div>
   
      <Snackbar
        anchorOrigin={anchor }
        open={isOpen}
        onClose={handleCloseAlertDispatched}
        message={message}
        key={anchor.vertical + anchor.horizontal}
        TransitionComponent={TransitionLeft}
        autoHideDuration={hideDuration}>
          <AlertBar
          onClose={handleCloseAlertDispatched}
          severity={type}
          sx={{ width: "100%" }}
        >
          {message}
        </AlertBar>
        </Snackbar>
    </div>
  );
};

export default Alert; 
