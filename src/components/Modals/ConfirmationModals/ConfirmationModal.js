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

export default function ConfirmationModal({isOpen, closeModal , title = '' , contant = '' , buttons = {success :'yes' , fail :'No'} }) {

  if (typeof buttons !== "object" || !buttons.success || !buttons.fail)
    throw new Error('invalid Button Object !'); 

    

  return (
    <div>
    
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => closeModal(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {contant}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => closeModal(false)}>{buttons.fail}</Button>
          <Button onClick={() => closeModal(true)}>{buttons.success}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
