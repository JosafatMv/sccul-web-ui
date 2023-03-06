//TODO: Añadir propiedades de numero y duración a la tabla de sections

export const CourseContentItem = ({ className, name }) => {
	return (
		<li className={className}>
			<span>1</span>
			<p>{name}</p>
			<span>6:40</span>
		</li>
	);
};
