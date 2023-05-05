import React, { useEffect } from 'react';
import { ExpandableSection } from '../../../Components/ExpandableSection';
import styles from './ErrorContainer.module.css';
import { ErrorContainerProps } from './ErrorContainerProps';
import { scrollTo } from '../../../Helpers/Scroll';

export const ErrorContainer = ({ error }: ErrorContainerProps) => {
  useEffect(() => {
    if (error !== '') scrollTo({ id: 'Error' });
  }, [error]);

  return (
    <div id="Error" className={styles.container}>
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
