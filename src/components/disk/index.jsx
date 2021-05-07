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
import Uploader from './uploader';
import './loader.css';

const Disk = () => {
  const dispatch = useDispatch();
  const [activePopup, setActivePopup] = React.useState(false);
  const [dragEnter, setDragEnter] = React.useState(false);
  const [sort, setSort] = React.useState('name');

  const popupRef = React.useRef();

  const { loader } = useSelector((state) => state.loader);
  const currentDir = useSelector((state) => state.files.currentDir);
  const dirStack = useSelector((state) => state.files.dirStack);

  console.log(loader);

  React.useEffect(() => {
    console.log(sort);
    dispatch(getFiles(currentDir, sort));
  }, [currentDir, sort]);

  const backDirHandler = () => {
    const backDirId = dirStack.pop();
    dispatch(setCurrentDir(backDirId));
  };

  const fileUploadHandler = (event) => {
    const files = [...event.target.files];
    files.forEach((file) => dispatch(uploadFile(file, currentDir)));
  };

  const stopTarget = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const dragEnterHandler = (event) => {
    stopTarget(event);
    setDragEnter(true);
  };

  const dragOverHandler = (event) => {
    stopTarget(event);
    setDragEnter(true);
  };

  const dragLeaveHandler = (event) => {
    stopTarget(event);
    setDragEnter(false);
  };

  const dropHandler = (event) => {
    stopTarget(event);
    const files = [...event.dataTransfer.files];
    files.forEach((file) => dispatch(uploadFile(file, currentDir)));
    setDragEnter(false);
  };

  if (loader) {
    return (
      <div className='loader-container'>
        <div class='lds-ring'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

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
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className='disk__select'>
            <option value='name'>По имени</option>
            <option value='type'>По типу</option>
            <option value='date'>По дате</option>
            <option value='size'>По размеру</option>
          </select>
        </div>
      </BtnsWrapper>
      <FileList />
      {activePopup && (
        <Popup
          popupRef={popupRef}
          setActivePopup={setActivePopup}
          activePopup={activePopup}
          currentDir={currentDir}
        />
      )}
      <Uploader />
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
