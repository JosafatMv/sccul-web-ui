export const SectionItem = ({ className, name, number, duration }) => {
	return (
		<>
			<span>{number}</span>
			<p>{name}</p>
			<span>{duration}</span>
		</>
	);
};
