import React from 'react';
import UploadFile from './uploadFile';
import { UploaderWrapper, UploaderHeader, UploaderTitle, UploaderCloseButton } from './style';
import { useSelector, useDispatch } from 'react-redux';
import { hideUploadFile } from '../../../reducers/uploadReducer';

const Uploader = () => {
  const files = useSelector((state) => state.upload.files);
  const isVisible = useSelector((state) => state.upload.isVisible);
  const dispatch = useDispatch();

  return (
    isVisible && (
      <UploaderWrapper>
        <UploaderHeader>
          <UploaderTitle>Загрузки</UploaderTitle>
          <UploaderCloseButton onClick={() => dispatch(hideUploadFile())}>X</UploaderCloseButton>
        </UploaderHeader>
        {files.map((file) => {
          return <UploadFile key={file.id} file={file} />;
        })}
      </UploaderWrapper>
    )
  );
};

export default Uploader;
