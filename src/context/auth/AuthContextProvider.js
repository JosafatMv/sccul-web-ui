import { useReducer } from 'react';
import { AuthContext } from './authContext';
import { authReducer } from './authReducer';

import axios from 'axios';

export const AuthContextProvider = ({ children }) => {
	const initialState = {
		isLogged: false,
	};

	const [state, dispatch] = useReducer(authReducer, initialState);

	const login = async (email, password) => {
		const dataJson = {
			username: email,
			password,
		};

		try {
			const data = await axios.post(
				'http://localhost:8080/api/auth/login',
				dataJson
			);

			console.log(data.data);

			localStorage.setItem('token', data.data.data);

			dispatch({
				type: 'LOGIN',
				payload: data.data,
			});
		} catch (error) {
			console.log(error);
		}
	};

	const logout = async () => {
		localStorage.removeItem('token');

		dispatch({
			type: 'LOGOUT',
		});
	};

	return (
		<AuthContext.Provider value={{ state, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
