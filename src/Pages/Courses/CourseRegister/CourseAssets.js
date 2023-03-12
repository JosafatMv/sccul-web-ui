import React from 'react';
import { useState } from 'react';
import { Form as FormBt } from 'react-bootstrap';
import { MdAdd } from 'react-icons/md';
import { ImageUpload } from '../../../components/Form/ImageUpload';
import { PrimaryButton } from '../../../components/shared/PrimaryButton';
import { AddSection } from './AddSection';
import { SectionList } from './SectionList';

export const CourseAssets = ({ errors, values, touched }) => {
	const [showModal, setShowModal] = useState(false);
	const [isUpdating, setIsUpdating] = useState(false);
	const [actualCategory, setActualCategory] = useState({
		name: '',
		video: '',
	});

	const sections = [
		{
			id: 1,
			name: 'Introducción',
			number: 1,
			duration: '10:00',
		},
		{
			id: 2,
			name: 'Variables',
			number: 2,
			duration: '10:00',
		},
		{
			id: 3,
			name: 'Funciones',
			number: 3,

			duration: '10:00',
		},
	];

	const handleAddSection = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
		setIsUpdating(false);
		setActualCategory({
			name: '',
			video: '',
		});
	};

	return (
		<>
			<h4>Imágen</h4>
			<FormBt.Group className='mb-3'>
				<ImageUpload
					name='image'
					isInvalid={!!errors.image && touched.image}
				/>
			</FormBt.Group>

			<h4>Secciones</h4>
			<SectionList sections={sections} />
			<PrimaryButton className='w-auto px-2' onClick={handleAddSection}>
				<MdAdd size='30px' />
			</PrimaryButton>

			<AddSection
				showModal={showModal}
				isUpdating={isUpdating}
				handleCloseModal={handleCloseModal}
				initialValues={actualCategory}
			/>
		</>
	);
};
