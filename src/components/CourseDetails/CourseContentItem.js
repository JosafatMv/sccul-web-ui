export const CourseContentItem = ({ className, name, number, duration }) => {
	return (
		<li className={className}>
			<span>{number} </span>
			<p>{name}</p>
			<span>{duration}</span>
		</li>
	);
};
