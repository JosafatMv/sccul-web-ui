import { useContext } from 'react';
import { Navigate, Outlet, Route } from 'react-router-dom';
import { AuthContext } from '../context/auth/authContext';

export const PublicRoute = ({
	isAuthenticated,
	element: Component,
	...rest
}) => {
	const { state } = useContext(AuthContext);
	const { isLogged } = state;

	return isLogged ? <Navigate to='/' /> : <Outlet />;
	// <Route
	// 	{...rest}
	// 	element={isAuthenticated ? <Navigate to='/' /> : <Component />}
	// />
};
