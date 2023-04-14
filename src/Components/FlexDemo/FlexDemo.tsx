import React from 'react';
import { FlexItem } from '../FlexItem';
import styles from './FlexDemo.module.css';
import { FlexDemoProps } from './FlexDemoProps';

export const FlexDemo = ({ items }: FlexDemoProps) => {
  return (
    <>
      {items.map((a: number, b) => (
        <FlexItem key={`${a}${b}`} val={a} />
      ))}
    </>
  );
};
