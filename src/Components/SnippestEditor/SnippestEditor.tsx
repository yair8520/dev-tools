import React, { useContext } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import styles from './SnippestEditor.module.css';
import { Paper } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CIconButton } from '../CIconButton';
import { handleCopy } from '../../Helpers/Clipboard';
import { Snippets } from '../../Context/SnippestContext/SnippestContextProps';

export const SnippestEditor = () => {
  const { items, selectedId, handleCodeChange } = useContext(Snippets);

  const item = items[selectedId];
  return (
    <>
      {item ? (
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
      ) : null}
    </>
  );
};
