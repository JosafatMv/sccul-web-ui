import { MdCloudUpload } from 'react-icons/md';
import { ErrorMessage, useField } from 'formik';
import { Form } from 'react-bootstrap';

import styles from './ImageUpload.module.css';

export const ImageUpload = (props) => {
	const [field, meta] = useField(props);

	const getExtension = (fileName) => {
		return fileName.split('.').pop();
	};

	const getFileName = (fileName) => {
		return fileName.split('.').slice(0, -1).join('.').split('\\').pop();
	};

	const validateVideoExtension = (fileName) => {
		const allowedExtensions = ['jpeg', 'png', 'jpg'];
		const extension = getExtension(fileName);
		return allowedExtensions.includes(extension);
	};

	return (
		<>
			<div className={styles.container}>
				<div className={styles.uploadWrapper}>
					<Form.Control
						type='file'
						accept='image/jpeg,image/png,image/jpg'
						className={styles.fileInput}
						{...props}
						{...field}
					/>
					<div className={styles.uploadIcon}>
						<MdCloudUpload size='6rem' color='#002E60' />
						<p className='m-0'>Selecciona una imagen</p>
					</div>
				</div>
				{field.value && validateVideoExtension(field.value) && (
					<div className={styles.previewWrapper}>
						<div className={styles.previewInfo}>
							<div className={styles.fileExtension}>
								<div className={styles.extensionCircle}>
									{getExtension(field.value)}
								</div>
								<p className='m-0'>
									{getFileName(field.value)}
								</p>
							</div>
						</div>
					</div>
				)}
			</div>

			{!!meta.touched && meta.error && (
				<Form.Control.Feedback type='invalid' className='d-block'>
					<ErrorMessage name={props.name} />
				</Form.Control.Feedback>
			)}
		</>
	);
};
