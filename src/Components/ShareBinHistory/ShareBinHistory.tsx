import React from 'react';
import styles from './ShareBinHistory.module.css';
import { ShareBinHistoryProps } from './ShareBinHistoryProps';
import { Box } from '@mui/material';
import { Text } from '../Text';
import { sortByDate } from '../../Helpers/Time';
import { TShareBinData } from '../ShareEditor/ShareEditorProps';

export const ShareBinHistory = ({ items, loggedIn }: ShareBinHistoryProps) => {
  const onItemPressed = (id: string) => {
    window.open(
      `${window.location.origin}${window.location.pathname}#/shared/${id}`,
      '_blank'
    );
  };

  let renderedItems;

  if (items && Object.entries(items).length !== 0) {
    const itemsArray: TShareBinData[] = Object.values(items);
    console.log(itemsArray);
    const sortedItemsArray = itemsArray.sort(sortByDate);
    console.log(sortedItemsArray);

    renderedItems = sortedItemsArray.map(({ headline, date }, index) => (
      <div
        key={index}
        className={styles.row}
        onClick={() => onItemPressed(itemsArray[index].code)}
      >
        <Box className={styles.content}>
          <Text className={styles.text} variant="body1">
            {headline}
          </Text>
          <Text className={styles.date} variant="caption">
            {date ?? ''}
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
