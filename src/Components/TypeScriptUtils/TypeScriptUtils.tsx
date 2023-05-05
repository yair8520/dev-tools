import React from 'react';
import styles from './TypeScriptUtils.module.css';
import { HookListItem } from '../HooksList/HookListItem';
import { Text } from '../Text';
import { utilsExamples } from '../../Constant/TSUtils';
import { SideMenu } from '../SideMenu';
import { LayoutWithSideMenu } from '../LayoutWithSideMenu';
import { extractTitles } from '../../Helpers/Json';

export const TypeScriptUtils = () => {
  return (
    <div className={styles.container}>
      <LayoutWithSideMenu
        Left={() => (
          <>
            <Text style={{ alignSelf: 'center' }} padding={'25px'} variant="h6">
              Utils Types
              <div className={styles.separator} />
            </Text>
            {utilsExamples.map((val) => (
              <HookListItem key={val.title} item={val} />
            ))}
          </>
        )}
        Right={() => <SideMenu items={extractTitles(utilsExamples)} />}
      />
    </div>
  );
};
