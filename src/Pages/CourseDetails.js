import { useContext, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { CourseContext } from '../context/course/CourseContext';

import { Comments } from '../components/CourseDetails/Comments/Comments';
import { Category } from '../components/shared/Category';
import { PrimaryButton } from '../components/shared/PrimaryButton';
import { CourseContentItem } from '../components/CourseDetails/CourseContentItem';
import { Participants } from '../components/CourseDetails/Participants/Participants';
import { Loader } from '../components/shared/Loader';

import styles from '../assets/css/components/CourseDetails/CourseDetails.module.css';

export const CourseDetails = () => {
	const { id } = useParams();

	const { getCourse, state } = useContext(CourseContext);
	const { course, isLoading } = state;

	useEffect(() => {
		getCourse(id);
	}, []);

	console.log(course);
	console.log(isLoading);

	if (isLoading) {
		return <Loader />;
	}

	if (!course) {
		return <h1>No hay curso</h1>;
	}

	const filterInscriptions = () => {
		const purchased = course.inscriptions.filter(
			(inscription) => inscription.status === 'comprado'
		);

		//return users from purchased
		return purchased.map((inscription) => inscription.user);
	};

	return (
		<>
			<Row className='mb-3'>
				<Col xs={7} sm={8} md={10}>
					<h2>{course.name}</h2>
				</Col>
				<Col xs={5} sm={4} md={2}>
					<PrimaryButton
						// onClick={}
						text='Gestionar'
					/>
				</Col>
			</Row>

			<div className={styles.courseContainer}>
				<Row>
					<Col xs={12} sm={12} md={4} lg={4}>
						<div className={`${styles.courseImgContainer} mb-4`}>
							<img src={course.image} alt='Curso react' />
						</div>
					</Col>

					<Col xs={12} sm={12} md={8} lg={8}>
						<div className='courseDescription'>
							<h3>Información del curso</h3>

							<span className={styles.coursePrice}>
								${course.price} MX
							</span>

							<p>{course.description}</p>

							<Category
								text={course.category.name}
								className='mb-2'
							/>
						</div>
					</Col>
				</Row>

				<Row>
					<Col xs={12} sm={12} md={4} lg={4}>
						<div className='courseContent'>
							<h3>Contenido del curso</h3>
							<ul className={styles.courseContentList}>
								{course.sections.map((section) => (
									<CourseContentItem
										key={section.id}
										name={section.name}
										className='mb-2'
									/>
								))}
							</ul>
						</div>
					</Col>

					<Col xs={12} sm={12} md={8} lg={8}>
						<Comments
							comments={course.comments}
							scores={course.scores}
						/>
					</Col>
				</Row>
			</div>

			<Participants participants={filterInscriptions()} />
		</>
	);
};
