import { CourseContextProvider } from './course/CourseContextProvider';

export const AppProvider = ({ children }) => {
	return (
		<>
			<CourseContextProvider>{children}</CourseContextProvider>
		</>
	);
};
