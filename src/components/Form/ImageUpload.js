import React, { useState } from 'react';
import styles from './ImageUpload.module.css';
import { MdCloudUpload } from 'react-icons/md';
import { ErrorMessage, useField } from 'formik';
import { Form } from 'react-bootstrap';

export const ImageUpload = (props) => {
	// const [fileName, setFileName] = useState('');
	// const [fileExtension, setFileExtension] = useState('');
	// const [fileUrl, setFileUrl] = useState('');

	const [field, meta] = useField(props);

	// const handleFileChange = (e) => {
	// 	const file = e.target.files[0];
	// 	if (file) {
	// 		setFileName(file.name);
	// 		setFileExtension(file.name.split('.').pop());
	// 		setFileUrl(URL.createObjectURL(file));
	// 	}
	// };

	const getExtension = (fileName) => {
		return fileName.split('.').pop();
	};

	const getFileName = (fileName) => {
		return fileName.split('.').slice(0, -1).join('.');
	};

	return (
		<>
			<div className={styles.container}>
				<div className={styles.uploadWrapper}>
					<Form.Control
						type='file'
						accept='image/*'
						// onChange={handleFileChange}
						className={styles.fileInput}
						{...props}
						{...field}
					/>
					<div className={styles.uploadIcon}>
						<MdCloudUpload size='6rem' color='#002E60' />
						<p className='m-0'>Selecciona una imagen</p>
					</div>
				</div>
				{field.value && (
					<div className={styles.previewWrapper}>
						{/* <div className={styles.previewImage}>
						<img src={fileUrl} alt='preview' />
					</div> */}
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
