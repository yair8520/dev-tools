import React from 'react';
import './DropZone.css';
import { DropZoneProps } from './DropZoneProps';

export const DropZone = ({
  onChange,
  fileName,
  setFileName,
}: DropZoneProps) => {
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

    const file = e.dataTransfer.files[0];
    if (file.type === 'application/json' || file.type === 'text/plain') {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result;
        onChange(content);
      };
      reader.readAsText(file);
    } else {
      alert('Invalid file type. Only JSON and TXT files are supported.');
    }
  };

  const handleFileChange = (e: { target: { files: any } }) => {
    const file = e.target.files[0];
    if (file.type === 'application/json' || file.type === 'text/plain') {
      setFileName(file.name);

      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result;
        onChange(content);
      };
      reader.readAsText(file);
    } else {
      alert('Invalid file type. Only JSON and TXT files are supported.');
    }
  };

  return (
    <form id="form-file-upload">
      <label
        id="label-file-upload"
        htmlFor="input-file-upload"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
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
