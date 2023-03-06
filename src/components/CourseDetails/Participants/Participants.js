import { TableParticipants } from './TableParticipants';

export const Participants = ({ participants, scores }) => {
	const formatParticipants = (data) => {
		return data.map((item) => {
			return {
				id: item.id,
				name: `${item.name} ${item.surname} ${item.lastname}`,
				email: item.email,
				phoneNumber: item.phoneNumber,
				lastname: item.lastname,
				hasSurvey: hasSurvey(item.id),
			};
		});
	};

	const hasSurvey = (userId) => {
		const score = scores.find((score) => score.user.id === userId);

		return {
			id: score?.id,
			hasSurvey: score ? true : false,
		};
	};

	return (
		<>
			<h3 className='mt-4'>Participantes del curso</h3>
			<TableParticipants data={formatParticipants(participants)} />
		</>
	);
};
