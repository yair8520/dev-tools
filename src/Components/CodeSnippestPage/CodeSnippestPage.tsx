import React, { useState } from 'react';
import styles from './CodeSnippestPage.module.css';
import { SnippestEditor } from '../SnippestEditor';
import { CodeSnippetsList } from '../CodeSnippetsList';
import {
  ICodeSnippiest,
  TSnippiest,
  codeSnippiest,
} from './CodeSnippestPageProps';

const CodeSnippestPage = () => {
  const [items, setItems] = useState<TSnippiest>(codeSnippiest);
  const [selectedId, setSelectedId] = useState(1);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <CodeSnippetsList
          items={items}
          selectedId={selectedId}
          onPress={setSelectedId}
          setItems={setItems}
        />
      </div>
      <div className={styles.right}>
        {items[selectedId]?.id ? (
          <SnippestEditor
            key={items[selectedId]?.id ?? ''}
            setItems={setItems}
            item={items[selectedId] ?? ICodeSnippiest}
          />
        ) : null}
      </div>
    </div>
  );
};
export default CodeSnippestPage;
