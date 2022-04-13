import {
	Container,
	Header,
	ListContainer,
	Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function ContactsList() {
	return (
		<Container>
			<Header>
				<strong>3 contatos</strong>
				<a href="/">Novo Contato</a>
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
						<a href="/">
							<img src={edit} alt="Edit contact" />
						</a>
						<button type="button">
							<img src={trash} alt="Delete contact" />
						</button>
					</div>
				</Card>
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
						<a href="/">
							<img src={edit} alt="Edit contact" />
						</a>
						<button type="button">
							<img src={trash} alt="Delete contact" />
						</button>
					</div>
				</Card>
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
						<a href="/">
							<img src={edit} alt="Edit contact" />
						</a>
						<button type="button">
							<img src={trash} alt="Delete contact" />
						</button>
					</div>
				</Card>
			</ListContainer>
		</Container>
	);
}
