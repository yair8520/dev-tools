import React from 'react';
import './ExpandableSection.css';
import { ExpandableSectionProps } from './ExpandableSectionProps';

export const ExpandableSection = ({
  children,
  expend,
}: ExpandableSectionProps) => {
  return (
    <div className={`container`}>
      <div className={`section-content ${expend ? 'expanded' : ''}`}>
        {children}
      </div>
    </div>
  );
};
