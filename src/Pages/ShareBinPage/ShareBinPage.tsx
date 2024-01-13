import React, { useContext, useEffect, useState } from 'react';
import styles from './ShareBinPage.module.css';
import {  TSharedLinks } from './ShareBinPageProps';
import { Text } from '../../Components';
import { ShareEditor } from '../../Components/ShareEditor';
import { getSharedEntryPerUser } from '../../Helpers/FireBase/ShareBin';
import { UserContext } from '../../Context/UserContext';
import { CIconButton } from '../../Components/CIconButton';
import { ModalContext } from '../../Components/ModalContext/ModalContext';
import HistoryIcon from '@mui/icons-material/History';
import { ShareBinHistory } from '../../Components/ShareBinHistory';

const ShareBinPage = () => {
  const [sharedLinks, setSharedLinks] = useState<TSharedLinks | null>(null);
  const { user } = useContext(UserContext);
  useEffect(() => {
    getSharedEntryPerUser().then((d) => setSharedLinks(d));
  }, [user]);
  const { handleModal } = useContext(ModalContext);

  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <div className={styles.title}>
          <Text
            style={{ alignSelf: 'center' }}
            padding={'25px'}
            paddingBottom={'15px'}
            variant="h6"
          >
            Code Share Bin
            <div className={styles.separator} />
          </Text>
          <div className={styles.history}>
            <Text>History</Text>
            <CIconButton
              placement="right"
              title={'View Recent'}
              onClick={() =>
                handleModal(
                  <ShareBinHistory loggedIn={!!user} items={sharedLinks} />
                )
              }
            >
              <HistoryIcon />
            </CIconButton>
          </div>
          <Text className={styles.subText}>
            Instantly share code with a single click and generate a Custom URL
            for others to view.
          </Text>
        </div>
        <div className={styles.content}>
          <ShareEditor />
        </div>
      </div>
    </div>
  );
};
export default ShareBinPage;
