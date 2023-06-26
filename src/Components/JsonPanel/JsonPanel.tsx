import React, { useContext } from 'react';
import styles from './JsonPanel.module.css';
import { JsonPanelProps } from './JsonPanelProps';
import { AppContext } from '../../Context/ThemeContext/ThemeContext';
var newline = String.fromCharCode(13, 10);
export const JsonPanel = ({
  value,
  onChange,
  editable = true,
  rows=8
}: JsonPanelProps) => {
  const { isDark } = useContext(AppContext);
  return (
    <textarea
      cols={50}
      rows={rows}
      disabled={!editable}
      onChange={(e) => onChange(e.target.value)}
      className={styles.container}
      style={isDark ? { color: 'white' } : {}}
      value={value?.replaceAll('\\n', newline)}
    />
  );
};
