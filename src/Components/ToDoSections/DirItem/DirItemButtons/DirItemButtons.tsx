import React, { useContext } from 'react';
import styles from './DirItemButtons.module.css';
import { DirItemButtonsProps } from './DirItemButtonsProps';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ModalContext } from '../../../ModalContext/ModalContext';
export const DirItemButtons = ({
  setEdit,
  edit,
  openSureModal,
}: DirItemButtonsProps) => {
  const { handleModal } = useContext(ModalContext);
  const openDeleteModal = () => {
    handleModal(<p>Sure?</p>);
  };
  return (
    <div className={styles.container}>
      <IconButton onClick={() => setEdit(!edit)} edge="end" aria-label="edit">
        <EditIcon />
      </IconButton>
      <IconButton onClick={openDeleteModal} edge="end" aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </div>
  );
};
