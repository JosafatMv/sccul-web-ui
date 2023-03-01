import { useNavigate } from 'react-router-dom';

import { Col, Row } from 'react-bootstrap';

import { Category } from '../components/shared/Category';
import { PrimaryButton } from '../components/shared/PrimaryButton';
import { Course } from '../components/Home/Course';

import styles from '../assets/css/components/Home/Home.module.css';

export const Home = () => {
	const navigate = useNavigate();

	const handleManageCategories = () => {
		console.log('Gestionar categorias');
	};

	const handleManageCourses = () => {
		console.log('Gestionar cursos');
	};

	const handleOnClickCourse = () => {
		console.log('Ir al curso');
		navigate('/course/1');
	};

	return (
		<>
			<div className='categories'>
				<Row>
					<Col xs={7} sm={8} md={10}>
						<h2>Categorías</h2>
					</Col>
					<Col xs={5} sm={4} md={2}>
						<PrimaryButton
							onClick={handleManageCategories}
							text='Gestionar'
						/>
					</Col>
				</Row>

				<div className={`${styles.categoriesContainer} py-2`}>
					<Category text='Economia' className='me-4' />
					<Category text='Tecnología' className='me-4' />
					<Category text='Tecnología' className='me-4' />
					<Category text='Tecnología' className='me-4' />
					<Category text='Tecnología' className='me-4' />
					<Category text='Tecnología' className='me-4' />
					<Category text='Tecnología' className='me-4' />
					<Category text='Tecnología' className='me-4' />
					<Category text='Tecnología' className='me-4' />
					<Category text='Tecnología' className='me-4' />
					<Category text='Tecnología' className='me-4' />
					<Category text='Tecnología' className='me-4' />
					<Category text='Tecnología' className='me-4' />
					<Category text='Tecnología' className='me-4' />
					<Category text='Tecnología' className='me-4' />
					<Category text='Tecnología' className='me-4' />
					<Category text='Tecnología' className='me-4' />
					<Category text='Tecnología' className='me-4' />
					<Category text='Tecnología' className='me-4' />
					<Category text='Tecnología' className='me-4' />
					<Category text='Tecnología' className='me-4' />
					<Category text='Tecnología' className='me-4' />
					<Category text='Tecnología' className='me-4' />
				</div>
			</div>

			<div className='courses mt-5'>
				<Row>
					<Col xs={7} sm={8} md={10}>
						<h2>Cursos</h2>
					</Col>
					<Col xs={5} sm={4} md={2}>
						<PrimaryButton
							text='Gestionar'
							onClick={handleManageCourses}
						/>
					</Col>
				</Row>

				<div className={`${styles.coursesContainer} pt-2`}>
					<Row>
						<Col
							xs={12}
							sm={6}
							md={6}
							xxl={3}
							xl={4}
							lg={4}
							className='mb-4'
						>
							<Course
								imgSrc='https://www.w3schools.com/w3images/la.jpg'
								onClick={handleOnClickCourse}
							/>
						</Col>
						<Col
							xs={12}
							sm={6}
							md={6}
							xxl={3}
							xl={4}
							lg={4}
							className='mb-4'
						>
							<Course imgSrc='data:image/png;base64,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' />
						</Col>
						<Col
							xs={12}
							sm={6}
							md={6}
							xxl={3}
							xl={4}
							lg={4}
							className='mb-4'
						>
							<Course imgSrc='data:image/png;base64,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' />
						</Col>

						<Col
							xs={12}
							sm={6}
							md={6}
							xxl={3}
							xl={4}
							lg={4}
							className='mb-4'
						>
							<Course imgSrc='https://www.w3schools.com/w3images/la.jpg' />
						</Col>

						<Col
							xs={12}
							sm={6}
							md={6}
							xxl={3}
							xl={4}
							lg={4}
							className='mb-4'
						>
							<Course imgSrc='https://www.w3schools.com/w3images/la.jpg' />
						</Col>

						<Col
							xs={12}
							sm={6}
							md={6}
							xxl={3}
							xl={4}
							lg={4}
							className='mb-4'
						>
							<Course imgSrc='https://www.w3schools.com/w3images/la.jpg' />
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
};
