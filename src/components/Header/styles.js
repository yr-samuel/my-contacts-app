import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 74px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const InputSearchContainer = styled.div`
	margin-top: 48px;
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
