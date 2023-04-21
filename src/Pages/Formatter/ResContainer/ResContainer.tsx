import React, { useEffect } from 'react';
import { JsonTree } from '../../../Components/JsonTree';
import { scrollTo } from '../../../Helpers/Scroll';
import styles from './ResContainer.module.css';
import { ResContainerProps } from './ResContainerProps';

export const ResContainer = ({ data }: ResContainerProps) => {
  useEffect(() => {
    if (data.res !== '') scrollTo({ id: document.getElementById('result') });
  }, [data.res]);
  return (
    <div id="result" className={styles.container}>
      {data.res !== '' && <JsonTree data={data.res !== '' && data.res} />}
    </div>
  );
};
