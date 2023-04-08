import React from 'react';
import { ExpandableSection } from '../../../Components/ExpandableSection';
import styles from './ErrorContainer.module.css';
import { ErrorContainerProps } from './ErrorContainerProps';

export const ErrorContainer = ({ error }: ErrorContainerProps) => {
  return (
    <div className={styles.container}>
      <ExpandableSection expend={!!error}>
        <div className={styles.border}>
          <div className={styles.info}>
            <h1>Please Fix the Errors below </h1>
            <p>{error} </p>
          </div>
        </div>
      </ExpandableSection>
    </div>
  );
};
