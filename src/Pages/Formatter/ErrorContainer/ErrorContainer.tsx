import React from 'react';
import styles from './ErrorContainer.module.css';
import { ErrorContainerProps } from './ErrorContainerProps';

export const ErrorContainer = ({ error }: ErrorContainerProps) => {
  return (
    <div className={styles.container}>
      <h1>Errors </h1>
      <p>{JSON.stringify(error)} </p>
    </div>
  );
};
