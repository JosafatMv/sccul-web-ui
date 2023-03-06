import { Comment } from './Comment';

import styles from '../../../assets/css/components/CourseDetails/Comments/Comments.module.css';

export const Comments = ({ comments, scores }) => {
	const getUserRating = (userId) => {
		const userRating = scores.find((score) => score.user.id === userId);

		if (userRating) {
			return userRating.score;
		}

		return -1;
	};

	return (
		<>
			<h3>
				Comentarios <span className={styles.commentsCount}>(10)</span>{' '}
			</h3>

			<div className={styles.commentsContainer}>
				{comments.map((comment) => {
					return (
						<Comment
							user={comment.user}
							createdAt={comment.created_at}
							key={comment.id}
							userRating={getUserRating(comment.user.id)}
						>
							{comment.comment}
						</Comment>
					);
				})}
			</div>
		</>
	);
};
