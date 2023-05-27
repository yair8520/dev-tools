import React from 'react';
import styles from './TodoHeader.module.css';
import { TodoHeaderProps } from './TodoHeaderProps';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import TableRowsIcon from '@mui/icons-material/TableRows';
import { CIconButton } from '../CIconButton';
export const TodoHeader = ({ setRowsFullWidth }: TodoHeaderProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <CIconButton title={'Rows'} onClick={() => setRowsFullWidth(true)}>
          <TableRowsIcon />
        </CIconButton>
        <CIconButton title={'Table'} onClick={() => setRowsFullWidth(false)}>
          <ViewModuleIcon />
        </CIconButton>
      </div>
    </div>
  );
};
