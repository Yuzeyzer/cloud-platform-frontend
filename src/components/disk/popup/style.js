import styled from 'styled-components';

export const PopupWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  input {
    margin: 20px 0;
  }
`;

export const PopupContent = styled.div`
  width: 400px;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

export const PopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PopupCreateBtn = styled.button`
  align-self: flex-end;
`;

export const PopupInput = styled.input`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #566885;
  border-bottom: 1px solid #566885;
`;
