import React from 'react';
import styles from './HistoryModal.module.css';
import { HistoryModalProps } from './HistoryModalProps';
import { Text } from '../Text';
import { useLocalStorage } from '../../Hooks/useLocalStorage';
import { Box, Button } from '@mui/material';
import { TSearch } from '../../Pages/Formatter/FormatterBody/FormatterBodyProps';

export const HistoryModal = ({ onClick, handleModal }: HistoryModalProps) => {
  const [searches] = useLocalStorage<TSearch[]>('searches', []);

  const onItemPressed = (search: TSearch) => {
    onClick(search.text);
    handleModal();
  };

  return (
    <Box className={styles.container}>
      <Text variant="h6">Recent</Text>
      {searches.length !== 0 ? (
        searches.map((search: TSearch, index: number) => (
          <div
            key={index}
            className={styles.row}
            onClick={() => onItemPressed(search)}
          >
            <Box className={styles.content}>
              <Text className={styles.text} variant="body1">
                {search.text}
              </Text>
              <Text className={styles.date} variant="caption">
                {search.date}
              </Text>
            </Box>
          </div>
        ))
      ) : (
        <Text>There is no recent data</Text>
      )}
    </Box>
  );
};
