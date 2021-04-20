import styled from 'styled-components';

export const FileWrapper = styled.div`
  margin: 10px 0;
  padding: 8px 0 5px;
  border-top: 2px solid #566885;
  display: grid;
  grid-template-columns: 1fr 4fr repeat(4, 1fr);
  align-items: center;

  &:hover {
    .file-date {
      grid-column-start: 3;
    }
    .file-size {
      grid-column-start: 4;
    }
    button {
      display: block;
    }
  }
`;

export const FileSize = styled.div`
  grid-column-start: 6;
  justify-self: center;
  transition: 0.3s;
`;

export const FileDate = styled.div`
  grid-column-start: 5;
  justify-self: center;
  transition: 0.3s;
`;

export const FileImg = styled.img`
  justify-self: center;
`;

export const DonwloadButton = styled.button`
  display: none;
  grid-column-start: 5;
`;

export const DeleteButton = styled.button`
  display: none;
  grid-column-start: 6;
`;
