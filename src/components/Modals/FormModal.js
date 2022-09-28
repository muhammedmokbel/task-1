import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FormModal({isOpen, closeModal , title = '' , component:Component , ...rest }) {



  return (
    <div>
    
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => closeModal(false)}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
      >
        <DialogTitle>{title}</DialogTitle>

        <Component {...rest} />
    
      </Dialog>
    </div>
  );
}
