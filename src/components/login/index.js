import React from 'react';
import Input from '../input';
import AuthButton from '../authBtn';
import { LoginTitle, LoginForm, LoginBody } from './styles';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/userAction';

const Login = () => {
  const [loginBody, setLoginBody] = React.useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(login(loginBody));
    setLoginBody({ email: '', password: '' });
  };

  return (
    <LoginBody>
      <LoginForm onSubmit={onSubmit}>
        <LoginTitle>Авторизация</LoginTitle>
        <Input
					name="email"
          value={loginBody.email}
          setValue={setLoginBody}
          text='Введите адрес электронной почты...'
        />
        <Input
					name="password"
          value={loginBody.password}
          setValue={setLoginBody}
          text='Введите пароль...'
          type='password'
        />
        <AuthButton text='Войти' />
      </LoginForm>
    </LoginBody>
  );
};

export default Login;
