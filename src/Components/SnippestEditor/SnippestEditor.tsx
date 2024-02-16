import React, { useContext, useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import styles from './SnippestEditor.module.css';
import { Paper } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CIconButton } from '../CIconButton';
import { handleCopy, handlePaste } from '../../Helpers/Clipboard';
import { Snippets } from '../../Context/SnippestContext/SnippestContextProps';
import SaveIcon from '@mui/icons-material/Save';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { useDebouncedEffect } from '../../Hooks/useDebouncedEffect';
import { initialCode } from '../CodeSnippestPage/CodeSnippestPageProps';

export const SnippestEditor = ({ autoSave }: any) => {
  const { items, selectedId, handleCodeChange, handleSave } =
    useContext(Snippets);
  const item = items[selectedId];
  useDebouncedEffect(
    () => {
      if (autoSave && item?.id) handleSave(item.id);
    },
    [item?.code, autoSave],
    2000
  );
  return (
    <>
      {item ? (
        <Paper className={styles.wrapper}>
          <div className={styles.buttonsContainer}>
            <MoreVertIcon />
            <CIconButton title={'Save'} onClick={() => handleSave(item.id)}>
              <SaveIcon />
            </CIconButton>
            <CIconButton title={'Copy'} onClick={() => handleCopy(item.code)}>
              <ContentCopyIcon />
            </CIconButton>
            <CIconButton
              title={'Paste'}
              onClick={() =>
                handlePaste((t) => handleCodeChange(item.id, initialCode + t))
              }
            >
              <ContentPasteIcon />
            </CIconButton>
          </div>
          <AceEditor
            className="reactAce"
            value={item.code}
            focus={true}
            onChange={(code) => handleCodeChange(item.id, code)}
            mode="javascript"
            theme="monokai"
            fontSize="16px"
            style={{ height: '100%', width: '100%' }}
            highlightActiveLine={true}
            setOptions={{
              enableBasicAutocompletion: false,
              enableLiveAutocompletion: false,
              enableSnippets: false,
              showGutter: true,
              showLineNumbers: true,
              displayIndentGuides: true,
              tabSize: 4,
              useWorker: false,
            }}
          />
        </Paper>
      ) : null}
    </>
  );
};
