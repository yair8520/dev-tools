import React, { useContext } from 'react';
import styles from './ExpandCodeSection.module.css';
import { ExpandCodeSectionProps } from './ExpandCodeSectionProps';
import { Collapse, CardContent, Typography } from '@mui/material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula, github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { AppContext } from '../ThemeContext/ThemeContext';

export const ExpandCodeSection = ({
  expanded,
  item,
}: ExpandCodeSectionProps) => {
  const { isDark } = useContext(AppContext);

  return (
    <Collapse in={expanded} timeout="auto">
      <CardContent>
        <Typography style={{ whiteSpace: 'pre-line' }} variant="body1">
          {item.desc}
        </Typography>
        <div>
          <SyntaxHighlighter
            style={isDark ? dracula : github}
            showLineNumbers={true}
            language="javascript"
          >
            {item.code}
          </SyntaxHighlighter>
        </div>
      </CardContent>
    </Collapse>
  );
};
