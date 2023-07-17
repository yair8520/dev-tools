import React, { useContext } from 'react';
import styles from './JsonPanel.module.css';
import { JsonPanelProps } from './JsonPanelProps';
import { AppContext } from '../../Context/ThemeContext/ThemeContext';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { CIconButton } from '../CIconButton';
import { handleCopy, handlePaste } from '../../Helpers/Clipboard';
import { Text } from '../Text';
import { prettifyJSON } from '../../Helpers/Json';
import DownloadIcon from '@mui/icons-material/Download';
import { downloadFile } from '../../Helpers/Files';
import { getTime } from '../../Helpers/Time';

var newline = String.fromCharCode(13, 10);

export const JsonPanel = ({
  value,
  onChange,
  editable = true,
  rows = 8,
}: JsonPanelProps) => {
  const { isDark } = useContext(AppContext);
  const fileName = editable ? 'Request' : 'Response';
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <CIconButton onClick={() => handleCopy(value)} title={'Copy'}>
          <ContentCopyIcon />
        </CIconButton>
        {!value ||
          (value?.length !== 0 && (
            <CIconButton
              onClick={() =>
                downloadFile({ data: value, nameOfFile: fileName + getTime() })
              }
              title={'save as file'}
            >
              <DownloadIcon />
            </CIconButton>
          ))}

        {editable && (
          <>
            <CIconButton onClick={() => handlePaste(onChange)} title={'Paste'}>
              <ContentPasteIcon />
            </CIconButton>
            <CIconButton onClick={() => onChange(prettifyJSON(value))}>
              <Text>Beautify</Text>
            </CIconButton>
          </>
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
