import React from 'react';
import ReactStars from 'react-rating-stars-component';

import styles from '../../assets/css/components/shared/RatingInfo.module.css';

export const RatingInfo = ({ totalRatings, averageRating }) => {
	return (
		<div className={`${styles.ratingContainer}`}>
			<span className={`${styles.rating} md-1`}>{averageRating}</span>
			<ReactStars
				count={5}
				size={28}
				value={averageRating}
				activeColor='#FFAA0D'
				edit={false}
				classNames={styles.ratingStars}
			/>
			<span className={`${styles.ratingCount} md-2`}>
				({totalRatings})
			</span>
		</div>
	);
};
