import styled from 'styled-components'

export const LoginBody = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: calc(100vh - 54px);
`

export const LoginTitle = styled.h1`
	font-family: 'Roboto',sans-serif;
	font-style: normal;
	font-weight: bold;
	font-size: 28px;
	line-height: 33px;
	color: #566885;	
	text-align: center;
	margin-bottom: 40px;
`

export const LoginForm = styled.form`
	padding: 25px 33px;
	width: 500px;
	height: 300px;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
	border-radius: 15px;
	input {
		margin-bottom: 20px;
	}
`