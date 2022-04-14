import styled, { css } from 'styled-components';

export default styled.button`
	height: 52px;
	padding: 0 16px;
	border: none;
	background-color: ${({ theme }) => theme.colors.primary.main};
	font-size: 16px;
	font-weight: bold;
	color: #fff;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
	border-radius: 4px;
	transition: background 0.2 ease-in;

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary.light};
	}

	&:active {
		background-color: ${({ theme }) => theme.colors.primary.dark};
	}

	&:disabled /* || &[disabled] */ {
		background-color: #ccc;
		cursor: default;
	}

	${({ theme, danger }) => danger && css`
		background-color: ${theme.colors.danger.main};

		&:hover {
		background-color: ${theme.colors.danger.light};
	}

	&:active {
		background-color: ${theme.colors.danger.dark};
	}
	`}
`;
