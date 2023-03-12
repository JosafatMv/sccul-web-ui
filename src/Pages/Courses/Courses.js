import { useContext, useEffect, useMemo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CustomTable } from '../../components/CustomTable/CustomTable';
import { Loader } from '../../components/shared/Loader';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { CourseContext } from '../../context/course/CourseContext';
import { getCourseColumns } from '../../utils/getCourseColumns';

export const Courses = () => {
	const { state, getCourses } = useContext(CourseContext);
	const { courses, isLoading } = state;

	const navigate = useNavigate();

	useEffect(() => {
		getCourses();
	}, []);

	console.log(courses);

	const columns = useMemo(() => getCourseColumns(), []);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<>
			<Row className='mb-3'>
				<Col xs={7} sm={8} md={10}>
					<h2>Cursos</h2>
				</Col>
				<Col xs={5} sm={4} md={2}>
					<PrimaryButton
						onClick={() => navigate('/course/register')}
						text='Crear cursos'
					/>
				</Col>
			</Row>

			<CustomTable dataTable={courses} columns={columns} />
		</>
	);
};
