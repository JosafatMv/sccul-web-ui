import { ErrorMessage, useField } from 'formik';
import { Form } from 'react-bootstrap';

// import styles from './SelectInput.module.css';

export const SelectInput = ({ label, options, defaultText, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<>
			<Form.Label htmlFor={props.id || props.name}>{label}</Form.Label>
			<Form.Select {...field} {...props}>
				<option value='' disabled>
					{defaultText}
				</option>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</Form.Select>

			{!!meta.touched && meta.error && (
				<Form.Control.Feedback type='invalid' className='d-block'>
					<ErrorMessage name={props.name} />
				</Form.Control.Feedback>
			)}
		</>
	);
};
