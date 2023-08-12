import React, { useRef, useState } from 'react';
import styles from './NoteModal.module.css';
import { NoteModalProps } from './NoteModalProps';
import { MultiLineInput } from '../MultiLineInput';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { CIconButton } from '../CIconButton';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { InputButtons } from '../DiffChecker/InputButtons';

export const NoteModal = ({ value, onChange, handleModal }: NoteModalProps) => {
  const [text, setText] = useState<string>(value);

  const onFinish = () => {
    onChange(text);
    handleModal();
  };
  const multiLineInputRef = useRef(null);

  return (
    <div style={{ width: '80vw' }}>
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
          // onKeyDown={handleKeyDown}
          className={styles.input}
          value={text}
          onChange={(e) => setText(e)}
          inputRef={multiLineInputRef} // Pass the ref
          InputProps={{
            endAdornment: (
              <InputButtons
                withFile={true}
                value={text}
                onChange={setText}
                editor={true}
                multiLineInputRef={multiLineInputRef}
              />
            ),
          }}
        />
      </div>
    </div>
  );
};
