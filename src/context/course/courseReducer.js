export const courseReducer = (state, action) => {
	switch (action.type) {
		case 'GET_COURSES':
			return {
				...state,
				courses: action.payload,
			};

		case 'GET_COURSE':
			return {
				...state,
				course: action.payload,
			};

		case 'ADD_COURSE':
			return {
				...state,
				courses: [...state.courses, action.payload],
			};

		case 'UPDATE_COURSE':
			return {
				...state,
				courses: state.courses.map((course) =>
					course.id === action.payload.id ? action.payload : course
				),
			};

		case 'DELETE_COURSE':
			return {
				...state,
				courses: state.courses.filter(
					(course) => course.id !== action.payload
				),
			};

		case 'SET_CURRENT':
			return {
				...state,
				current: action.payload,
			};

		case 'CLEAR_CURRENT':
			return {
				...state,
				current: null,
			};

		case 'SET_LOADING':
			return {
				...state,
				isLoading: action.payload,
			};

		default:
			return state;
	}
};
