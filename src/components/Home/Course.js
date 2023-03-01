import ReactStars from 'react-rating-stars-component';

import styles from '../../assets/css/components/Home/Course.module.css';
import { RatingInfo } from '../shared/RatingInfo';

export const Course = ({ imgSrc, onClick }) => {
	return (
		<div className={`${styles.courseContainer}`} onClick={onClick}>
			<div className={styles.courseImage}>
				<img src={imgSrc} alt='Los Angeles' className={styles.img} />
			</div>
			<div className={`${styles.courseInfo}`}>
				<h3 className={styles.title}>
					Curso de Reactasf asfasfasfasfa sfsfasfas
				</h3>
				<RatingInfo />

				<p className='mt-2'>2,705 Participantes</p>
			</div>
		</div>
	);
};
