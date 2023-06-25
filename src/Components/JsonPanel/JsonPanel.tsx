import React, { useContext } from 'react';
import styles from './JsonPanel.module.css';
import { JsonPanelProps } from './JsonPanelProps';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { AppContext } from '../../Context/ThemeContext/ThemeContext';
export const JsonPanel = ({
  value,
  onChange,
  editable = true,
}: JsonPanelProps) => {
  const { isDark } = useContext(AppContext);
  return (
    <div className={styles.container}>
      <CodeMirror
        value={value}
        editable={editable}
        maxHeight="500px"
        theme={isDark ? 'dark' : 'light'}
        extensions={[json()]}
        onChange={onChange}
      />
    </div>
  );
};
