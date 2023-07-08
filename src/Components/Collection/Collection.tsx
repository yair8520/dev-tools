import React from 'react';
import styles from './Collection.module.css';
import { CollectionProps } from './CollectionProps';
import { CollectionItem } from './CollectionItem';
import { Text } from '../Text';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { CIconButton } from '../CIconButton';
export const Collection = ({ list }: CollectionProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <Text>Collections</Text>
        <CIconButton>
          <AddBoxIcon />
        </CIconButton>
      </div>
      <div className={styles.row}>
        {list.map((c) => (
          <CollectionItem key={c.collection} item={c} />
        ))}
      </div>
    </div>
  );
};
