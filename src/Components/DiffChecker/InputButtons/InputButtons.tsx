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
import DeleteIcon from '@mui/icons-material/Delete';

import { CIconButton } from '../../CIconButton';
export const InputButtons = ({
  onChange,
  value,
  type,
  withFile = true,
}: InputButtonsProps) => {
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
      <CIconButton
        placement="right"
        title={'Delete'}
        onClick={() => onChange('')}
      >
        <DeleteIcon />
      </CIconButton>
      {withFile && (
        <IconButton onClick={() => {}}>
          <input
            type="file"
            accept=".txt,.json"
            id={`fileInput${type}`}
            onChange={(e) => handleFile(e, onChange)}
            style={{ display: 'none' }}
          />
          <label htmlFor={`fileInput${type}`}>
            <Description />
          </label>
        </IconButton>
      )}
    </InputAdornment>
  );
};
