/* eslint-disable react/jsx-no-undef */
import React from 'react';
import styles from './Description.module.css';
import { DescriptionProps } from './DescriptionProps';
import { Tooltip } from '@mui/material';
import { Text } from '../Text';

export const Description = ({
  title,
  children,
  placement,
}: DescriptionProps) => {
  return (
    <Tooltip
      arrow={true}
      placement={placement}
      className={styles.container}
      title={<Text variant="body2">{title}</Text>}
    >
      {children}
    </Tooltip>
  );
};
