/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import styles from './CodeSnippestPage.module.css';
import { SnippestEditor } from '../SnippestEditor';
import { CodeSnippetsList } from '../CodeSnippetsList';
import { getAllSnippets } from '../../Helpers/FireBase/Snippest';
import { Snippets } from '../../Context/SnippestContext/SnippestContextProps';
import { UserContext } from '../../Context/UserContext';
import { TSnippiest } from './CodeSnippestPageProps';

const CodeSnippestPage = () => {
  const { user } = useContext(UserContext);

  const { setItems } = useContext(Snippets);
  useEffect(() => {
    if (user?.email)
      getAllSnippets(user?.email).then((res: TSnippiest) => {
        setItems(res);
      });
  }, [user]);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <CodeSnippetsList />
      </div>
      <div className={styles.right}>
        <SnippestEditor />
      </div>
    </div>
  );
};
export default CodeSnippestPage;
