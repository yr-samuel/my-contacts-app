import { useState } from 'react';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import { ButtonContainer, Form } from './styles';
import isEmailValid from '../../utils/isEmailValid';
import formatPhone from '../../utils/formatPhone';
import useErrors from '../../hooks/useErrors';

export default function ContactForm({ buttonLabel }) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [category, setCategory] = useState('');
	const { setError, removeError, getErrorMessageByFieldName } = useErrors();

	function handleNameChange(event) {
		setName(event.target.value);

		if (!event.target.value) {
			setError({ field: event.target.name, message: 'Nome é obrigatório' });
		} else {
			removeError(event.target.name);
		}
	}

	function handleEmailChange(event) {
		setEmail(event.target.value);

		if (event.target.value && !isEmailValid(event.target.value)) {
			setError({ field: event.target.name, message: 'E-mail inválido' });
		} else {
			removeError(event.target.name);
		}
	}

	function handlePhoneChange(event) {
		setPhone(formatPhone(event.target.value));
	}

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<Form onSubmit={handleSubmit} noValidate>
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
					type="email"
					name="email"
					value={email}
					onChange={handleEmailChange}
					error={getErrorMessageByFieldName('email')}
				/>
			</FormGroup>

			<FormGroup>
				<Input
					placeholder="Telefone"
					type="tel"
					value={phone}
					onChange={handlePhoneChange}
					maxLength="15"
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
