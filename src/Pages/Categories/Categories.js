import { useState } from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { CustomTable } from '../../components/CustomTable/CustomTable';
import { Loader } from '../../components/shared/Loader';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { showConfirmDialog } from '../../shared/plugins/alerts';
import { changeCategoryStatus } from '../../utils/changeCategoryStatus';
import { getCategories } from '../../utils/getCategories';
import { getColumns } from './getColumns';
import { RegisterModal } from './RegisterModal';

export const Categories = () => {
	const [categories, setCategories] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [showModal, setShowModal] = useState(false);
	const [isUpdating, setIsUpdating] = useState(false);
	const [actualCategory, setActualCategory] = useState({ name: '' });

	const handleOnChangeStatus = (id, status) => {
		showConfirmDialog(
			'¿Estás seguro?',
			'El status de la categoria se modificará',
			'Si',
			'No',
			() => changeCategoryStatus(id, status, loadCategories)
		);
	};

	const handleEditCategory = (category) => {
		setIsUpdating(true);
		setActualCategory(category);
		setShowModal(true);
	};

	const columns = useMemo(
		() => getColumns(handleEditCategory, handleOnChangeStatus),
		[]
	);

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

	const handleCreateCategory = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		loadCategories();
		setShowModal(false);
		setIsUpdating(false);
		setActualCategory({ name: '' });
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

			{/* <CategoriesTable
				dataTable={categories}
				loadCategories={loadCategories}
				setIsUpdating={setIsUpdating}
				setActualCategory={setActualCategory}
				setShowModal={setShowModal}
			/> */}

			<CustomTable dataTable={categories} columns={columns} />

			<RegisterModal
				showModal={showModal}
				isUpdating={isUpdating}
				handleCloseModal={handleCloseModal}
				initialValues={actualCategory}
			/>
		</>
	);
};
