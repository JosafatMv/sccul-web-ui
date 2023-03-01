import { Comment } from './Comment';

import styles from '../../../assets/css/components/CourseDetails/Comments/Comments.module.css';

export const Comments = () => {
	return (
		<>
			<h3>
				Comentarios <span className={styles.commentsCount}>(10)</span>{' '}
			</h3>

			<div className={styles.commentsContainer}>
				<Comment>
					El curso es genial! Explica de manera clara y concisa los
					conceptos y su aplicación práctica. Recomendado para
					cualquier persona interesada en aprender JavaScript
				</Comment>
				<Comment>
					El curso es genial! Explica de manera clara y concisa los
					conceptos y su aplicación práctica. Recomendado para
					cualquier persona interesada en aprender JavaScript
				</Comment>
				<Comment>
					El curso es genial! Explica de manera clara y concisa los
					conceptos y su aplicación práctica. Recomendado para
					cualquier persona interesada en aprender JavaScript
				</Comment>
				<Comment>
					El curso es genial! Explica de manera clara y concisa los
					conceptos y su aplicación práctica. Recomendado para
					cualquier persona interesada en aprender JavaScript
				</Comment>
				<Comment>
					El curso es genial! Explica de manera clara y concisa los
					conceptos y su aplicación práctica. Recomendado para
					cualquier persona interesada en aprender JavaScript
				</Comment>
				<Comment>
					El curso es genial! Explica de manera clara y concisa los
					conceptos y su aplicación práctica. Recomendado para
					cualquier persona interesada en aprender JavaScript
				</Comment>
				<Comment>
					El curso es genial! Explica de manera clara y concisa los
					conceptos y su aplicación práctica. Recomendado para
					cualquier persona interesada en aprender JavaScript
				</Comment>
			</div>
		</>
	);
};
