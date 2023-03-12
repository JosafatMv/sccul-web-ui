import { Form, Formik } from 'formik';
import { Button, Modal, Form as FormBt } from 'react-bootstrap';
import * as Yup from 'yup';
import { TextInput } from '../../../components/Form/TextInput';
import { VideoUpload } from '../../../components/Form/VideoUpload';

export const AddSection = ({
	showModal,
	handleCloseModal,
	isUpdating = false,
	initialValues = { name: '' },
}) => {
	const validationSchema = Yup.object({
		name: Yup.string().required('El nombre es requerido'),
		video: Yup.string().required('El video es requerido'),
	});

	const handleOnSubmit = async (values) => {
		console.log(values);
	};

	return (
		<Modal show={showModal} onHide={handleCloseModal}>
			<Modal.Header closeButton>
				<Modal.Title>
					{' '}
					{isUpdating ? 'Modificar sección' : 'Añadir sección'}
				</Modal.Title>
			</Modal.Header>

			<Formik
				initialValues={initialValues}
				onSubmit={(values, { resetForm }) => {
					handleOnSubmit(values, resetForm);
				}}
				validationSchema={validationSchema}
			>
				{({ errors, values, touched }) => (
					<Form>
						<Modal.Body>
							<TextInput
								label='Nombre'
								name='name'
								type='text'
								placeholder='Ingrese el nombre de la sección'
								isInvalid={!!errors.name && touched.name}
							/>

							<FormBt.Group className='my-3'>
								<VideoUpload />
							</FormBt.Group>
						</Modal.Body>
						<Modal.Footer>
							<Button
								variant='secondary'
								onClick={handleCloseModal}
							>
								Cerrar
							</Button>
							<Button
								type='submit'
								disabled={!values.name || !!errors.name}
							>
								{isUpdating ? 'Modificar' : 'Crear'}
							</Button>
						</Modal.Footer>
					</Form>
				)}
			</Formik>
		</Modal>
	);
};
