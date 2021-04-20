import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFiles, uploadFile } from '../../actions/file';
import {
  DiskWrapper,
  BtnsWrapper,
  BtnCreate,
  DiskUploadLabel,
  DiskUploadInput,
  DragEnter,
} from './styles';
import { setCurrentDir } from '../../reducers/fileReducer';
import FileList from './fileList/fileList';
import Popup from './popup';

const Disk = () => {
  const dispatch = useDispatch();
  const [activePopup, setActivePopup] = React.useState(false);
  const [dragEnter, setDragEnter] = React.useState(false);

  const currentDir = useSelector((state) => state.files.currentDir);
  const dirStack = useSelector((state) => state.files.dirStack);

  React.useEffect(() => {
    dispatch(getFiles(currentDir));
  }, [currentDir]);

  const backDirHandler = () => {
    const backDirId = dirStack.pop();
    dispatch(setCurrentDir(backDirId));
  };

  const fileUploadHandler = (event) => {
    const files = [...event.target.files];

    files.forEach((file) => dispatch(uploadFile(file)));
  };

  const stopTarget = (event) => {
    event.preventDefault();
    event.stopPropagation();
  }

  const dragEnterHandler = (event) => {
    stopTarget(event)
    setDragEnter(true);
  };

  const dragOverHandler = (event) => {
    stopTarget(event)
    setDragEnter(true);
  };

  const dragLeaveHandler = (event) => {
    stopTarget(event)
    setDragEnter(false);
  };

  const dropHandler = (event) => {
    stopTarget(event)
    const files = [...event.dataTransfer.files];
    files.forEach((file) => dispatch(uploadFile(file)));
    setDragEnter(false);
  };

  return !dragEnter ? (
    <DiskWrapper
      onDragEnter={dragEnterHandler}
      onDragLeave={dragLeaveHandler}
      onDragOver={dragOverHandler}>
      <BtnsWrapper>
        <button onClick={backDirHandler} className='disk__back'>
          Назад
        </button>
        <BtnCreate onClick={() => setActivePopup(true)}>Создать папку</BtnCreate>
        <div className='disk__upload'>
          <DiskUploadLabel htmlFor='upload-input'>Загрузить файл</DiskUploadLabel>
          <DiskUploadInput
            multiple={true}
            onChange={(event) => fileUploadHandler(event)}
            id='upload-input'
            type='file'
          />
        </div>
      </BtnsWrapper>
      <FileList />
      <Popup setActivePopup={setActivePopup} activePopup={activePopup} currentDir={currentDir} />
    </DiskWrapper>
  ) : (
    <DragEnter
      onDrop={(event) => dropHandler(event)}
      onDragEnter={dragEnterHandler}
      onDragLeave={dragLeaveHandler}
      onDragOver={dragOverHandler}>
      Перетащите файлы сюда
    </DragEnter>
  );
};

export default Disk;
