import React, { useContext } from 'react';
import styles from './CodeSnippetsList.module.css';
import { CodeSnippetsListProps } from './CodeSnippetsListProps';
import { getNewSnippets } from '../CodeSnippestPage/CodeSnippestPageProps';
import { Typography, List, Paper } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { CIconButton } from '../CIconButton';

import { CodeSnippetListItem } from '../CodeSnippetListItem';
import { ConfirmModal } from '../ConfirmModal';
import { ModalContext } from '../ModalContext/ModalContext';
import { EditTitleModal } from '../EditTitleModal';
export const CodeSnippetsList = ({
  items,
  onPress,
  setItems,
  selectedId,
}: CodeSnippetsListProps) => {
  const { handleModal } = useContext(ModalContext);

  const addCodeItem = () => {
    setItems((p: any) => {
      return { ...p, ...getNewSnippets() };
    });
  };
  const onEditTitle = (id: string, title: string) => {
    handleModal(
      <EditTitleModal
        oldTitle={items[id].title}
        onNext={(title: string) => editTitle(id, title)}
      />
    );
  };
  const onRemoveItem = (id: string) => {
    handleModal(
      <ConfirmModal
        title={`This Action Will delete this code... `}
        onNext={() => removeItem(id)}
      />
    );
  };
  const editTitle = (id: string, newTitle: string) => {
    setItems((prevItems: any) => {
      return {
        ...prevItems,
        [id]: {
          ...prevItems[id],
          title: newTitle,
        },
      };
    });
  };
  const removeItem = (id: string) => {
    setItems((prevItems: any) => {
      const { [id]: removedItem, ...restItems } = prevItems;
      return restItems;
    });
  };
  return (
    <Paper className={styles.wrapper}>
      <Typography variant="h6">
        Code Snippets
        <CIconButton
          style={{ display: 'flex', marginLeft: 'auto' }}
          placement="right"
          onClick={addCodeItem}
        >
          <AddCircleOutlineIcon />
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
                onPress={onPress}
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
