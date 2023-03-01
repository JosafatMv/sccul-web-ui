import ReactStars from 'react-rating-stars-component';

import styles from '../../assets/css/components/Home/Course.module.css';

export const Course = ({ imgSrc }) => {
	return (
		<div className={`${styles.courseContainer}`}>
			<div className={styles.courseImage}>
				<img src={imgSrc} alt='Los Angeles' className={styles.img} />
			</div>
			<div className={`${styles.courseInfo}`}>
				<h3 className={styles.title}>
					Curso de Reactasf asfasfasfasfa sfsfasfas
				</h3>
				<div className={`${styles.ratingContainer}`}>
					<span className={`${styles.rating} me-1`}>4.9</span>
					<ReactStars
						count={5}
						size={28}
						value={4}
						activeColor='#FFAA0D'
						edit={false}
						classNames={styles.ratingStars}
					/>
					<span className={`${styles.ratingCount} ms-2`}>
						(2.605)
					</span>
				</div>

				<p className='mt-2'>2,705 Participantes</p>
			</div>
		</div>
	);
};
