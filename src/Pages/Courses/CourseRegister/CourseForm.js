import { useState } from 'react';
import { Form as FormBt } from 'react-bootstrap';
import { Checkbox } from '../../../components/Form/CheckBox';
import { SelectInput } from '../../../components/Form/SelectInput';
import { TextInput } from '../../../components/Form/TextInput';

export const CourseForm = ({ errors, values, touched }) => {
	const [hasDiscount, setHasDiscount] = useState(false);

	const handleCheckboxChange = (event) => {
		setHasDiscount(event.target.checked);
	};

	return (
		<>
			<FormBt.Group className='mb-3'>
				<TextInput
					label='Título'
					name='title'
					placeholder='Fundamentos de Javascript'
					isInvalid={!!errors.title && touched.title}
				/>

				{/* <TextInput  /> */}
			</FormBt.Group>

			<FormBt.Group className='mb-3'>
				<TextInput
					label='Descripción'
					name='description'
					as='textarea'
					maxLength='250'
					style={{ resize: 'none' }}
					placeholder='Ingresa una pequeña descripción del curso'
					isInvalid={!!errors.description && touched.description}
				/>
			</FormBt.Group>
			<FormBt.Group className='mb-3'>
				<TextInput
					label='Precio'
					name='price'
					type='number'
					placeholder='300'
					isInvalid={!!errors.price && touched.price}
				/>
			</FormBt.Group>

			<FormBt.Group className='mb-3 d-flex align-items-center'>
				<Checkbox
					label='Descuento'
					name='hasDiscount'
					onChange={handleCheckboxChange}
					className='me-2'
				/>

				{hasDiscount && (
					<TextInput
						name='discount'
						type='number'
						placeholder='Porcentaje'
						isInvalid={!!errors.discount && touched.discount}
					/>
				)}
			</FormBt.Group>

			<FormBt.Group className='mb-3'>
				{/* Categorias */}
				<SelectInput
					label='Categoría'
					name='category'
					defaultText='Selecciona una categoría'
					options={[
						{ value: '1', label: 'Desarrollo web' },
						{ value: '2', label: 'Desarrollo móvil' },
						{ value: '3', label: 'Diseño' },
						{ value: '4', label: 'Marketing' },
					]}
					isInvalid={!!errors.category && touched.category}
				/>
			</FormBt.Group>

			<FormBt.Group className='mb-3'>
				{/* Categorias */}
				<SelectInput
					label='Encuesta'
					name='survey'
					defaultText='Selecciona una encuesta'
					options={[
						{ value: '1', label: 'Desarrollo web' },
						{ value: '2', label: 'Desarrollo móvil' },
						{ value: '3', label: 'Diseño' },
						{ value: '4', label: 'Marketing' },
					]}
					isInvalid={!!errors.survey && touched.survey}
				/>
			</FormBt.Group>
		</>
	);
};
