import { useReducer } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Loader } from './components/shared/Loader';
import { AuthContext } from './context/auth/authContext';
import { authReducer } from './context/auth/authReducer';
import { AppRouter } from './routers/AppRouter';
import { loginPost, renewToken } from './utils/authFuncs';

function App() {
	const [isLoading, setIsLoading] = useState(true);

	const [state, dispatch] = useReducer(authReducer, {
		isLogged: false,
		isLoading: false,
	});

	useEffect(() => {
		renewToken(dispatch);
		setIsLoading(false);
	}, []);

	const login = async (email, password) => {
		dispatch({
			type: 'IS_LOADING',
			payload: true,
		});

		const token = await loginPost(email, password);

		if (token) {
			localStorage.setItem('token', token);

			dispatch({
				type: 'LOGIN',
			});
		} else {
			dispatch({
				type: 'LOGOUT',
			});
		}

		dispatch({
			type: 'IS_LOADING',
			payload: false,
		});
	};

	const logout = () => {
		dispatch({
			type: 'IS_LOADING',
			payload: true,
		});

		localStorage.removeItem('token');

		dispatch({
			type: 'LOGOUT',
		});

		dispatch({
			type: 'IS_LOADING',
			payload: false,
		});
	};

	if (isLoading) {
		return <Loader />;
	}

	return (
		<AuthContext.Provider value={{ state, login, logout }}>
			<AppRouter />
		</AuthContext.Provider>
	);
}

export default App;
