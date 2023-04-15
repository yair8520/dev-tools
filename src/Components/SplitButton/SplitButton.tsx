import React from 'react';
import styles from './SplitButton.module.css';
import { SplitButtonProps } from './SplitButtonProps';

export const SplitButton = ({ side, setSide }: SplitButtonProps) => {
  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${side ? styles.selected : ''}`}
        disabled={side}
        onClick={() => setSide(true)}
      >
        Container
      </button>
      <button
        className={`${styles.button} ${!side ? styles.selected : ''}`}
        disabled={!side}
        onClick={() => setSide(false)}
      >
        Children
      </button>
    </div>
  );
};
