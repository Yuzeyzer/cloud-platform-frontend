import styled from 'styled-components';

export const FileListWrapper = styled.div`
  margin: 20px 0;
`;

export const FileListHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr repeat(4, 1fr);
`;

export const FileListName = styled.div`
  grid-column-start: 2;
  
`;

export const FileListDate = styled.div`
  grid-column-start: 5;
  justify-self: center;
`;

export const FileListSize = styled.div`
  grid-column-start: 6;
  justify-self: center;
`;
