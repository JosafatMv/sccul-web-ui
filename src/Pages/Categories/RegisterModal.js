import { Form, Formik } from 'formik';
import { Button, Modal } from 'react-bootstrap';
import * as Yup from 'yup';
import { TextInput } from '../../components/Form/TextInput';
import { showSimpleAlert } from '../../shared/plugins/alerts';
import instance from '../../shared/plugins/axios';

export const RegisterModal = ({
	showModal,
	handleCloseModal,
	isUpdating = false,
	initialValues = { name: '' },
}) => {
	const validationSchema = Yup.object({
		name: Yup.string().required('El nombre es requerido'),
	});

	const handleOnSubmit = async (values) => {
		try {
			let response = null;

			if (isUpdating) {
				response = await instance.put(
					`/categories/${values.id}`,
					values
				);
			} else {
				response = await instance.post('/categories/', values);
			}

			handleCloseModal();

			if (response.error)
				showSimpleAlert('Error', response.message, 'error');
		} catch (error) {
			console.log(error);
			handleCloseModal();
			showSimpleAlert(
				'Error',
				'Error del servidor. Intente más tarde',
				'error'
			);
		}
	};

	return (
		<>
			<Modal show={showModal} onHide={handleCloseModal}>
				<Modal.Header closeButton>
					<Modal.Title>
						{' '}
						{isUpdating ? 'Modificar categoría' : 'Crear categoría'}
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
									placeholder='Ingrese el nombre de la categoría'
									isInvalid={!!errors.name && touched.name}
								/>
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
		</>
	);
};
