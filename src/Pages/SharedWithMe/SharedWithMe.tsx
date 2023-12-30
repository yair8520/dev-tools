import React, { useContext, useEffect, useState } from 'react';
import styles from './SharedWithMe.module.css';
import { SharedWithMeProps } from './SharedWithMeProps';
import { useParams } from 'react-router-dom';
import { TShareBinData } from '../../Components/ShareEditor/ShareEditorProps';
import { getSharedBinByID } from '../../Helpers/FireBase/ShareBin';
import { Text } from '../../Components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { AppContext } from '../../Context/ThemeContext/ThemeContext';
import { dracula, github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const SharedWithMe = ({}: SharedWithMeProps) => {
  const { targetId } = useParams();
  const [data, setData] = useState<TShareBinData | null>();
  const { isDark } = useContext(AppContext);

  useEffect(() => {
    if (targetId) {
      getSharedBinByID(targetId)
        .then((d) => {
          setData(d);
        })
        .catch(() => {
          setData({
            code: 'Something went wrong...',
            comment: '',
            headline: '',
          });
        });
    }
  }, [targetId]);
  return (
    <div className={styles.container}>
      <Text style={{ alignSelf: 'center' }} padding={'25px'} variant="h6">
        Shared With Me
        <div className={styles.separator} />
      </Text>
      <div className={styles.content}>
        <Text padding={'10px'} variant="h5">
          Headline : {data?.headline}
        </Text>
        <Text padding={'10px'} variant="h6">
          Comment : {data?.comment}
        </Text>
        <Text></Text>
        <SyntaxHighlighter
          style={isDark ? dracula : github}
          showLineNumbers={true}
          language="javascript"
        >
          {data?.code ?? 'loading....'}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
export default SharedWithMe;
