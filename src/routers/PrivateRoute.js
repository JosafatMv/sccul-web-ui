import { useContext } from 'react';
import { Navigate, Outlet, Route } from 'react-router-dom';
import { AuthContext } from '../context/auth/authContext';

export const PrivateRoute = ({
	isAuthenticated,
	element: Component,
	...rest
}) => {
	const { state } = useContext(AuthContext);
	const { isLogged } = state;

	// return (
	// 	<Route
	// 		{...rest}
	// 		element={(props) =>
	// 			isAuthenticated ? (
	// 				<Component {...props} />
	// 			) : (
	// 				<Navigate to='/login' />
	// 			)
	// 		}
	// 	/>
	// );
	return isLogged ? <Outlet /> : <Navigate to='/' />;
};
