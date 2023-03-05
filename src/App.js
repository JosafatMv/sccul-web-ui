import { useReducer } from 'react';
import { useEffect } from 'react';
import { AuthContext } from './context/auth/authContext';
import { authReducer } from './context/auth/authReducer';
import { AppRouter } from './routers/AppRouter';
import { showConfirmDialog, showSimpleAlert } from './shared/plugins/alerts';
import { loginPost, renewToken } from './utils/authFuncs';

function App() {
	const [state, dispatch] = useReducer(authReducer, {
		isLogged: false,
	});

	useEffect(() => {
		renewToken(dispatch);
	}, []);

	const login = async (email, password) => {
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
	};

	const logout = () => {

	
		localStorage.removeItem('token');

		dispatch({
			type: 'LOGOUT',
		});
	};

	return (
		<AuthContext.Provider value={{ state, login, logout }}>
			<AppRouter />
		</AuthContext.Provider>
	);
}

export default App;
