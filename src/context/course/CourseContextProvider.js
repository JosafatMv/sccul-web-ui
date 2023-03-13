import React, { useReducer } from 'react';
import { showSimpleAlert } from '../../shared/plugins/alerts';
import instance from '../../shared/plugins/axios';
import { CourseContext } from './CourseContext';
import { courseReducer } from './courseReducer';

export const CourseContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(courseReducer, {
		isLoading: false,
		courses: [],
		course: null,
		current: null,
		courseToRegister: {
			name: '',
			description: '',
			price: 0,
			discount: null,
			category: '',
			survey: '',
			image: '',
			sections: [],
		},
	});

	const getCourses = async () => {
		dispatch({
			type: 'SET_LOADING',
			payload: true,
		});
		try {
			const { data } = await instance.get('/courses/');
			dispatch({
				type: 'GET_COURSES',
				payload: data,
			});
		} catch (error) {
			console.log(error);
			showSimpleAlert('Error', 'Error al traer los cursos', 'error');
		}

		dispatch({
			type: 'SET_LOADING',
			payload: false,
		});
	};

	const getCourse = async (id) => {
		dispatch({
			type: 'SET_LOADING',
			payload: true,
		});

		try {
			const { data } = await instance.get(`/courses/${id}`);
			dispatch({
				type: 'GET_COURSE',
				payload: data,
			});
		} catch (error) {
			console.log(error);
			showSimpleAlert('Error', 'Error al traer el curso', 'error');
		}

		dispatch({
			type: 'SET_LOADING',
			payload: false,
		});
	};

	const addSection = (section) => {
		dispatch({
			type: 'ADD_SECTION',
			payload: section,
		});
	};

	return (
		<CourseContext.Provider
			value={{ state, getCourses, getCourse, addSection }}
		>
			{children}
		</CourseContext.Provider>
	);
};
