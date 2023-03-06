import { useNavigate } from 'react-router-dom';

import { Col, Row } from 'react-bootstrap';

import { Category } from '../components/shared/Category';
import { PrimaryButton } from '../components/shared/PrimaryButton';
import { Course } from '../components/Home/Course';

import styles from '../assets/css/components/Home/Home.module.css';
import { useEffect } from 'react';
import { useContext } from 'react';
import { CourseContext } from '../context/course/CourseContext';
import { Loader } from '../components/shared/Loader';
import { getCategories } from '../utils/getCategories';
import { useState } from 'react';

export const Home = () => {
	const navigate = useNavigate();
	const { getCourses, state } = useContext(CourseContext);
	const { courses, isLoading } = state;

	const [categories, setCategories] = useState([]);
	const [isLoadingCategories, setIsLoadingCategories] = useState(true);

	useEffect(() => {
		getCourses();

		const getCategoriesFromApi = async () => {
			const categories = await getCategories();
			setCategories(categories);
		};

		getCategoriesFromApi();

		setIsLoadingCategories(false);
	}, []);

	// imgSrc, title, rating, participants, onClick

	if (isLoading || isLoadingCategories) {
		return <Loader />;
	}

	//TODO: Hacer un componente para cuando no hay cursos
	//TODO: Hacer un componente para cuando no hay categorias
	if (!courses) {
		return <h1>No hay cursos</h1>;
	}

	const handleManageCategories = () => {
		console.log('Gestionar categorias');
	};

	const handleManageCourses = () => {
		console.log('Gestionar cursos');
	};

	const handleOnClickCourse = (id) => {
		console.log('Ir al curso');
		navigate(`/course/${id}`);
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
					{categories.map((category, index) => (
						<Category
							key={category.id}
							text={category.name}
							className='me-4'
						/>
					))}
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
						{courses.map((course) => {
							return (
								<Col
									xs={12}
									sm={6}
									md={6}
									xxl={3}
									xl={4}
									lg={4}
									className='mb-4'
									key={course.id}
								>
									<Course
										imgSrc={course.image}
										title={course.name}
										totalRatings={course.totalRatings}
										averageRating={course.averageRatings}
										totalParticipants={
											course.totalParticipants
										}
										onClick={() =>
											handleOnClickCourse(course.id)
										}
									/>
								</Col>
							);
						})}
					</Row>
				</div>
			</div>
		</>
	);
};
