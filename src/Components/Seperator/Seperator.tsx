import React, { useState } from 'react';
import styles from './Seperator.module.css';
import { SeperatorProps } from './SeperatorProps';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { CIconButton } from '../CIconButton';
import { TextField, useTheme } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';

export const Seperator = ({
  title,
  changeSectionTitle,
  deleteSection,
}: SeperatorProps) => {
  const theme = useTheme();

  const [text, setText] = useState<string>(title);
  const [disabled, setDisabled] = useState<boolean>(true);
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
            console.log(text);
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
        onClick={() => {
          deleteSection();
        }}
      >
        <DeleteIcon />
      </CIconButton>
      <div className={styles.separator}></div>
    </div>
  );
};
