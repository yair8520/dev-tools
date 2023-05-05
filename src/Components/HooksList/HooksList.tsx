import React from 'react';
import styles from './HooksList.module.css';
import { HookListItem } from './HookListItem';
import { HooksDescription, nativeHooksDescription } from '../../Constant/Hooks';
import { Text } from '../Text';

export const HooksList = () => {
  return (
    <div className={styles.container}>
      <Text padding={'25px'} variant="h6">
        React Hooks
        <div className={styles.separator} />
      </Text>
      {HooksDescription.map((val) => (
        <HookListItem key={val.title} item={val} />
      ))}
      <Text padding={'25px'} variant="h6">
        React Native Hooks
        <div className={styles.separator} />
      </Text>
      {nativeHooksDescription.map((val) => (
        <HookListItem key={val.title} item={val} />
      ))}
    </div>
  );
};
