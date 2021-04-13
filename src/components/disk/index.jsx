import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFiles } from '../../actions/file';
import { DiskWrapper, BtnsWrapper, BtnCreate } from './styles';
import { setCurrentDir } from '../../reducers/fileReducer';
import FileList from './fileList/fileList';
import Popup from './popup';

const Disk = () => {
  const dispatch = useDispatch();
  const [activePopup, setActivePopup] = React.useState(false);

  const currentDir = useSelector((state) => state.files.currentDir);
  const dirStack = useSelector((state) => state.files.dirStack);

  React.useEffect(() => {
    dispatch(getFiles(currentDir));
  }, [currentDir]);

  const backDirHandler = () => {
    const backDirId = dirStack.pop();
    dispatch(setCurrentDir(backDirId));
  };

  return (
    <DiskWrapper>
      <BtnsWrapper>
        <button onClick={backDirHandler} className='disk__back'>
          Назад
        </button>
        <BtnCreate onClick={() => setActivePopup(true)}>Создать папку</BtnCreate>
      </BtnsWrapper>
      <FileList />
      <Popup setActivePopup={setActivePopup} activePopup={activePopup} currentDir={currentDir} />
    </DiskWrapper>
  );
};

export default Disk;
