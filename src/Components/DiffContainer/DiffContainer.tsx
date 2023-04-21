import React, { useContext } from 'react';
import './DiffContainer.module.css';
import { DiffContainerProps } from './DiffContainerProps';
import ReactDiffViewer from 'react-diff-viewer';
import { AppContext } from '../ThemeContext/ThemeContext';

export const DiffContainer = ({ original, changed }: DiffContainerProps) => {
  const { isDark } = useContext(AppContext);

  return (
    <ReactDiffViewer
      useDarkTheme={isDark}
      rightTitle={'Changed'}
      leftTitle={'Original'}
      oldValue={original}
      newValue={changed}
      splitView={true}
      showDiffOnly={false}
    />
  );
};
