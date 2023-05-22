import React from 'react';
import styles from './Axis.module.css';
import { AxisProps } from './AxisProps';
import { Text } from '../Text';
import SouthIcon from '@mui/icons-material/South';
import EastIcon from '@mui/icons-material/East';
export const Axis = ({ dir }: AxisProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.rightLine} />
      <Text className={styles.text}>Main Axis</Text>
      {dir === "column" ? <SouthIcon /> : <EastIcon />}
    </div>
  );
};
