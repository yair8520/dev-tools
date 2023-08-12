import React from 'react';
import styles from './InputPropsEditor.module.css';
import { InputPropsEditorProps } from './InputPropsEditorProps';
import { CIconButton } from '../CIconButton';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
export const InputPropsEditor = ({
  multiLineInputRef,
}: InputPropsEditorProps) => {
  const handleAlignRightClick = () => {
    if (multiLineInputRef && multiLineInputRef.current) {
      multiLineInputRef.current.style.textAlign = 'right';
    }
  };

  const handleAlignLeftClick = () => {
    if (multiLineInputRef && multiLineInputRef.current) {
      multiLineInputRef.current.style.textAlign = 'left';
    }
  };

  const handleAlignCenterClick = () => {
    if (multiLineInputRef && multiLineInputRef.current) {
      multiLineInputRef.current.style.textAlign = 'center';
    }
  };

  return (
    <>
      <CIconButton onClick={handleAlignRightClick}>
        <FormatAlignRightIcon />
      </CIconButton>
      <CIconButton onClick={handleAlignLeftClick}>
        <FormatAlignLeftIcon />
      </CIconButton>
      <CIconButton onClick={handleAlignCenterClick}>
        <FormatAlignCenterIcon />
      </CIconButton>
    </>
  );
};
