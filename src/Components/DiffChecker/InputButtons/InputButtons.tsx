import React from 'react';
import styles from './InputButtons.module.css';
import { InputButtonsProps } from './InputButtonsProps';
import { IconButton, InputAdornment } from '@mui/material';
import {
  Description,
  CallReceivedSharp,
  CallMadeSharp,
} from '@material-ui/icons';
import {
  handleCopy,
  handleFile,
  handlePaste,
} from '../../../Helpers/Clipboard';
export const InputButtons = ({ onChange, value, type }: InputButtonsProps) => {
  return (
    <InputAdornment className={styles.container} position="end">
      <IconButton onClick={() => handleCopy(value)}>
        <CallMadeSharp />
      </IconButton>
      <IconButton onClick={() => handlePaste(onChange)}>
        <CallReceivedSharp />
      </IconButton>
      <IconButton onClick={() => {}}>
        <input
          type="file"
          id={`fileInput${type}`}
          onChange={(e) => handleFile(e, onChange)}
          style={{ display: 'none' }}
        />
        <label htmlFor={`fileInput${type}`}>
          <Description />
        </label>
      </IconButton>
    </InputAdornment>
  );
};
