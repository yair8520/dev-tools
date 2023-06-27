import React, { useContext } from 'react';
import styles from './JsonPanel.module.css';
import { JsonPanelProps } from './JsonPanelProps';
import { AppContext } from '../../Context/ThemeContext/ThemeContext';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { CIconButton } from '../CIconButton';
import { handleCopy, handlePaste } from '../../Helpers/Clipboard';

var newline = String.fromCharCode(13, 10);
export const JsonPanel = ({
  value,
  onChange,
  editable = true,
  rows = 8,
}: JsonPanelProps) => {
  const { isDark } = useContext(AppContext);

  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <CIconButton
          onClick={() => handleCopy(value)}
          title={'Copy'}
          placement="left"
        >
          <ContentCopyIcon />
        </CIconButton>
        {editable && (
          <CIconButton
            onClick={() => handlePaste(onChange)}
            title={'Paste'}
            placement="right"
          >
            <ContentPasteIcon />
          </CIconButton>
        )}
      </div>
      <textarea
        cols={50}
        rows={rows}
        disabled={!editable}
        onChange={(e) => onChange(e.target.value)}
        className={styles.textarea}
        style={isDark ? { color: 'white' } : {}}
        value={value?.replaceAll('\\n', newline)}
      />
    </div>
  );
};
