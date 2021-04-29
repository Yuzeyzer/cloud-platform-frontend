import React from 'react';
import { useDispatch } from 'react-redux';
import { removeUploadFile } from '../../../reducers/uploadReducer';
import {
  UploadFileWrapper,
  UploadFileHeader,
  UploadFileUploadBar,
  UploadFileProgressBar,
  UploadFilePercent,
} from './style';

const UploadFile = ({ file }) => {

  const dispatch = useDispatch();
  
  return (
    <UploadFileWrapper>
      <UploadFileHeader className='header'>
        <div>{file.name}</div>
        <button onClick={() => dispatch(removeUploadFile(file.id))}>X</button>
      </UploadFileHeader>
      <UploadFileProgressBar>
        <UploadFileUploadBar width={file.progress} />
        <UploadFilePercent>{file.progress}%</UploadFilePercent>
      </UploadFileProgressBar>
    </UploadFileWrapper>
  );
};

export default UploadFile;
