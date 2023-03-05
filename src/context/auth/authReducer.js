//authReducer
export const authReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				isLogged: true,
			};

		case 'LOGOUT':
			return {
				isLogged: false,
			};

		case 'IS_LOADING':
			return {
				...state,
				isLoading: action.payload,
			};

		default:
			return state;
	}
};
