export const getCoursesByName = (name = '', courses) => {
	if (name === '') {
		return courses;
	}

	name = name.toLowerCase();
	return courses.filter((course) => {
		return course.name.toLowerCase().includes(name);
	});
};
