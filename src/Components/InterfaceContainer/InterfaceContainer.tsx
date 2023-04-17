import React from 'react';
import styles from './InterfaceContainer.module.css';
import { InterfaceContainerProps } from './InterfaceContainerProps';
import { generateInterfaceFromJson } from '../../Helpers/Json';

export const InterfaceContainer = ({ data }: InterfaceContainerProps) => {
  return (
    data.json && (
      <div className={styles.container}>
        <pre>
          <code>
            {generateInterfaceFromJson(JSON.stringify(data.res, null, 5))}
          </code>
        </pre>
      </div>
    )
  );
};
