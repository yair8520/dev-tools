/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import styles from './CodeSnippestPage.module.css';
import { SnippestEditor } from '../SnippestEditor';
import { CodeSnippetsList } from '../CodeSnippetsList';
import { getAllSnippets } from '../../Helpers/FireBase/Snippest';
import { Snippets } from '../../Context/SnippestContext/SnippestContextProps';
import { UserContext } from '../../Context/UserContext';
import { TSnippiest } from './CodeSnippestPageProps';

const CodeSnippestPage = () => {
  const { user } = useContext(UserContext);
  const [autoSave, setAutoSave] = useState(false);

  const { setItems, selectedId } = useContext(Snippets);
  useEffect(() => {
    if (user?.email) {
      getAllSnippets(user?.email).then((res: TSnippiest) => {
        setItems(res);
      });
      setAutoSave(true);
    }
  }, [user]);
  const setAutoSaveHandler = () => {
    if (user?.email) setAutoSave(!autoSave);
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <CodeSnippetsList
          autoSave={autoSave}
          setAutoSave={setAutoSaveHandler}
        />
      </div>
      <div className={styles.right}>
        <SnippestEditor autoSave={autoSave} key={selectedId} />
      </div>
    </div>
  );
};
export default CodeSnippestPage;
