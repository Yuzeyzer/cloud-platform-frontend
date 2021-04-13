import React from 'react';
import { FileWrapper, FileDate, FileSize, FileImg } from './styles';
import directoryIcon from '../../../../assets/directory.svg';
import fileIcon from '../../../../assets/file.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentDir, pushToStack } from '../../../../reducers/fileReducer';

const File = ({ file }) => {
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.files.currentDir);

  const openDirHandler = () => {
    if (file.type === 'directory') {
      dispatch(pushToStack(currentDir));
      dispatch(setCurrentDir(file._id));
    }
  };

  return (
    <FileWrapper onClick={openDirHandler}>
      <FileImg src={file.type === 'directory' ? directoryIcon : fileIcon} alt='' />
      <div>{file.name}</div>
      <FileDate>{file.date.slice(0, 10)}</FileDate>
      <FileSize>{file.size}</FileSize>
    </FileWrapper>
  );
};

export default File;
