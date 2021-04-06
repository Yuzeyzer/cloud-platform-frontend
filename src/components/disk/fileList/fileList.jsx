import React from 'react';
import { FileListWrapper, FileListHeader } from './styles';

const FileList = () => {
  return (
    <FileListWrapper>
      <FileListHeader>
        <div className='file-list__name'>Название</div>
        <div className='file-list__date'>Дата</div>
        <div className='file-list__size'>Размер</div>
      </FileListHeader>
    </FileListWrapper>
  );
};

export default FileList;
