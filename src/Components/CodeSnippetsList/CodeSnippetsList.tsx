import React, { useContext, useMemo } from 'react';
import styles from './CodeSnippetsList.module.css';
import { CodeSnippetsListProps } from './CodeSnippetsListProps';
import { Typography, List, Paper, CircularProgress } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { CIconButton } from '../CIconButton';
import { CodeSnippetListItem } from '../CodeSnippetListItem';
import { Snippets } from '../../Context/SnippestContext/SnippestContextProps';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { TCodeSnippiest } from '../CodeSnippestPage/CodeSnippestPageProps';

export const CodeSnippetsList = ({
  setAutoSave,
  autoSave,
  loading,
}: CodeSnippetsListProps) => {
  const {
    items,
    addCodeItem,
    selectedId,
    setSelectedId,
    onEditTitle,
    onRemoveItem,
  } = useContext(Snippets);
  const list = useMemo(() => {
    const snippetArray: TCodeSnippiest[] = Object.values(items);

    return snippetArray.sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );
  }, [items]);
  console.log(list);
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
      ) : !loading ? (
        <List className={styles.list}>
          {list.map((snippet) => (
            <CodeSnippetListItem
              key={snippet.id}
              snippet={snippet}
              selected={selectedId === snippet.id}
              onPress={setSelectedId}
              editTitle={onEditTitle}
              removeItem={onRemoveItem}
            />
          ))}
        </List>
      ) : (
        <CircularProgress />
      )}
    </Paper>
  );
};
