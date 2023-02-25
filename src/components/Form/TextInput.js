import { ErrorMessage, useField } from 'formik';
import { Form } from 'react-bootstrap';

export const TextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<>
			<Form.Label htmlFor={props.id || props.name}>{label}</Form.Label>
			<Form.Control {...field} {...props} />

			{!!meta.touched && meta.error && (
				<Form.Control.Feedback type='invalid'>
					<ErrorMessage name={props.name} />
				</Form.Control.Feedback>
			)}
		</>
	);
};
