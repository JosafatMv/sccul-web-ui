import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Loader } from '../../components/shared/Loader';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { getCategories } from '../../utils/getCategories';
import { CategoriesTable } from './CategoriesTable';
import { RegisterModal } from './RegisterModal';

export const Categories = () => {
	const [categories, setCategories] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [showModal, setShowModal] = useState(false);

	const loadCategories = async () => {
		const data = await getCategories();
		setCategories(data);
		setIsLoading(false);
	};

	useEffect(() => {
		loadCategories();
	}, []);

	if (isLoading) {
		return <Loader />;
	}

	console.log(categories);

	const handleCreateCategory = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		loadCategories();
		setShowModal(false);
	};

	return (
		<>
			<Row className='mb-3'>
				<Col xs={7} sm={8} md={10}>
					<h2>Categorías</h2>
				</Col>
				<Col xs={5} sm={4} md={2}>
					<PrimaryButton
						onClick={handleCreateCategory}
						text='Crear categoría'
					/>
				</Col>
			</Row>

			<CategoriesTable dataTable={categories} />

			<RegisterModal
				showModal={showModal}
				setShowModal={setShowModal}
				handleCloseModal={handleCloseModal}
			/>
		</>
	);
};
