import React from 'react';
import styles from './Text.module.css';
import { TextProps } from './TextProps';

export const Text = ({ text }: TextProps) => {
  return (
    <div className={styles.container}>
      <h1>TemplateNamePage component</h1>
    </div>
  );
};
