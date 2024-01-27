import React, { useEffect, useState } from 'react';
import styles from './ShareEditor.module.css';
import {
  IShareBinData,
  ShareEditorProps,
  TShareBinData,
} from './ShareEditorProps';
import { InputButtons } from '../DiffChecker/InputButtons';
import { MultiLineInput } from '../MultiLineInput';
import SendIcon from '@mui/icons-material/Send';
import { LoadingButton } from '@mui/lab';
import { addShareBinData } from '../../Helpers/FireBase/ShareBin';
import { TextField } from '@mui/material';
import { CIconButton } from '../CIconButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { handleCopy } from '../../Helpers/Clipboard';
import ReplayIcon from '@mui/icons-material/Replay';

export const ShareEditor = () => {
  const [data, setData] = useState<TShareBinData>(IShareBinData);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [shareLink, setShareLink] = useState<string>('');

  useEffect(() => {
    setDisabled(!(data.code && data.headline));
  }, [data.code, data.headline]);
  const handleChange = (t: string, key: keyof TShareBinData) => {
    setData((prevData) => ({ ...prevData, [key]: t }));
  };

  const onSubmit = () => {
    addShareBinData(data)
      .then((l) => {
        setShareLink(
          `${window.location.origin}/shared/${l}`
        );
      })
      .catch((e) => {
        console.warn(e);
      });
  };
  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <MultiLineInput
          minRows={20}
          inputProps={{
            style: {
              resize: 'vertical',
              height: '250px',
              minHeight: '250px',
              maxHeight: '500px',
            },
          }}
          className={styles.multilineInput}
          placeholder={'{ Paste / Write Your Code here... } *'}
          id="resInput"
          onChange={(t) => handleChange(t, 'code')}
          value={data.code}
          InputProps={{
            endAdornment: (
              <InputButtons
                withFile={true}
                type={'Changed'}
                onChange={(t) => handleChange(t, 'code')}
                value={data.code}
              />
            ),
          }}
        />
      </div>
      <div className={styles.inputs}>
        <MultiLineInput
          label="Headline *"
          minRows={3}
          className={styles.multilineInput}
          placeholder={'Write Your Headline here...'}
          onChange={(t) => handleChange(t, 'headline')}
          value={data.headline}
        />
        <MultiLineInput
          label="Comment"
          minRows={3}
          className={styles.multilineInput}
          placeholder={'Write Your Comment here...'}
          onChange={(t) => handleChange(t, 'comment')}
          value={data.comment}
        />
      </div>
      <div className={styles.buttons}>
        {!shareLink ? (
          <LoadingButton
            variant="contained"
            disabled={disabled}
            onClick={onSubmit}
            endIcon={<SendIcon />}
          >
            Share Link
          </LoadingButton>
        ) : (
          <TextField
            disabled={true}
            value={shareLink}
            className={styles.shareInput}
            InputProps={{
              endAdornment: (
                <>
                  <CIconButton
                    title={'Copy'}
                    onClick={() => handleCopy(shareLink)}
                  >
                    <ContentCopyIcon />
                  </CIconButton>
                  <CIconButton
                    title={'Visit'}
                    onClick={() => window.open(shareLink, '_blank')}
                  >
                    <OpenInNewIcon />
                  </CIconButton>
                  <CIconButton title={'Again'} onClick={() => setShareLink('')}>
                    <ReplayIcon />
                  </CIconButton>
                </>
              ),
            }}
          />
        )}
      </div>
    </div>
  );
};
