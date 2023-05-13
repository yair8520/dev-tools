import React from 'react';
import { CIconButtonProps } from './CIconButtonProps';
import { IconButton } from '@mui/material';
import { Description } from '../Description';

export const CIconButton = ({
  children,
  onClick = undefined,
  title,
  placement,
}: CIconButtonProps) => {
  return (
    <Description placement={placement} title={title}>
      <IconButton
        style={!onClick ? { cursor: 'default' } : {}}
        disableRipple={!onClick}
        onClick={onClick}
      >
        {children}
      </IconButton>
    </Description>
  );
};
