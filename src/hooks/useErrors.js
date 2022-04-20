import { useState } from 'react';

export default function useErrors() {
	const [errors, setErrors] = useState([]);

	function setError({ field, message }) {
		const errorAlreadyExists = errors.find((error) => error.field === field);

		if (errorAlreadyExists) return;

		setErrors((prevState) => [...prevState, { field, message }]);
	}

	function removeError(fieldName) {
		setError((prevState) => prevState.filter((error) => error.field !== fieldName));
	}

	function getErrorMessageByFieldName(fieldName) {
		const errorByFieldName = errors.find((error) => error.field === fieldName);
		return errorByFieldName?.message;
	}

	return {
		setError, removeError, getErrorMessageByFieldName,
	};
}