import React, { useContext, useState } from 'react';
import styles from './Seperator.module.css';
import { SeperatorProps } from './SeperatorProps';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { CIconButton } from '../CIconButton';
import { TextField, useTheme } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { ConfirmModal } from '../ConfirmModal';
import { ModalContext } from '../ModalContext/ModalContext';

export const Seperator = ({
  title,
  changeSectionTitle,
  deleteSection,
}: SeperatorProps) => {
  const theme = useTheme();

  const [text, setText] = useState<string>(title);
  const [disabled, setDisabled] = useState<boolean>(true);
  const { handleModal } = useContext(ModalContext);
  const openConfirmModal = () => {
    handleModal(
      <ConfirmModal
        title={`This Action will delete all from "${title}" section`}
        onNext={deleteSection}
      />
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.separator}></div>
      <TextField
        variant="standard"
        value={text}
        sx={{
          '& .MuiInputBase-input.Mui-disabled': {
            opacity: 1,
            WebkitTextFillColor:
              theme.palette.mode === 'dark' ? 'white' : 'rgba(0, 0, 0, 1)',
            border: 'none',
          },
          '& .MuiInputBase-root.Mui-disabled': {
            border: 'none',
            outline: 'none',
          },
          input: { textAlign: 'center' },
        }}
        InputProps={{
          disableUnderline: disabled,
          style: { textAlign: 'center' },
        }}
        onChange={(e) => setText(e.target.value)}
        disabled={disabled}
      />
      {disabled ? (
        <CIconButton placement="left" onClick={() => setDisabled(!disabled)}>
          <DriveFileRenameOutlineIcon />
        </CIconButton>
      ) : (
        <CIconButton
          onClick={() => {
            changeSectionTitle(text);
            setDisabled(!disabled);
          }}
        >
          <CheckCircleIcon />
        </CIconButton>
      )}
      <CIconButton
        placement="right"
        title={'delete'}
        onClick={() => openConfirmModal()}
      >
        <DeleteIcon />
      </CIconButton>
      <div className={styles.separator}></div>
    </div>
  );
};
