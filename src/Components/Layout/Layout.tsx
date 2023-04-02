import React from 'react';
import './Layout.module.css';
import { LayoutProps } from './LayoutProps';

export const Layout = ({}: LayoutProps) => {
  return (
    <div className={'container'}>
      <h1>LayoutPage component</h1>
    </div>
  );
};
