import React, { useEffect } from 'react';
import { JsonTree } from '../../../Components/JsonTree';
import { scrollTo } from '../../../Helpers/Scroll';
import styles from './ResContainer.module.css';
import { ResContainerProps } from './ResContainerProps';
import { useMediaQuery } from '../../../Hooks/useMediaQuery';

export const ResContainer = ({ data }: ResContainerProps) => {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');

  useEffect(() => {
    if (data.res !== '') scrollTo({ id: 'result' });
  }, [data.res]);
  return (
    <div id="result" className={styles.container}>
      {data.res !== '' && (
        <JsonTree
          isSmallScreen={isSmallScreen}
          data={data.res !== '' && data.res}
        />
      )}
    </div>
  );
};
