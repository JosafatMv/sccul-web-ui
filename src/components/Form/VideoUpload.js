import React, { useState } from 'react';
import styles from './ImageUpload.module.css';
import { MdCloudUpload } from 'react-icons/md';

export const VideoUpload = () => {
	const [fileName, setFileName] = useState('');
	const [fileExtension, setFileExtension] = useState('');
	const [fileUrl, setFileUrl] = useState('');

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setFileName(file.name);
			setFileExtension(file.name.split('.').pop());
			setFileUrl(URL.createObjectURL(file));
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.uploadWrapper}>
				<input
					type='file'
					accept='video/*'
					onChange={handleFileChange}
					className={styles.fileInput}
				/>
				<div className={styles.uploadIcon}>
					<MdCloudUpload size='6rem' color='#002E60' />
					<p className='m-0'>Selecciona un video</p>
				</div>
			</div>
			{fileUrl && (
				<div className={styles.previewWrapper}>
					<div className={styles.previewInfo}>
						<div className={styles.fileExtension}>
							<div className={styles.extensionCircle}>
								{fileExtension}
							</div>
							<p className='m-0'>{fileName}</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
