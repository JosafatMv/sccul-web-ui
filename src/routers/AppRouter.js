import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../components/shared/Layouts/Layout';
import { AuthContext } from '../context/auth/authContext';
import { Landing } from '../Pages/Auth/Landing';
import { Login } from '../Pages/Auth/Login';
import { CourseDetails } from '../Pages/CourseDetails';
import { Home } from '../Pages/Home';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
	const { state } = useContext(AuthContext);
	const { isLogged } = state;

	return (
		<BrowserRouter>
			{isLogged ? (
				<Layout>
					<Routes>
						<Route exact path='/' element={<PrivateRoute />}>
							<Route exact path='/' element={<Home />} />
						</Route>

						<Route exact path='/' element={<PrivateRoute />}>
							<Route exact path='/' element={<CourseDetails />} />
						</Route>

						<Route exact path='/' element={<PrivateRoute />}>
							<Route exact path='/' element={<CourseDetails />} />
						</Route>

						<Route exact path='/*' element={<Navigate to='/' />} />
					</Routes>
				</Layout>
			) : (
				<Routes>
					<Route exact path='/' element={<PublicRoute />}>
						<Route exact path='/' element={<Landing />} />
					</Route>
					<Route exact path='/login' element={<PublicRoute />}>
						<Route exact path='/login' element={<Login />} />
					</Route>
					<Route
						exact
						path='/*'
						element={<Navigate to='/' replace />}
					/>
					{/* <Route exact path='/*' element={<PublicRoute />}>
						<Route
							exact
							path='/login'
							element={<Navigate to='/' replace />}
						/>
					</Route> */}
				</Routes>
			)}
		</BrowserRouter>
	);
};
