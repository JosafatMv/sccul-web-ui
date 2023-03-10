import { Container } from 'react-bootstrap';

import '../../../assets/css/components/shared/Layouts/Layout.css';
import { Navbar } from './Navbar';

export const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<Container className='mt-4 px-4'>{children}</Container>
		</>
	);
};
