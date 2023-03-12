import { Image } from 'react-bootstrap';

import styles from '../../assets/css/Pages/Courses/CourseName.module.css';

export const CourseName = ({ imgSrc, title }) => {
	return (
		<div
			className={`d-inline-flex align-items-center pe-3 ${styles.nameContainer}`}
		>
			<div className={`mr-2 ${styles.imgContainer} me-2`}>
				<Image
					src={imgSrc}
					alt={title}
					style={{ maxWidth: '70px', objectFit: 'cover' }}
					rounded
				/>
			</div>
			<div>
				<h6 className='mb-0'>{title}</h6>
			</div>
		</div>
	);
};
