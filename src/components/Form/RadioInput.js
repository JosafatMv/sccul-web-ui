import { ErrorMessage, useField } from 'formik';
import { Form } from 'react-bootstrap';

export const RadioInput = ({ label, options, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<>
			<Form.Label>{label}</Form.Label>

			{options.map((option) => (
				<Form.Check
					key={option.value}
					type='radio'
					label={option.label}
					value={option.value}
					name={field.name}
					onChange={field.onChange}
					onBlur={field.onBlur}
					checked={field.value === option.value}
				/>
			))}

			{!!meta.touched && meta.error && (
				<Form.Control.Feedback type='invalid' className='d-block'>
					<ErrorMessage name={props.name} />
				</Form.Control.Feedback>
			)}
		</>
	);
};
