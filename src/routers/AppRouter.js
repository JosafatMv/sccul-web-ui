import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Landing } from '../Pages/Auth/Landing';
import { Login } from '../Pages/Auth/Login';
import {Home} from "../Pages/Home";

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/login' element={<Login />} />
				<Route path='/*' element={<Navigate to='/' replace />} />
				<Route path='/home' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};
