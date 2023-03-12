import { Form, Formik } from 'formik';
import { Button, Col, Row } from 'react-bootstrap';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import * as Yup from 'yup';

import { PrimaryButton } from '../../../components/shared/PrimaryButton';
import { CourseAssets } from './CourseAssets';
import { CourseForm } from './CourseForm';

export const CourseRegister = () => {
	const navigate = useNavigate();

	const objectSchema = Yup.object({
		title: Yup.string().required('El nombre es requerido'),
		description: Yup.string()
			.required('La descripción es requerida')
			.max(250, 'La descripción no puede tener más de 200 caracteres'),
		price: Yup.number()
			.required('El precio es requerido')
			.positive('El precio debe ser mayor a 0'),
		discount: Yup.number()
			.positive('El descuento debe ser mayor a 0')
			.max(100, 'El descuento no puede ser mayor a 100'),
		category: Yup.string().required('La categoría es requerida'),
		image: Yup.string().required('La imagen es requerida'),
		survey: Yup.string().required('La encuesta es requerida'),
		sections: Yup.array().of(
			Yup.object().shape({
				name: Yup.string().required('El nombre es requerido'),
				number: Yup.number().required('El número es requerido'),
				video: Yup.string().required('El video es requerido'),
				duration: Yup.number().required('La duración es requerida'),
			})
		),
	});

	const handleOnSubmit = (values, resetForm) => {
		console.log(values);
	};

	return (
		<>
			<Formik
				initialValues={{
					title: '',
					description: '',
					price: '',
					discount: '',
					category: '',
					image: '',
					survey: '',
				}}
				onSubmit={(values, { resetForm }) => {
					handleOnSubmit(values, resetForm);
				}}
				validationSchema={objectSchema}
			>
				{({ errors, values, touched }) => (
					<Form>
						<Row className='mb-3 '>
							<Col xs={6} sm={8} md={9}>
								<div className='align-middle d-flex align-items-center'>
									<MdKeyboardArrowLeft
										style={{
											fontSize: '30px',
											color: '#ccc',
											cursor: 'pointer',
										}}
										onClick={() => navigate('/courses')}
									/>
									<h2 className='d-inline-block m-0'>
										Cursos
									</h2>
								</div>
							</Col>
							<Col xs={6} sm={4} md={3}>
								<div>
									<Button variant='danger' className='me-3'>
										Cancelar
									</Button>

									<PrimaryButton
										className='w-auto px-3'
										type='submit'
										text='Crear curso'
									/>
								</div>
							</Col>
						</Row>

						<Row>
							<Col xs={12} sm={6} md={6} lg={6}>
								<CourseForm
									errors={errors}
									values={values}
									touched={touched}
								/>
							</Col>
							<Col xs={12} sm={6} md={6} lg={6}>
								<CourseAssets
									errors={errors}
									values={values}
									touched={touched}
								/>
							</Col>
						</Row>
					</Form>
				)}
			</Formik>
		</>
	);
};
