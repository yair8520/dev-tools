import React from 'react';
import styles from './HooksList.module.css';
import { HookListItem } from './HookListItem';
import { HooksDescription, nativeHooksDescription } from '../../Constant/Hooks';
import { Text } from '../Text';
import { SideMenu } from '../SideMenu';
import { LayoutWithSideMenu } from '../LayoutWithSideMenu';
import { extractTitles } from '../../Helpers/Json';
import { useScrollToElementOnMount } from '../../Hooks/useScrollToElementOnMount';
export const HooksList = () => {
  const id = useScrollToElementOnMount();

  const extractListOfTitles = () => {
    return [
      ...extractTitles(HooksDescription),
      ...extractTitles(nativeHooksDescription),
    ];
  };

  return (
    <div className={styles.container}>
      <LayoutWithSideMenu
        Left={() => (
          <>
            <Text style={{ alignSelf: 'center' }} padding={'25px'} variant="h6">
              React Hooks
              <div className={styles.separator} />
            </Text>

            {HooksDescription.map((val) => (
              <HookListItem active={id === val.title} key={val.title} item={val} />
            ))}
            <Text style={{ alignSelf: 'center' }} padding={'25px'} variant="h6">
              React Native Hooks
              <div className={styles.separator} />
            </Text>
            {nativeHooksDescription.map((val) => (
              <HookListItem key={val.title} item={val} />
            ))}
          </>
        )}
        Right={() => <SideMenu items={extractListOfTitles()} />}
      />
    </div>
  );
};
