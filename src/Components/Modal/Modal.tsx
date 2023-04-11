import React, { useContext, useEffect } from 'react';
import { Box, Modal as MuiModaL } from '@mui/material';
import { ModalContext } from '../ModalContext/ModalContext';

export const Modal = () => {
  const { modal, handleModal, modalContent, callBack } =
    useContext(ModalContext);
  useEffect(() => {
    console.log(callBack);
  }, [callBack]);
  return (
    <MuiModaL onClose={() => handleModal()} open={modal}>
      <Box sx={style}>{modalContent}</Box>
    </MuiModaL>
  );
};

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
