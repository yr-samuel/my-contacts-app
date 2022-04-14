import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import { ButtonContainer, Form } from './styles';

export default function ContactForm({ buttonLabel }) {
	return (
		<Form>
			<FormGroup>
				<Input placeholder="Nome" />
			</FormGroup>
			<FormGroup>
				<Input placeholder="Email" />
			</FormGroup>
			<FormGroup>
				<Input placeholder="Telefone" />
			</FormGroup>
			<FormGroup>
				<Select>
					<option value="instagram">Instagram</option>
				</Select>
			</FormGroup>
			<ButtonContainer>
				<Button type="submit">{buttonLabel}</Button>
			</ButtonContainer>
		</Form>
	);
}
