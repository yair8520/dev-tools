import React, { useState } from 'react';
import './DropZone.css';
import { DropZoneProps } from './DropZoneProps';

export const DropZone = ({
  onChange,
  fileName,
  setFileName,
}: DropZoneProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (e: {
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: {
    preventDefault: () => void;
    dataTransfer: { files: any };
  }) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result;
      onChange(content);
    };
    reader.readAsText(file);
  };

  const handleFileChange = (e: { target: { files: any } }) => {
    const file = e.target.files[0];
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result;
      onChange(content);
    };
    reader.readAsText(file);
  };

  return (
    <form id="form-file-upload">
      <label
        id="label-file-upload"
        htmlFor="input-file-upload"
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={isDragging ? 'dragging' : ''}
      >
        {!fileName ? (
          <div>
            <p>Drag and drop your file here</p>
            <p>or click for file explorer </p>
          </div>
        ) : (
          <p>{fileName}</p>
        )}
      </label>
      <input type="file" id="input-file-upload" onChange={handleFileChange} />
    </form>
  );
};
