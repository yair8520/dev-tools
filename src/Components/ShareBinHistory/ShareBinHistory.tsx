import React, { useContext, useEffect, useState } from 'react';
import styles from './ShareBinHistory.module.css';
import { Box } from '@mui/material';
import { Text } from '../Text';
import { sortByDate } from '../../Helpers/Time';
import { TShareBinData } from '../ShareEditor/ShareEditorProps';
import { UserContext } from '../../Context/UserContext';
import { getSharedEntryPerUser } from '../../Helpers/FireBase/ShareBin';
import { TSharedLinks } from '../../Pages/ShareBinPage/ShareBinPageProps';

export const ShareBinHistory = () => {
  const [sharedLinks, setSharedLinks] = useState<TSharedLinks | null>(null);
  const { user } = useContext(UserContext);
  useEffect(() => {
    getSharedEntryPerUser().then((d) => setSharedLinks(d));
  }, [user]);
  const onItemPressed = (id: string) => {
    window.open(
      `${window.location.origin}${window.location.pathname}#/shared/${id}`,
      '_blank'
    );
  };
  const loggedIn = !!user;
  let renderedItems;
  if (sharedLinks && Object.entries(sharedLinks).length !== 0) {
    const itemsArray: [string, TShareBinData][] = Object.entries(sharedLinks);
    console.log(itemsArray);

    const sortedItemsArray = itemsArray.sort(([, a], [, b]) =>
      sortByDate(a, b)
    );
    console.log(sortedItemsArray);

    renderedItems = sortedItemsArray.map(([, item], index) => (
      <div
        key={index}
        className={styles.row}
        onClick={() => onItemPressed(itemsArray[index][0])} // Pass the key
      >
        <Box className={styles.content}>
          <Text className={styles.text} variant="body1">
            {item.headline}
          </Text>
          <Text className={styles.date} variant="caption">
            {item.date ?? ''}
          </Text>
        </Box>
      </div>
    ));
  } else if (!loggedIn) {
    renderedItems = <Text>You need to log in...</Text>;
  } else {
    renderedItems = <Text>There is no recent data</Text>;
  }

  return (
    <Box className={styles.container}>
      <Text variant="h6">Recent</Text>
      {renderedItems}
    </Box>
  );
};
