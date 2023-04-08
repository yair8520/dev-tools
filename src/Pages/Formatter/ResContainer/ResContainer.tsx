import React, { useEffect } from 'react';
import { JsonTree } from '../../../Components/JsonTree';
import { scrollTo } from '../../../Helpers/Scroll';
import styles from './ResContainer.module.css';
import { ResContainerProps } from './ResContainerProps';

export const ResContainer = ({ data }: ResContainerProps) => {
  useEffect(() => {
    scrollTo({ id: document.getElementById('result') });
  });
  return (
    <div id="result" className={styles.container}>
      {typeof data === 'object' && <JsonTree data={data !== '' && data} />}
    </div>
  );
};
