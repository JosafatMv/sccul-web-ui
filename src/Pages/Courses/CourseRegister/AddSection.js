import { Form, Formik } from 'formik';
import { useState } from 'react';
import { createRef } from 'react';
import { Button, Modal, Form as FormBt } from 'react-bootstrap';
import * as Yup from 'yup';
import { TextInput } from '../../../components/Form/TextInput';
import { VideoUpload } from '../../../components/Form/VideoUpload';
import { formatVideoDuration } from '../../../utils/formatVideoDuration';
import { validateVideoExtension } from '../../../utils/validateVideoExtension';

export const AddSection = ({
	showModal,
	handleCloseModal,
	isUpdating = false,
	initialValues = { name: '' },
	handleAddSection,
	setFieldValue,
}) => {
	const [videoDuration, setVideoDuration] = useState(null);
	const [isUploaded, setIsUploaded] = useState(false);

	const videoRef = createRef();

	const validationSchema = Yup.object({
		name: Yup.string().required('El nombre es requerido'),
		video: Yup.string()
			.test(
				'is-video',
				'El archivo debe ser un video con formato mp4, mov o avi.',
				(value) => validateVideoExtension(value)
			)
			.required('El video es requerido'),
	});

	const handleOnSubmit = async (values) => {
		const duration = formatVideoDuration(videoDuration);
		const section = { ...values, duration };

		handleAddSection(section, setFieldValue);
		handleCloseModal();
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
								<VideoUpload
									innerRef={videoRef}
									setVideoDuration={setVideoDuration}
									name='video'
									isInvalid={!!errors.video && touched.video}
									setIsUploaded={setIsUploaded}
								/>
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
								disabled={
									!values.name ||
									!!errors.name ||
									!isUploaded ||
									!!errors.video ||
									!values.video
								}
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
