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
import { CIconButton } from '../../CIconButton';
export const InputButtons = ({ onChange, value, type }: InputButtonsProps) => {
  return (
    <InputAdornment className={styles.container} position="end">
      <CIconButton
        placement="right"
        title={'Copy'}
        onClick={() => handleCopy(value)}
      >
        <CallMadeSharp />
      </CIconButton>
      <CIconButton
        placement="left"
        title={'Paste'}
        onClick={() => handlePaste(onChange)}
      >
        <CallReceivedSharp />
      </CIconButton>
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
