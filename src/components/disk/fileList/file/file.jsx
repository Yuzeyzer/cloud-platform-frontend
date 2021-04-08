import React from 'react';
import { FileWrapper, FileDate, FileSize, FileImg } from './styles';
import directoryIcon from '../../../../assets/directory.svg';
import fileIcon from '../../../../assets/file.svg';

const File = ({ file }) => {
  return (
    <FileWrapper>
      <FileImg src={file.type === 'directory' ? directoryIcon : fileIcon} alt='' />
      <div>{file.name}</div>
      <FileDate>{file.date}</FileDate>
      <FileSize>{file.size}</FileSize>
    </FileWrapper>
  );
};

export default File;
