/* eslint-disable react/jsx-no-undef */
import React from 'react';
import styles from './Description.module.css';
import { DescriptionProps } from './DescriptionProps';
import { Tooltip } from '@mui/material';

export const Description = ({ text, children }: DescriptionProps) => {
  return (
    <Tooltip arrow={true} title={text}>
      {children}
    </Tooltip>
  );
};
