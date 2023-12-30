import React from 'react';
import styles from './InputButtons.module.css';
import { InputButtonsProps } from './InputButtonsProps';
import { IconButton, InputAdornment } from '@mui/material';
import { Description } from '@material-ui/icons';
import {
  handleCopy,
  handleFile,
  handlePaste,
} from '../../../Helpers/Clipboard';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CIconButton } from '../../CIconButton';
import { InputPropsEditor } from '../../InputPropsEditor';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
export const InputButtons = ({
  onChange,
  value,
  type,
  withFile = true,
  editor = false,
  multiLineInputRef,
}: InputButtonsProps) => {
  return (
    <InputAdornment className={styles.container} position="end">
      <CIconButton
        placement="right"
        title={'Copy'}
        onClick={() => handleCopy(value)}
      >
        <ContentCopyIcon />
      </CIconButton>
      <CIconButton
        placement="left"
        title={'Paste'}
        onClick={() => handlePaste(onChange)}
      >
        <ContentPasteIcon />
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
      {editor && <InputPropsEditor multiLineInputRef={multiLineInputRef} />}
    </InputAdornment>
  );
};
