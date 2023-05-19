import React, { useState } from 'react';
import styles from './NoteModal.module.css';
import { NoteModalProps } from './NoteModalProps';
import { MultiLineInput } from '../MultiLineInput';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { CIconButton } from '../CIconButton';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { InputButtons } from '../DiffChecker/InputButtons';

export const NoteModal = ({ value, onChange, handleModal }: NoteModalProps) => {
  const [text, setText] = useState<string>(value);
  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setText(e.target.value);
      onFinish();
    }
  };
  const onFinish = () => {
    onChange(text);
    handleModal();
  };
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
        <CIconButton placement="top" title={'Save'} onClick={onFinish}>
          <CheckCircleIcon color="success" />
        </CIconButton>
      </div>
      <div className={styles.container}>
        <MultiLineInput
          minRows={15}
          onKeyDown={handleKeyDown}
          className={styles.input}
          value={text}
          onChange={(e) => setText(e)}
          InputProps={{
            endAdornment: (
              <InputButtons withFile={false} value={text} onChange={setText} />
            ),
          }}
        />
      </div>
    </>
  );
};
