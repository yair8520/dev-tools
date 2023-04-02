import React from 'react';
import styles from './TemplateName.module.css';
import { TemplateNameProps } from './TemplateNameProps';

export const TemplateName = ({}: TemplateNameProps) => {
  return (
    <div className={styles.container}>
      <h1>TemplateNamePage component</h1>
    </div>
  );
};
