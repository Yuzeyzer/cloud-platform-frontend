import styled from 'styled-components';

export const DiskWrapper = styled.div`
  margin-top: 20px;
`;

export const BtnsWrapper = styled.div`
  display: flex;
`;

export const BtnCreate = styled.button`
  margin-left: 10px;
`;

export const DiskUploadInput = styled.input`
  display: none;
`;

export const DiskUploadLabel = styled.label`
  border: 2px dashed #000;
  padding: 5px 10px;
  margin-left: 40px;
  cursor: pointer;
`;

export const DragEnter = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  margin: 20px;
  border: 2px dashed #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
`;
