//TODO: Añadir propiedades de numero y duración a la tabla de sections

export const CourseContentItem = ({ className, name, number, duration }) => {
	return (
		<li className={className}>
			<span>{number} </span>
			<p>{name}</p>
			<span>{duration}</span>
		</li>
	);
};
