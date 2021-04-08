import styled from 'styled-components';

export const FileWrapper = styled.div`
  margin: 10px 0;
  padding: 8px 0 5px;
  border-top: 2px solid #566885;
  display: grid;
  grid-template-columns: 1fr 4fr repeat(4, 1fr);
  align-items: center;
`;

export const FileSize = styled.div`
  grid-column-start: 6;
  justify-self: center;
`;

export const FileDate = styled.div`
  grid-column-start: 5;
  justify-self: center;
`;

export const FileImg = styled.img`
  justify-self: center;
`;
