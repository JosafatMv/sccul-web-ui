import { useEffect } from 'react';
import { ErrorMessage, useField } from 'formik';
import { MdCloudUpload } from 'react-icons/md';
import { Form } from 'react-bootstrap';

import styles from './ImageUpload.module.css';

export const VideoUpload = ({
	innerRef,
	setVideoDuration,
	setIsUploaded,
	...props
}) => {
	const [field, meta] = useField(props);

	const getExtension = (fileName) => {
		return fileName.split('.').pop();
	};

	const getFileName = (fileName) => {
		return fileName.split('.').slice(0, -1).join('.').split('\\').pop();
	};

	const validateVideoExtension = (fileName) => {
		const allowedExtensions = ['mp4', 'mov', 'avi'];
		const extension = getExtension(fileName);
		return allowedExtensions.includes(extension);
	};

	useEffect(() => {
		const getVideoDuration = async () => {
			if (field.value) {
				const video = document.createElement('video');
				video.src = URL.createObjectURL(innerRef.current.files[0]);
				video.addEventListener('loadedmetadata', () => {
					setVideoDuration(video.duration);
					setIsUploaded(true);
				});
				await video.load();
			}
		};
		getVideoDuration();
	}, [field.value, innerRef, setIsUploaded, setVideoDuration]);

	return (
		<>
			<div className={styles.container}>
				<div className={styles.uploadWrapper}>
					<Form.Control
						type='file'
						accept='video/mp4,video/mov,video/avi'
						className={styles.fileInput}
						ref={innerRef}
						{...props}
						{...field}
					/>
					<div className={styles.uploadIcon}>
						<MdCloudUpload size='6rem' color='#002E60' />
						<p className='m-0'>Selecciona un video</p>
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

			{meta.error && (
				<Form.Control.Feedback type='invalid' className='d-block'>
					<ErrorMessage name={props.name} />
				</Form.Control.Feedback>
			)}
		</>
	);
};
