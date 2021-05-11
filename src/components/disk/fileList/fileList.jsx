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
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './animate.css';

const FileList = () => {
  const files = useSelector((state) => {
    return state.files.files;
  });

  if (files.length === 0) {
    return (
    <div>
      <h3>Файлы не найдены</h3>
    </div>)
  }

  return (
    <FileListWrapper>
      <FileListHeader>
        <FileListName>Название</FileListName>
        <FileListDate>Дата</FileListDate>
        <FileListSize>Размер</FileListSize>
      </FileListHeader>
      <TransitionGroup>
        {files.map((file) => (
          <CSSTransition key={file._id} timeout={500} classNames='file' exit={false}>
            <File file={file} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </FileListWrapper>
  );
};

export default FileList;
