import React from 'react';
import styles from './ShareBinPage.module.css';
import { ShareBinPageProps } from './ShareBinPageProps';
import { Text } from '../../Components';
import { ShareEditor } from '../../Components/ShareEditor';

const ShareBinPage = ({}: ShareBinPageProps) => {
  return (
    <div className={styles.container}>
      <Text style={{ alignSelf: 'center' }}  padding={'25px'} variant="h6">
        Code Share Bin
        <div className={styles.separator} />
      </Text>
      <div className={styles.content}>
        <ShareEditor />
      </div>
    </div>
  );
};
export default ShareBinPage;
