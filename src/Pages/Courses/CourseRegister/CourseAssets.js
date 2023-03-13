import { useState } from 'react';
import { Form as FormBt } from 'react-bootstrap';
import { MdAdd } from 'react-icons/md';
import { ImageUpload } from '../../../components/Form/ImageUpload';
import { PrimaryButton } from '../../../components/shared/PrimaryButton';
import { AddSection } from './AddSection';
import { SectionList } from './SectionList';

export const CourseAssets = ({
	errors,
	handleAddSection,
	sections,
	touched,
	setFieldValue,
	setSections,
}) => {
	const [showModal, setShowModal] = useState(false);
	const [isUpdating, setIsUpdating] = useState(false);
	const [actualCategory, setActualCategory] = useState({
		name: '',
		video: '',
	});

	const handleCloseModal = () => {
		setShowModal(false);
		setIsUpdating(false);
		setActualCategory({
			name: '',
			video: '',
		});
	};

	const canAddSection = () => {
		return sections.length < 5;
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

			<SectionList
				sections={sections}
				setFieldValue={setFieldValue}
				name='sections'
				isInvalid={!!errors.sections && touched.sections}
				setSections={setSections}
			/>
			<PrimaryButton
				className='w-auto px-2'
				disabled={!canAddSection()}
				onClick={() => setShowModal(true)}
			>
				<MdAdd size='30px' />
			</PrimaryButton>

			<AddSection
				showModal={showModal}
				isUpdating={isUpdating}
				handleCloseModal={handleCloseModal}
				initialValues={actualCategory}
				handleAddSection={handleAddSection}
				setFieldValue={setFieldValue}
			/>
		</>
	);
};
