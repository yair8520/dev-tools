import React, { useContext } from 'react';
import styles from './CodeSnippetsList.module.css';
import { CodeSnippetsListProps } from './CodeSnippetsListProps';
import { Typography, List, Paper } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { CIconButton } from '../CIconButton';
import { CodeSnippetListItem } from '../CodeSnippetListItem';
import { Snippets } from '../../Context/SnippestContext/SnippestContextProps';
import AutorenewIcon from '@mui/icons-material/Autorenew';

export const CodeSnippetsList = ({
  setAutoSave,
  autoSave,
}: CodeSnippetsListProps) => {
  const {
    items,
    addCodeItem,
    selectedId,
    setSelectedId,
    onEditTitle,
    onRemoveItem,
  } = useContext(Snippets);
  return (
    <Paper className={styles.wrapper}>
      <Typography variant="h6">
        Code Snippets
        <CIconButton
          style={{ display: 'flex' }}
          placement="top-end"
          onClick={addCodeItem}
          title={'Add Item'}
        >
          <AddCircleOutlineIcon />
        </CIconButton>
        <CIconButton
          placement="top-start"
          title={autoSave ? 'Auto Save' : 'Auto Save is OFF'}
          onClick={() => setAutoSave(!autoSave)}
        >
          <AutorenewIcon color={autoSave ? 'info' : 'error'} />
        </CIconButton>
      </Typography>
      {Object.keys(items).length === 0 ? (
        <Typography variant="body2">
          Click on the Add Button To start.
        </Typography>
      ) : (
        <List className={styles.list}>
          {Object.keys(items).map((key) => {
            const snippet = items[key];
            return (
              <CodeSnippetListItem
                key={snippet.id}
                snippet={snippet}
                selected={selectedId === snippet.id}
                onPress={setSelectedId}
                editTitle={onEditTitle}
                removeItem={onRemoveItem}
              />
            );
          })}
        </List>
      )}
    </Paper>
  );
};
