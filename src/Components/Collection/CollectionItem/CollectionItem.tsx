import React, { useContext } from 'react';
import styles from './CollectionItem.module.css';
import { CollectionItemProps } from './CollectionItemProps';
import { Text } from '../../Text';
import { Button } from '@mui/material';
import { TabsContext } from '../../../Context/ApiContext/ApiContext';
import CancelIcon from '@mui/icons-material/Cancel';
import { CIconButton } from '../../CIconButton';

export const CollectionItem = ({
  item,
  deleteCollection,
}: CollectionItemProps) => {
  const { setSelectedCollection, selectedCollection } = useContext(TabsContext);
  const selected: boolean = item.collection === selectedCollection.collection;
  return (
    <>
      <div className={styles.container}>
        <Button
          className={styles.button}
          onClick={() => setSelectedCollection(item)}
          variant={selected ? 'contained' : 'outlined'}
        >
          <Text>{item.collection}</Text>
        </Button>
        {selected && (
          <div className={styles.options}>
            <CIconButton
              sx={{ padding: '0 !important' }}
              onClick={() => deleteCollection(item.collection)}
            >
              <CancelIcon
                sx={{ height: '20px', width: '20px' }}
                color="error"
              />
            </CIconButton>
            {/* <CIconButton
              sx={{ padding: '0 !important' }}
              onClick={() => deleteCollection(item.collection)}
            >
              <CancelIcon
                sx={{ height: '20px', width: '20px' }}
                color="error"
              />
            </CIconButton> */}
          </div>
        )}
      </div>
    </>
  );
};
