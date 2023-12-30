import React from 'react';
import styles from './ShareBinPage.module.css';
import { ShareBinPageProps } from './ShareBinPageProps';
import { Text } from '../../Components';
import { ShareEditor } from '../../Components/ShareEditor';

const ShareBinPage = ({}: ShareBinPageProps) => {
  return (
    <div className={styles.container}>
      <Text
        style={{ alignSelf: 'center' }}
        padding={'25px'}
        paddingBottom={'15px'}
        variant="h6"
      >
        Code Share Bin
        <div className={styles.separator} />
      </Text>
      <Text className={styles.subText}>
        Instantly share code with a single click and generate a URL for others
        to view.
      </Text>
      <div className={styles.content}>
        <ShareEditor />
      </div>
    </div>
  );
};
export default ShareBinPage;
