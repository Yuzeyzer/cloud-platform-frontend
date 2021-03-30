import React from 'react';
import { AuthBtn } from './styles';

const AuthButton = ({ text}) => {

  return (
    <AuthBtn type='submit'>
      {text}
    </AuthBtn>
  );
};

export default AuthButton;
