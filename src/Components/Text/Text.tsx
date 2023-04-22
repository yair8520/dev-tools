import { Typography } from '@mui/material';
import React, { useContext } from 'react';
import styles from './Text.module.css';
import { TextProps } from './TextProps';
import { AppContext } from '../ThemeContext/ThemeContext';

export const Text = ({ children, className, bold, ...rest }: TextProps) => {
  // const { isDark } = useContext(AppContext);
  return (
    <Typography
      {...rest}
      // style={{ color: !isDark ? 'black' : 'white' }}
      className={(styles.container, `${className}`)}
      fontWeight={bold && 900}
    >
      {children}
    </Typography>
  );
};
