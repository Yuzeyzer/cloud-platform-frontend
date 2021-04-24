import React from 'react';
import {
  UploadFileWrapper,
  UploadFileHeader,
  UploadFileUploadBar,
  UploadFileProgressBar,
  UploadFilePercent,
} from './style';

const UploadFile = ({ file }) => {
  return (
    <UploadFileWrapper>
      <UploadFileHeader className='header'>
        <div>{file.name}</div>
        <button>X</button>
      </UploadFileHeader>
      <UploadFileProgressBar>
        <UploadFileUploadBar width={file.progress} />
        <UploadFilePercent>{file.progress}%</UploadFilePercent>
      </UploadFileProgressBar>
    </UploadFileWrapper>
  );
};

export default UploadFile;
