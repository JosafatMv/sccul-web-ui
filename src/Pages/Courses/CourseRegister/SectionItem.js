import { Button } from 'react-bootstrap';
import { MdDelete } from 'react-icons/md';

export const SectionItem = ({
	handleRemoveSection,
	name,
	number,
	duration,
}) => {
	return (
		<>
			<span>{number}</span>
			<p>{name}</p>
			<span>{duration}</span>
			<Button
				variant='danger'
				size='sm'
				className='w-auto px-2'
				onClick={() => handleRemoveSection(number)}
			>
				<MdDelete size='30px' />
			</Button>
		</>
	);
};
