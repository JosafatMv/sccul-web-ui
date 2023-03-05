// import { useReducer } from 'react';
// import { AuthContext } from './authContext';
// import { authReducer } from './authReducer';

// import axios from 'axios';

// export const AuthContextProvider = ({ children }) => {
// 	const init = async () => {
// 		// return localStorage.getItem('token')
// 		// 	? { isLogged: await renewToken() }
// 		// 	: { isLogged: false };

// 		if (localStorage.getItem('token')) {
// 			const token = localStorage.getItem('token');

// 			try {
// 				const resp = await axios.get(
// 					'http://localhost:8080/api/auth/renew',
// 					{
// 						headers: {
// 							Authorization: `Bearer ${token}`,
// 						},
// 					}
// 				);

// 				console.log(resp);

// 				if (resp.data?.data.length > 0) {
// 					return { isLogged: true };
// 				}
// 			} catch (error) {
// 				console.log(error);

// 				return { isLogged: false };
// 			}
// 		}

// 		return { isLogged: false };
// 	};

// 	const [state, dispatch] = useReducer(authReducer, {}, async () => init());

// 	const login = async (email, password) => {
// 		const dataJson = {
// 			username: email,
// 			password,
// 		};

// 		try {
// 			const data = await axios.post(
// 				'http://localhost:8080/api/auth/login',
// 				dataJson
// 			);

// 			localStorage.setItem('token', data.data.data);

// 			dispatch({
// 				type: 'LOGIN',
// 			});
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};

// 	const renewToken = async () => {
// 		try {
// 			const token = localStorage.getItem('token');

// 			if (!token) {
// 				return dispatch({
// 					type: 'LOGOUT',
// 				});
// 			}

// 			const resp = await axios.get(
// 				'http://localhost:8080/api/auth/renew',
// 				{
// 					headers: {
// 						Authorization: `Bearer ${token}`,
// 					},
// 				}
// 			);

// 			if (resp.data?.data.length > 0) {
// 				localStorage.setItem('token', resp.data.data);

// 				dispatch({
// 					type: 'LOGIN',
// 					payload: resp.data,
// 				});

// 				return true;
// 			} else {
// 				localStorage.removeItem('token');
// 				dispatch({
// 					type: 'LOGOUT',
// 				});

// 				return false;
// 			}
// 		} catch (error) {
// 			console.log(error);
// 			localStorage.removeItem('token');

// 			dispatch({
// 				type: 'LOGOUT',
// 			});

// 			return false;
// 		}
// 	};

// 	const logout = async () => {
// 		localStorage.removeItem('token');

// 		dispatch({
// 			type: 'LOGOUT',
// 		});
// 	};

// 	return (
// 		<AuthContext.Provider value={{ state, login, logout, renewToken }}>
// 			{children}
// 		</AuthContext.Provider>
// 	);
// };
