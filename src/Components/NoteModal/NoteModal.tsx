import React, { useState } from 'react';
import styles from './NoteModal.module.css';
import { NoteModalProps } from './NoteModalProps';
import { MultiLineInput } from '../MultiLineInput';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { CIconButton } from '../CIconButton';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export const NoteModal = ({ value, onChange, handleModal }: NoteModalProps) => {
  const [text, setText] = useState<string>(value);

  return (
    <>
      <div className={styles.buttons}>
        <CIconButton
          placement="top"
          title={'Cancel'}
          onClick={() => handleModal()}
        >
          <RemoveCircleIcon color="error" />
        </CIconButton>
        <CIconButton
          placement="top"
          title={'Save'}
          onClick={() => {
            onChange(text);
            handleModal();
          }}
        >
          <CheckCircleIcon color="success" />
        </CIconButton>
      </div>
      <div className={styles.container}>
        <MultiLineInput
          className={styles.input}
          value={text}
          onChange={(e) => setText(e)}
        />
      </div>
    </>
  );
};
