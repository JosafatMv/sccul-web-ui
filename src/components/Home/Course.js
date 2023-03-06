import { RatingInfo } from '../shared/RatingInfo';

import styles from '../../assets/css/components/Home/Course.module.css';

export const Course = ({
	imgSrc,
	onClick,
	title,
	totalRatings,
	averageRating,
	totalParticipants,
}) => {
	const formatParcipants = (totalParticipants) => {
		if (totalParticipants !== 1) {
			return `${totalParticipants} Participantes`;
		}

		return `${totalParticipants} Participante`;
	};

	return (
		<div className={`${styles.courseContainer}`} onClick={onClick}>
			<div className={styles.courseImage}>
				<img src={imgSrc} alt='Los Angeles' className={styles.img} />
			</div>
			<div className={`${styles.courseInfo}`}>
				<h3 className={styles.title}>{title}</h3>
				<RatingInfo
					totalRatings={totalRatings}
					averageRating={averageRating}
				/>

				<p className='mt-2'>{formatParcipants(totalParticipants)}</p>
			</div>
		</div>
	);
};
