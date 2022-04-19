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
	const [errors, setErrors] = useState([]);

	function handleNameChange(event) {
		const { value, name: fieldName } = event.target;
		setName(value);

		if (!value) {
			setErrors((prevState) => [...prevState, { field: fieldName, message: 'Nome é obrigatório' }]);
		} else {
			setErrors((prevState) => prevState.filter((error) => error.field !== fieldName));
		}
	}

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<Form onSubmit={handleSubmit}>
			<FormGroup>
				<Input placeholder="Nome" name="name" value={name} onChange={handleNameChange} />
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
