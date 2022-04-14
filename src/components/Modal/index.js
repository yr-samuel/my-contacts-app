import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Footer, Overlay } from './styles';
import Button from '../Button';

export default function Modal({ danger = false }) {
	return ReactDOM.createPortal(
		<Overlay>
			<Container danger={danger}>
				<h1>Titulo do Modal</h1>
				<p>Corpo do modal</p>
				<Footer>
					<button type="button" className="cancel-button">Cancelar</button>
					<Button type="button" danger={danger}>Deletar</Button>
				</Footer>
			</Container>
		</Overlay>,
		document.getElementById('modal-root'),
	);
}
