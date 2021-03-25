import React from 'react';
import { AuthBtn } from './styles';

const AuthButton = ({ text, registration, registerBody }) => {
  const sendData = (event) => {
    event.preventDefault();
    const { name, email, password } = registerBody;
    registration(name, email, password);
  };

  return (
    <AuthBtn type='submit' onClick={(event) => sendData(event)}>
      {text}
    </AuthBtn>
  );
};

export default AuthButton;
