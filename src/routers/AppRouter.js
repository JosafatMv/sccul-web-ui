import { useContext } from 'react';
import { AuthContext } from '../context/auth/authContext';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Login } from '../Pages/Auth/Login';
import { CourseDetails } from '../Pages/CourseDetails';
import { Home } from '../Pages/Home';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { Layout } from '../components/shared/Layouts/Layout';
import { Loader } from '../components/shared/Loader';
import {Profile} from "../Pages/Profile";

export const AppRouter = () => {
	const { state } = useContext(AuthContext);

	const { isLogged, isLoading } = state;

	if (isLoading) {
		return <Loader />;
	}

	return (
		<BrowserRouter>
			{isLogged ? (
				<Layout>
					<Routes>
						<Route exact path='/' element={<PrivateRoute />}>
							<Route exact path='/' element={<Home />} />
						</Route>

						<Route exact path='/profile' element={<PrivateRoute />}>
							<Route exact path='/profile' element={<Profile />} />
						</Route>

						<Route
							exact
							path='/course/:id'
							element={<PrivateRoute />}
						>
							<Route
								exact
								path='/course/:id'
								element={<CourseDetails />}
							/>
						</Route>

						<Route exact path='/*' element={<Navigate to='/' />} />
					</Routes>
				</Layout>
			) : (
				<Routes>
					<Route exact path='/login' element={<PublicRoute />}>
						<Route exact path='/login' element={<Login />} />
					</Route>
					<Route
						exact
						path='/*'
						element={<Navigate to='/login' replace />}
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
