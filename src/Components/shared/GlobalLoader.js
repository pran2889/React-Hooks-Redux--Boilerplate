import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CircularProgress from '@material-ui/core/CircularProgress';


const style = {
  position: 'absolute',
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 150,
  height:100,
  bgcolor: "white",
  boxShadow: 7,
  p: 4,
};

const GlobalLoader=(props)=>{
  return (
    <div>
      <Modal
        open={props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <CircularProgress size={40} color="primary" />
        </Box>
      </Modal>
    </div>
  );
}
export default GlobalLoader