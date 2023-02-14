import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Landing } from '../Pages//Auth/Landing';
import { Login } from '../Pages/Auth/Login';
import { Register } from '../Pages/Auth/Register';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/*' element={<Navigate to='/' replace />} />
			</Routes>
		</BrowserRouter>
	);
};
