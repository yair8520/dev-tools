import React, { useContext } from 'react';
import { Box, Modal as MuiModaL } from '@mui/material';
import { ModalContext } from '../ModalContext/ModalContext';

export const Modal = () => {
  const { modal, handleModal, modalContent } = useContext(ModalContext);
  const contentProps = {
    ...(typeof modalContent === 'string' ? {} : { handleModal }),
  };

  return (
    <MuiModaL onClose={() => handleModal()} open={modal}>
      <Box sx={style}>
        {React.isValidElement(modalContent)
          ? React.cloneElement(modalContent, {
              ...modalContent.props,
              ...contentProps,
            })
          : modalContent}
      </Box>
    </MuiModaL>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
  borderRadius: '8px',
  padding: '16px',

  '@media (max-width: 600px)': {
    minWidth: '90vw',
    width: 'auto',
  },
};
