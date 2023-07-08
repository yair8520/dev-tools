import React, { useContext } from 'react';
import styles from './CollectionItem.module.css';
import { CollectionItemProps } from './CollectionItemProps';
import { Text } from '../../Text';
import { Button } from '@mui/material';
import { TabsContext } from '../../../Context/ApiContext/ApiContext';

export const CollectionItem = ({ item }: CollectionItemProps) => {
  const { setSelectedCollection, selectedCollection } = useContext(TabsContext);

  return (
    <Button
      className={styles.container}
      onClick={() => setSelectedCollection(item)}
      variant={
        item.collection === selectedCollection.collection
          ? 'contained'
          : undefined
      }
    >
      <Text>{item.collection}</Text>
    </Button>
  );
};
