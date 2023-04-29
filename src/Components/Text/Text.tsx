import { Typography } from '@mui/material';
import React from 'react';
import styles from './Text.module.css';
import { TextProps } from './TextProps';

export const Text = ({ children, className, bold, ...rest }: TextProps) => {
  return (
    <Typography
      {...rest}
      className={(styles.container, `${className}`)}
      fontWeight={bold && 900}
    >
      {children}
    </Typography>
  );
};
