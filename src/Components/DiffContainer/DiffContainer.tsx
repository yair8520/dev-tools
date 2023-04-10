import React, { useRef } from 'react';
import './DiffContainer.module.css';
import { DiffContainerProps } from './DiffContainerProps';
import ReactDiffViewer from 'react-diff-viewer';

export const DiffContainer = ({ original, changed }: DiffContainerProps) => {
  return (
    <ReactDiffViewer
      leftTitle={'Changed'}
      rightTitle={'Original'}
      oldValue={original}
      newValue={changed}
      splitView={true}
      showDiffOnly={false}
    />
  );
};
