import { Link } from 'react-router-dom';

import {
	Container,
	Header,
	ListContainer,
	Card,
	InputSearchContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
	return (
		<Container>
			<InputSearchContainer>
				<input type="text" placeholder="Pesquisar contato" />
			</InputSearchContainer>

			<Header>
				<strong>3 contatos</strong>
				<Link to="/new">Novo Contato</Link>
			</Header>

			<ListContainer>
				<header>
					<button type="button" className="sort-button">
						<span>Nome</span>
						<img src={arrow} alt="arrow" />
					</button>
				</header>

				<Card>
					<div className="info">
						<div className="contact-name">
							<strong>Samuel Araújo</strong>
							<small>instagram</small>
						</div>
						<span>samuel.oliveira@eduzz.com</span>
						<span>(15) 99687-4936</span>
					</div>
					<div className="actions">
						<Link to="/edit/123">
							<img src={edit} alt="Edit contact" />
						</Link>
						<button type="button">
							<img src={trash} alt="Delete contact" />
						</button>
					</div>
				</Card>
			</ListContainer>
		</Container>
	);
}
