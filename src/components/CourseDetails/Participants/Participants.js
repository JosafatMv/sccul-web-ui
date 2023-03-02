import React from 'react';
import { data } from '../../../utils/dataParticipants';
import { TableParticipants } from './TableParticipants';

export const Participants = () => {
	return (
		<>
			<h3 className='mt-4'>Parcipantes del curso</h3>
			<TableParticipants data={data} />
		</>
	);
};
