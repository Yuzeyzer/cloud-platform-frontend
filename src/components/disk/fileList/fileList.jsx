import React from 'react';
import {
  FileListWrapper,
  FileListHeader,
  FileListName,
  FileListDate,
  FileListSize,
} from './styles';
import File from './file/file';
import { useSelector } from 'react-redux';

const FileList = () => {
  const files = useSelector((state) => {
    return state.files.files;
  });

  return (
    <FileListWrapper>
      <FileListHeader>
        <FileListName>Название</FileListName>
        <FileListDate>Дата</FileListDate>
        <FileListSize>Размер</FileListSize>
      </FileListHeader>
      {files.map((file) => {
        return <File file={file} key={file._id} />;
      })}
    </FileListWrapper>
  );
};

export default FileList;
