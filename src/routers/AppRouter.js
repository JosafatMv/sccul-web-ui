import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../components/shared/Layouts/Layout';
import { Landing } from '../Pages/Auth/Landing';
import { Login } from '../Pages/Auth/Login';
import { CourseDetails } from '../Pages/CourseDetails';
import { Home } from '../Pages/Home';

export const AppRouter = () => {
	const isLogged = false;

	return (
		<BrowserRouter>
			{isLogged ? (
				<Routes>
					<Route path='/' element={<Landing />} />
					<Route path='/login' element={<Login />} />
					<Route path='/*' element={<Navigate to='/' replace />} />
				</Routes>
			) : (
				<Layout>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/course/:id' element={<CourseDetails />} />
						<Route
							path='/*'
							element={<Navigate to='/' replace />}
						/>
					</Routes>
				</Layout>
			)}
		</BrowserRouter>
	);
};
