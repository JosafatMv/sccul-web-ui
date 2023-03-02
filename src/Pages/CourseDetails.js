import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Comments } from '../components/CourseDetails/Comments/Comments';
import { Category } from '../components/shared/Category';
import { PrimaryButton } from '../components/shared/PrimaryButton';
import { CourseContentItem } from '../components/CourseDetails/CourseContentItem';
import { Participants } from '../components/CourseDetails/Participants/Participants';

import styles from '../assets/css/components/CourseDetails/CourseDetails.module.css';

export const CourseDetails = () => {
	const { id } = useParams();

	console.log(id);

	return (
		<>
			<Row className='mb-3'>
				<Col xs={7} sm={8} md={10}>
					<h2>Curso React Básico</h2>
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
							<img
								src='https://www.freecodecamp.org/news/content/images/size/w2000/2021/07/reactcourse.png'
								alt='Curso react'
							/>
						</div>
					</Col>

					<Col xs={12} sm={12} md={8} lg={8}>
						<div className='courseDescription'>
							<h3>Información del curso</h3>

							<span className={styles.coursePrice}>
								$100.00 MX
							</span>

							<p>
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Modi quidem, iusto vero nam
								assumenda doloribus sed provident minus soluta
								quisquam illum placeat id quos voluptatem et,
								nostrum voluptatum quod ducimus?
							</p>

							<Category text='Tecnología' className='mb-2' />
						</div>
					</Col>
				</Row>

				<Row>
					<Col xs={12} sm={12} md={4} lg={4}>
						<div className='courseContent'>
							<h3>Contenido del curso</h3>
							<ul className={styles.courseContentList}>
								<CourseContentItem className='mb-2' />
								<CourseContentItem className='mb-2' />
								<CourseContentItem className='mb-2' />
								<CourseContentItem className='mb-2' />
								<CourseContentItem className='mb-2' />
							</ul>
						</div>
					</Col>

					<Col xs={12} sm={12} md={8} lg={8}>
						<Comments />
					</Col>
				</Row>
			</div>

			<Participants />
		</>
	);
};
