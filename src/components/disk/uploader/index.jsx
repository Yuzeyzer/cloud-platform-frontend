import React from 'react';
import UploadFile from './uploadFile';
import { UploaderWrapper, UploaderHeader, UploaderTitle, UploaderCloseButton } from './style';
import { useSelector, useDispatch } from 'react-redux';
import { HIDE_UPLOADER_ACTION } from '../../../reducers/uploadReducer';

const Uploader = () => {
  const files = [
    { id: 1, name: 'file', progress: 50 },
    { id: 2, name: 'file', progress: 75 },
    { id: 3, name: 'file', progress: 25 },
  ];

  const isVisible = useSelector((state) => state.upload.isVisible);
  const dispatch = useDispatch();

  return (
    isVisible && (
      <UploaderWrapper>
        <UploaderHeader>
          <UploaderTitle>Загрузки</UploaderTitle>
          <UploaderCloseButton onClick={() => dispatch(HIDE_UPLOADER_ACTION())}>
            X
          </UploaderCloseButton>
        </UploaderHeader>
        {files.map((file) => {
          return <UploadFile key={file.id} file={file} />;
        })}
      </UploaderWrapper>
    )
  );
};

export default Uploader;
