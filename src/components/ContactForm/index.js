import { useState } from 'react';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import { ButtonContainer, Form } from './styles';
import isEmailValid from '../../utils/isEmailValid';

export default function ContactForm({ buttonLabel }) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [category, setCategory] = useState('');
	const [errors, setErrors] = useState([]);

	function handleNameChange(event) {
		setName(event.target.value);

		if (!event.target.value) {
			setErrors((prevState) => [...prevState, { field: event.target.name, message: 'Nome é obrigatório' }]);
		} else {
			setErrors((prevState) => prevState.filter((error) => error.field !== event.target.name));
		}
	}

	function handleEmailChange(event) {
		setEmail(event.target.value);

		if (event.target.value && !isEmailValid(event.target.value)) {
			const emailErrorAlreadyExists = errors.find((error) => error.field === event.target.name);

			if (emailErrorAlreadyExists) return;

			setErrors((prevState) => [...prevState, { field: event.target.name, message: 'E-mail inválido' }]);
		} else {
			setErrors((prevState) => prevState.filter((error) => error.field !== event.target.name));
		}
	}

	function getErrorMessageByFieldName(fieldName) {
		const errorByFieldName = errors.find((error) => error.field === fieldName);
		return errorByFieldName?.message;
	}

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<Form onSubmit={handleSubmit}>
			<FormGroup error={getErrorMessageByFieldName('name')}>
				<Input
					placeholder="Nome"
					name="name"
					value={name}
					onChange={handleNameChange}
					error={getErrorMessageByFieldName('name')}
				/>
			</FormGroup>

			<FormGroup error={getErrorMessageByFieldName('email')}>
				<Input
					placeholder="Email"
					name="email"
					value={email}
					onChange={handleEmailChange}
					error={getErrorMessageByFieldName('email')}
				/>
			</FormGroup>

			<FormGroup>
				<Input
					placeholder="Telefone"
					value={phone}
					onChange={(event) => setPhone(event.target.value)}
				/>
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
