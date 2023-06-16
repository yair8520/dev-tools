import React, { useContext } from 'react';
import styles from './DirItemButtons.module.css';
import { DirItemButtonsProps } from './DirItemButtonsProps';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ModalContext } from '../../../ModalContext/ModalContext';
import CheckIcon from '@mui/icons-material/Check';
import { ConfirmModal } from '../../../ConfirmModal';
import { TodoContext } from '../../../../Context/TodoContext/TodoContext';
export const DirItemButtons = ({
  setEdit,
  edit,
  saveEdit,
  dir,
}: DirItemButtonsProps) => {
  const { handleModal } = useContext(ModalContext);
  const { deleteDir } = useContext(TodoContext);

  const openDeleteModal = () => {
    handleModal(
      <ConfirmModal
        title={`This action will delete all tasks associated to ${dir}`}
        onNext={() => deleteDir(dir)}
      />
    );
  };
  return (
    <div className={styles.container}>
      {!edit ? (
        <IconButton onClick={() => setEdit(!edit)} edge="end" aria-label="edit">
          <EditIcon />
        </IconButton>
      ) : (
        <IconButton onClick={() => saveEdit()} edge="end" aria-label="save">
          <CheckIcon />
        </IconButton>
      )}
      <IconButton onClick={openDeleteModal} edge="end" aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </div>
  );
};
