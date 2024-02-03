import React from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import styles from './SnippestEditor.module.css';
import { SnippestEditorProps } from './SnippestEditorProps';
import { Paper } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CIconButton } from '../CIconButton';
import { handleCopy } from '../../Helpers/Clipboard';

export const SnippestEditor = ({ item, setItems }: SnippestEditorProps) => {
  const handleCodeChange = (id: string, newCode: string) => {
    setItems((prevItems: { [x: string]: any }) => ({
      ...prevItems,
      [id]: {
        ...prevItems[id],
        code: newCode,
      },
    }));
  };
  return (
    <Paper className={styles.wrapper}>
      <div className={styles.buttonsContainer}>
        <CIconButton onClick={() => handleCopy(item.code)}>
          <ContentCopyIcon />
        </CIconButton>
      </div>
      <AceEditor
        value={item.code}
        onChange={(code) => handleCodeChange(item.id, code)}
        mode="javascript"
        theme="monokai"
        fontSize="16px"
        style={{ height: '100%', width: '100%', padding: '0 15px' }}
        highlightActiveLine={true}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showGutter: true,
          showLineNumbers: true,
          displayIndentGuides: false,
          tabSize: 4,
          useWorker: false,
        }}
      />
    </Paper>
  );
};
