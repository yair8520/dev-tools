import { v4 as uuidv4 } from 'uuid';

export interface CodeSnippestPageProps {
  [key: string]: any;
}
export const ICodeSnippiest: TCodeSnippiest = {
  id: '',
  timestamp: '',
  code: '',
  title: '',
};
export const getNewSnippets = () => {
  const id = uuidv4();
  return {
    [id]: {
      id,
      timestamp: '',
      code: 'Write your Code here...',
      title: 'Edit title...',
    } satisfies TCodeSnippiest,
  };
};
export interface TSnippiest extends Record<string, TCodeSnippiest> {}
export interface TCodeSnippiest {
  id: string;
  timestamp: string;
  title: string;
  code: string;
}
export const codeSnippiest: TSnippiest = {
  '1': {
    id: '1',
    timestamp: '2024-02-03T12:34:56',
    code: 'Your code snippet here  1 ...',
    title: 'code 1',
  },
  '2': {
    id: '2',
    timestamp: '2024-02-03T13:45:00',
    code: `import React, { useState } from 'react';
    import styles from './CodeSnippestPage.module.css';
    import { SnippestEditor } from '../SnippestEditor';
    import { CodeSnippetsList } from '../CodeSnippetsList';
    import { TSnippiest, codeSnippiest } from './CodeSnippestPageProps';
    
    const CodeSnippestPage = () => {
      const [items, setItems] = useState<TSnippiest>(codeSnippiest);
      const [selectedId, setSelectedId] = useState(1);
      const addCodeItem = () => {};
    
      return (
        <div className={styles.container}>
          <div className={styles.left}>
            <CodeSnippetsList
              items={items}
              onPress={setSelectedId}
              addCodeItem={addCodeItem}
            />
          </div>
          <div className={styles.right}>
            <SnippestEditor
              key={selectedId}
              savedCode="asd"
              item={items[selectedId]}
            />
          </div>
        </div>
      );
    };
    export default CodeSnippestPage;
    `,
    title: 'code2',
  },
};
