import React from 'react';
import styles from './HooksList.module.css';
import { HooksListProps } from './HooksListProps';
import { HookListItem } from './HookListItem';
import { HooksDescription } from '../../Constant/Hooks';

export const HooksList = ({}: HooksListProps) => {
  return (
    <div className={styles.container}>
      {HooksDescription.map((val, i) => (
        <HookListItem key={val.title} item={val} />
      ))}
    </div>
  );
};
