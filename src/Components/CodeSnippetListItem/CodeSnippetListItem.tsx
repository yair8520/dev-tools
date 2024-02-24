import React, { useState } from 'react';
import styles from './CodeSnippetListItem.module.css';
import { CodeSnippetListItemProps } from './CodeSnippetListItemProps';
import { ListItem, Divider } from '@mui/material';
import { CIconButton } from '../CIconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { Text } from '../Text';
export const CodeSnippetListItem = ({
  snippet,
  onPress,
  editTitle,
  removeItem,
  selected,
}: CodeSnippetListItemProps) => {
  return (
    <div className={styles.container}>
      <ListItem
        style={{ borderRadius: '15px',border:'1px #04a9f3 solid' }}
        selected={selected}
        button
        onClick={() => onPress(snippet.id)}
      >
        <Text
          style={{ display: 'flex', flexGrow: 1, lineBreak: 'anywhere' }}
          
        >
          {snippet.title}
        </Text>
      </ListItem>
      <div
        className={`${styles.buttonContainer} ${selected ? styles.active : ''}`}
      >
        <CIconButton onClick={() => editTitle(snippet.id)}>
          <EditIcon />
        </CIconButton>
        <CIconButton onClick={() => removeItem(snippet.id)}>
          <DeleteOutlineIcon />
        </CIconButton>
      </div>
      <Divider />
    </div>
  );
};
