import { Col, Row } from 'react-bootstrap';
import { MdPermIdentity } from 'react-icons/md';
import ReactStars from 'react-rating-stars-component';

export const Comment = ({ children }) => {
	return (
		<div className='comment'>
			<Row>
				<Col xs={1} className='text-end'>
					<MdPermIdentity size='1.8em' className='mx-auto' />
				</Col>
				<Col xs={11}>
					<div className='commentUser'>
						<span className='fw-bold me-2'>
							Josafat Muñoz Valverde
						</span>{' '}
						<span className='text-muted'>12/02/2024</span>
					</div>
					<ReactStars
						count={5}
						size={20}
						value={4}
						activeColor='#FFAA0D'
						edit={false}
						// classNames={styles.ratingStars}
					/>

					<p>{children}</p>
				</Col>
			</Row>
		</div>
	);
};
