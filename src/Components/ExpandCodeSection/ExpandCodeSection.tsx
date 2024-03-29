import React, { useContext } from 'react';
import { ExpandCodeSectionProps } from './ExpandCodeSectionProps';
import { Collapse, CardContent, Typography } from '@mui/material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula, github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { AppContext } from '../../Context/ThemeContext/ThemeContext';

export const ExpandCodeSection = ({
  expanded,
  item,
}: ExpandCodeSectionProps) => {
  const { isDark } = useContext(AppContext);

  return (
    <Collapse in={expanded} timeout="auto">
      <CardContent>
        {item.desc ? (
          <Typography style={{ whiteSpace: 'pre-line' }} variant="body1">
            {item.desc}
          </Typography>
        ) : null}
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
