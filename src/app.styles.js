import {createGlobalStyle } from 'styled-components'

export const AppGlobalStyles = createGlobalStyle`
	input,button { 
		outline: none;
		border: none;
	}
	h1,h2,h3,h4,h5,h6,ul,p {
		margin:0;
	}
	ul {
		padding:0;
		list-style: none;
	}
	a {
		text-decoration: none;
		color: #566885;
	}
	body	{font-family: 'Roboto', 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif}
`