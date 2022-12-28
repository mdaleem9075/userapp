import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
const {open,handleClose,handleDelete,index}=props
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2,mb:4 }}>
           Do you want to really delete?
          </Typography>
          <Button variant='contained' sx={{ mr: 25 }} onClick={handleClose} >cancel</Button>
          <Button variant='contained' color="error" onClick={()=>handleDelete(index) & handleClose()}>confirm</Button>
        </Box>
      </Modal>
    </div>
  );
}