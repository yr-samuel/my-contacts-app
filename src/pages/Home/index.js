import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
	Container,
	Header,
	ListHeader,
	Card,
	InputSearchContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
	const [contacts, setContacts] = useState([]);
	const [orderBy, setOrderBy] = useState('asc');

	const handleToggleOrderBy = useCallback(() => {
		setOrderBy((previousOrderBy) => (previousOrderBy === 'asc' ? 'desc' : 'asc'));
	}, []);

	useEffect(() => {
		(async () => {
			const response = await fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`);
			const contactsResponse = await response.json();

			setContacts(contactsResponse);
		})();
	}, [orderBy]);

	return (
		<Container>
			<InputSearchContainer>
				<input type="text" placeholder="Pesquisar contato" />
			</InputSearchContainer>

			<Header>
				<strong>
					{contacts.length}
					{contacts.length === 1 ? ' contato' : ' contatos'}
				</strong>
				<Link to="/new">Novo Contato</Link>
			</Header>

			<ListHeader orderBy={orderBy}>
				<button type="button" className="sort-button" onClick={handleToggleOrderBy}>
					<span>Nome</span>
					<img src={arrow} alt="arrow" />
				</button>
			</ListHeader>

			{contacts.map((contact) => (
				<Card key={contact.id}>
					<div className="info">
						<div className="contact-name">
							<strong>{contact.name}</strong>
							{contact.category_name && <small>{contact.category_name}</small>}
						</div>
						<span>{contact.email}</span>
						<span>{contact.phone}</span>
					</div>
					<div className="actions">
						<Link to={`/edit/${contact.id}`}>
							<img src={edit} alt="Edit contact" />
						</Link>
						<button type="button">
							<img src={trash} alt="Delete contact" />
						</button>
					</div>
				</Card>
			))}
		</Container>
	);
}
