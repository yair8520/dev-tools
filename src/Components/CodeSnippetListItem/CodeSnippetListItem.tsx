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
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <ListItem selected={selected} button onClick={() => onPress(snippet.id)}>
        <Text
          style={{ display: 'flex', flexGrow: 1, lineBreak: 'anywhere' }}
          numb
        >
          {snippet.title}
        </Text>
      </ListItem>
      <>
        <CIconButton onClick={() => editTitle(snippet.id)}>
          <EditIcon />
        </CIconButton>
        <CIconButton onClick={() => removeItem(snippet.id)}>
          <DeleteOutlineIcon />
        </CIconButton>
      </>
      <Divider />
    </div>
  );
};
