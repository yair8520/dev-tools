import React from 'react';
import styles from './CollectionModal.module.css';
import { CollectionModalProps } from './CollectionModalProps';

export const CollectionModal = ({}: CollectionModalProps) => {
  return (
    <div className={styles.container}>
      <h1>CollectionModalPage component</h1>
    </div>
  );
};
