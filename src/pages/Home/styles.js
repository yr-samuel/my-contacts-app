import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 32px;
`;

export const InputSearchContainer = styled.div`
	width: 100%;

	input {
		width: 100%;
		background-color: #fff;
		border: none;
		border-radius: 25px;
		height: 50px;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04); // filter: drop-shadow, pode ser q n esteja pra todos os browsers ainda
		padding: 0 16px;
		outline: none;

		&::placeholder {
			color: #bcbcbc;
		}
	}
`;

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 32px;

	strong {
		font-size: 24px;
	}

	a {
		color: ${(({ theme }) => theme.colors.primary.main)};
		text-decoration: none;
		font-weight: bold;
		border: 2px solid ${(({ theme }) => theme.colors.primary.main)};
		padding: 8px 16px;
		border-radius: 4px;
		transition: all 0.2s ease-in;

		&:hover {
			background-color: ${(({ theme }) => theme.colors.primary.main)};
			color: #fff;
		}
	}
`;

export const ListContainer = styled.div`
	margin-top: 24px;

	header {
		margin-bottom: 8px;

		.sort-button {
			background-color: transparent;
			border: none;
			display: flex;
			align-items: center;
		}

		span {
			margin-right: 8px;
			font-weight: bold;
			color: ${(({ theme }) => theme.colors.primary.main)}
		}
	}
`;

export const Card = styled.div`
	background-color: #fff;
	box-shadow: 0 4px 18px rgba(0, 0, 0, 0.04);
	padding: 16px;
	border-radius: 4px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	& + & {
		margin-top: 16px;
	}

	.info {

		.contact-name {
			display: flex;
			align-items: center;

			small {
				background-color: ${(({ theme }) => theme.colors.primary.lighter)};
				color: ${(({ theme }) => theme.colors.primary.main)};
				text-transform: uppercase;
				font-weight: bold;
				padding: 4px;
				border-radius: 4px;
				margin-left: 8px;
			}
		}

		span {
			display: block;
			font-size: 14px;
			color: ${({ theme }) => theme.colors.gray[200]}
		}
	}

	.actions {
		display: flex;
		align-items: center;

		button {
			background-color: transparent;
			border: none;
			margin-left: 8px;
		}

		button, a {
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
`;