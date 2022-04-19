import { useState } from 'react';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import { ButtonContainer, Form } from './styles';

export default function ContactForm({ buttonLabel }) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [category, setCategory] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log({
			name, email, phone, category,
		});
	};

	return (
		<Form onSubmit={handleSubmit}>
			<FormGroup>
				<Input placeholder="Nome" value={name} onChange={(event) => setName(event.target.value)} />
			</FormGroup>
			<FormGroup>
				<Input placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
			</FormGroup>
			<FormGroup>
				<Input placeholder="Telefone" value={phone} onChange={(event) => setPhone(event.target.value)} />
			</FormGroup>
			<FormGroup>
				<Select value={category} onChange={(event) => setCategory(event.target.value)}>
					<option value="">Categoria</option>
					<option value="instagram">Instagram</option>
					<option value="twitter">Twitter</option>
					<option value="linkedin">Linkedin</option>
				</Select>
			</FormGroup>
			<ButtonContainer>
				<Button type="submit">{buttonLabel}</Button>
			</ButtonContainer>
		</Form>
	);
}
