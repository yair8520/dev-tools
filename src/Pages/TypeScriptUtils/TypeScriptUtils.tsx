import React from 'react';
import styles from './TypeScriptUtils.module.css';
import { HookListItem } from '../../Components/HooksList/HookListItem';
import { Text } from '../../Components/Text';
import { utilsExamples } from '../../Constant/TSUtils';
import { SideMenu } from '../../Components/SideMenu';
import { LayoutWithSideMenu } from '../../Components/LayoutWithSideMenu';
import { extractTitles } from '../../Helpers/Json';
import { useScrollToElementOnMount } from '../../Hooks/useScrollToElementOnMount';

const TypeScriptUtils = () => {
  const id = useScrollToElementOnMount();
  return (
    <div className={styles.container}>
      <LayoutWithSideMenu
        Left={() => (
          <>
            <Text style={{ alignSelf: 'center' }} padding={'25px'} variant="h6">
              Utility Types
              <div className={styles.separator} />
            </Text>
            {utilsExamples.map((val) => (
              <HookListItem
                active={id === val.title}
                key={val.title}
                item={val}
              />
            ))}
          </>
        )}
        Right={() => <SideMenu items={extractTitles(utilsExamples)} />}
      />
    </div>
  );
};
export default TypeScriptUtils;
