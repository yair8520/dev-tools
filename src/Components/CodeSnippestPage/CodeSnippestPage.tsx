import React from 'react';
import styles from './CodeSnippestPage.module.css';
import { SnippestEditor } from '../SnippestEditor';
import { CodeSnippetsList } from '../CodeSnippetsList';

const CodeSnippestPage = () => {
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
