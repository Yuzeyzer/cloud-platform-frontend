import styled from 'styled-components';

export const UploaderWrapper = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  width: 300px;
  height: 300px;
  background-color: #566885;
  padding: 20px;
  border-radius: 12px;
  overflow-y: auto;
`;

export const UploaderHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UploaderTitle = styled.h3`
  color: #fff;
  font-size: 20px;
`;

export const UploaderCloseButton = styled.button`
  padding: 3px;
`;

export const UploadFileWrapper = styled.div`
  background-color: #fff;
  border-radius: 8px;
  margin: 5px 0;
  padding: 5px 10px;
`;

export const UploadFileHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UploadFileProgressBar = styled.div`
  height: 16px;
  border-radius: 8px;
  background-color: #566885;
  display: flex;
  margin: 3px 0;
`;

export const UploadFileUploadBar = styled.div`
  width: ${({ width }) => width + '%'};
  background-color: green;
  border-radius: 8px;
`;

export const UploadFilePercent = styled.div`
  color: #fff;
  left: 50%;
  position: absolute;
`;
