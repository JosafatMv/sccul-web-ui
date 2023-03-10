import { Form, Formik } from 'formik';
import { Button, Modal } from 'react-bootstrap';
import * as Yup from 'yup';
import { TextInput } from '../../components/Form/TextInput';
import instance from '../../shared/plugins/axios';

export const RegisterModal = ({
	showModal,
	setShowModal,
	handleCloseModal,
}) => {
	const validationSchema = Yup.object({
		name: Yup.string().required('El nombre es requerido'),
	});

	const handleOnSubmit = async (values) => {
		try {
			const response = await instance.post('/categories/', values);
			console.log(response);
			handleCloseModal();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Button variant='primary' onClick={() => setShowModal(true)}>
				Crear categoría
			</Button>
			<Modal show={showModal} onHide={handleCloseModal}>
				<Modal.Header closeButton>
					<Modal.Title>Crear categoría</Modal.Title>
				</Modal.Header>

				<Formik
					initialValues={{ name: '' }}
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
									Registrar
								</Button>
							</Modal.Footer>
						</Form>
					)}
				</Formik>
			</Modal>
		</>
	);
};
