import styled from 'styled-components';

export const Overlay = styled.div`
	background-color: rgba(0, 0, 0, 0.6);
	backdrop-filter: blur(4px);
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Container = styled.div`
	background-color: #fff;
	border-radius: 4px;
	padding: 24px;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
	max-width: 450px;
	width: 100%;

	h1 {
		font-size: 22px;
		color: ${({ theme, danger }) => (danger ? theme.colors.danger.main : theme.colors.gray[900])}
	}

	p {
		margin-top: 8px;
	}
`;

export const Footer = styled.footer`
	margin-top: 32px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 8px;

	.cancel-button {
		background-color: transparent;
		border: none;
		color: ${({ theme }) => theme.colors.gray[200]};
		font-size: 16px;
	}
`;
