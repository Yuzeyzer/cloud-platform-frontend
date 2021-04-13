import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFiles, createDir } from '../../actions/file';
import { DiskWrapper, BtnsWrapper, BtnCreate } from './styles';
import FileList from './fileList/fileList';
import Popup from './popup';

const Disk = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.files.currentDir);
  const [activePopup, setActivePopup] = React.useState(false);

  React.useEffect(() => {
    dispatch(getFiles(currentDir));
  }, [currentDir]);

  // const createHandler = () => {
  //   dispatch(createDir(currentDir, 'Aki'));
  // };

  return (
    <DiskWrapper>
      <BtnsWrapper>
        <button className='disk__back'>Назад</button>
        <BtnCreate onClick={() => setActivePopup(true)}>Создать папку</BtnCreate>
      </BtnsWrapper>
      <FileList />
      <Popup setActivePopup={setActivePopup} activePopup={activePopup} currentDir={currentDir} />
    </DiskWrapper>
  );
};

export default Disk;
