import React, { useContext, useEffect, useState } from 'react';
import styles from './SharedWithMe.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { TShareBinData } from '../../Components/ShareEditor/ShareEditorProps';
import {
  getSharedBinByID,
  saveShareBinEntry,
} from '../../Helpers/FireBase/ShareBin';
import { Text } from '../../Components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { AppContext } from '../../Context/ThemeContext/ThemeContext';
import { dracula, github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { UserContext } from '../../Context/UserContext';
import LaunchIcon from '@mui/icons-material/Launch';
import { Paper } from '@mui/material';

const SharedWithMe = () => {
  const navigate = useNavigate();

  const { targetId } = useParams();
  const [data, setData] = useState<TShareBinData | null>();
  const [saved, setSaved] = useState<boolean>();
  const { isDark } = useContext(AppContext);
  const { user } = useContext(UserContext);
 
  useEffect(() => {
    if (targetId) {
      getSharedBinByID(targetId)
        .then((d) => {
          setData(d);
        })
        .catch(() => {
          setData(null);
        });
    }
  }, [targetId]);
  useEffect(() => {
    if (data && user)
      saveShareBinEntry(targetId!, data)
        .then(() => setSaved(true))
        .catch(() => {});
  }, [data, targetId, user]);

  return (
    <div className={styles.container}>
      <Text style={{ alignSelf: 'center' }} padding={'25px'} variant="h6">
        Shared With Me
        <div className={styles.separator} />
      </Text>
      <div style={{ alignSelf: 'center' }}>
        {!user?.email ? (
          'Log In with your Google Account to save '
        ) : (
          <>
            <div className={styles.saveCon}>
              Logged in as {user?.email}
              <br />
              {saved ? (
                <Text
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '15px',
                  }}
                >
                  Data saved in your account
                  <LaunchIcon onClick={() => navigate('/share-bin')} />
                </Text>
              ) : null}
            </div>
          </>
        )}
      </div>
      <div className={styles.content}>
        <Paper>
          <Text padding={'10px'} variant="h6">
            Headline : {data?.headline}
          </Text>
          {data?.comment && (
            <Text padding={'10px'} variant="h6">
              Comment : {data?.comment}
            </Text>
          )}
          <Text padding={'10px'} variant="h6">
            Date : {data?.date}
          </Text>
        </Paper>

        <SyntaxHighlighter
          style={isDark ? dracula : github}
          showLineNumbers={true}
          language="javascript"
        >
          {data?.code ?? 'Error Invalid link: please try again '}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
export default SharedWithMe;
