import React, { useContext } from 'react';
import styles from './CollectionItem.module.css';
import { CollectionItemProps } from './CollectionItemProps';
import { Text } from '../../Text';
import { Button } from '@mui/material';
import { TabsContext } from '../../../Context/ApiContext/ApiContext';
import CancelIcon from '@mui/icons-material/Cancel';
import { CIconButton } from '../../CIconButton';
import { BorderColorRounded } from '@mui/icons-material';
export const CollectionItem = ({
  item,
  deleteCollection,
  editCollectionTitle,
}: CollectionItemProps) => {
  const { setSelectedCollection, selectedCollection } = useContext(TabsContext);
  const selected: boolean = item.collection === selectedCollection.collection;
  return (
    <>
      <div className={styles.container}>
        <div
          className={`${styles.button}${selected ? ' ' + styles.selected : ''}`}
          onClick={() => setSelectedCollection(item)}
        >
          <Text variant={selected ? 'h6' : 'body1'}>{item.collection}</Text>
        </div>

        <div className={styles.options}>
          <CIconButton
            className={styles.icon}
            onClick={() => editCollectionTitle(item.collection)}
          >
            <BorderColorRounded sx={{ height: '20px', width: '20px' }} />
          </CIconButton>
          <CIconButton
            className={styles.icon}
            onClick={() => deleteCollection(item.collection)}
          >
            <CancelIcon sx={{ height: '20px', width: '20px' }} color="error" />
          </CIconButton>
        </div>
      </div>
    </>
  );
};
