import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFiles } from '../../actions/file';
import { DiskWrapper, BtnsWrapper, BtnCreate } from './styles';
import FileList from './fileList/fileList';

const Disk = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.files.currentDir);

  React.useEffect(() => {
    dispatch(getFiles(currentDir));
  }, [currentDir]);

  return (
    <DiskWrapper>
      <BtnsWrapper>
        <button className='disk__back'>Назад</button>
        <BtnCreate>Создать папку</BtnCreate>
      </BtnsWrapper>
      <FileList />
    </DiskWrapper>
  );
};

export default Disk;
