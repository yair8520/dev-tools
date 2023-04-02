import React from 'react';
import './Button.module.css';
import { ButtonProps } from './ButtonProps';

export const Button = ({}: ButtonProps) => {
  return (
    <div className={'container'}>
      <h1>ButtonPage component</h1>
    </div>
  );
};
