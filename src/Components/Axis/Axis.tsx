import React from 'react';
import styles from './Axis.module.css';
import { AxisProps } from './AxisProps';
import { Text } from '../Text';
import SouthIcon from '@mui/icons-material/South';
import EastIcon from '@mui/icons-material/East';
import NorthIcon from '@mui/icons-material/North';
import WestIcon from '@mui/icons-material/West';
const dirIcon = {
  row: EastIcon,
  'row-reverse': WestIcon,
  column: SouthIcon,
  'column-reverse': NorthIcon,
};

export const Axis = ({ dir }: AxisProps) => {
  const Icon = dirIcon[dir as keyof typeof dirIcon];
  console.log(Icon);
  return (
    <div className={styles.container}>
      <div className={styles.rightLine} />
      <Text className={styles.text}>Main Axis</Text>
      {Icon && <Icon />} {/* Render the component as JSX */}
    </div>
  );
};
