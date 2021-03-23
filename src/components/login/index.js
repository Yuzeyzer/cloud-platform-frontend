import React from 'react'
import Input from '../input'
import AuthButton from '../authBtn'
import {LoginTitle,LoginForm,LoginBody} from './styles'

const Login = () => {
	return (
		<LoginBody>
			<LoginForm>
				<LoginTitle>Авторизация</LoginTitle>
				<Input text="Введите адрес электронной почты..."/>
				<Input text="Введите пароль..." type='password'/>
				<AuthButton text="Войти"/>
			</LoginForm>
		</LoginBody>
	)
}

export default Login
