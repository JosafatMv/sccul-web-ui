import { useField } from 'formik';
import { Form } from 'react-bootstrap';

export const Checkbox = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<Form.Group controlId={props.id || props.name}>
			<Form.Check
				{...field}
				{...props}
				type='checkbox'
				label={label}
				isInvalid={meta.touched && meta.error}
			/>

			{meta.touched && meta.error && (
				<Form.Control.Feedback type='invalid'>
					{meta.error}
				</Form.Control.Feedback>
			)}
		</Form.Group>
	);
};
