import React from 'react';
import styles from './EmptyCollections.module.css';
import { EmptyCollectionsProps } from './EmptyCollectionsProps';
import { Text } from '../Text';

export const EmptyCollections = ({ createCollection }: EmptyCollectionsProps) => {
  return (
    <div className={styles.container}>
      <Text>No collection yet... click the plus Icon above to start</Text>
      <Text className={styles.link} onClick={() => createCollection()}>
        Try example
      </Text>
    </div>
  );
};
