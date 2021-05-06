import React from 'react';
import { FileWrapper, FileDate, FileSize, FileImg, DonwloadButton, DeleteButton } from './styles';
import directoryIcon from '../../../../assets/directory.svg';
import fileIcon from '../../../../assets/file.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentDir, pushToStack } from '../../../../reducers/fileReducer';
import { deleteFile, downloadFile } from '../../../../actions/file';
import fileSizes from '../../fileSizes';

const File = ({ file }) => {
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.files.currentDir);

  const openDirHandler = () => {
    if (file.type === 'directory') {
      dispatch(pushToStack(currentDir));
      dispatch(setCurrentDir(file._id));
    }
  };

  const donwloadClickHandler = (event) => {
    event.stopPropagation();
    downloadFile(file);
  };

  const deleteClickHandler = (e) => {
    console.log(file);
    e.stopPropagation();
    dispatch(deleteFile(file));
  };

  return (
    <FileWrapper onClick={openDirHandler}>
      <FileImg src={file.type === 'directory' ? directoryIcon : fileIcon} alt='' />
      <h3>{file.name}</h3>
      <FileDate className='file-date'>{file.date.slice(0, 10)}</FileDate>
      <FileSize className='file-size'>{fileSizes(file.size)}</FileSize>
      {file.type !== 'directory' && (
        <DonwloadButton onClick={(event) => donwloadClickHandler(event)}>Download</DonwloadButton>
      )}
      <DeleteButton onClick={(event) => deleteClickHandler(event)}>Delete</DeleteButton>
    </FileWrapper>
  );
};

export default File;
