import React from 'react';
import styles from './TabItem.module.css';
import { TabItemProps } from './TabItemProps';
import TabPanel from '@mui/lab/TabPanel/TabPanel';
import { ReqContainer } from '../ReqContainer';
import { ResContainer } from '../ResContainer';

export const TabItem = ({ item, ...rest }: TabItemProps) => {
  return (
    <TabPanel className={styles.container} value={item.value}>
      <ReqContainer item={item} />
      <ResContainer />
    </TabPanel>
  );
};
