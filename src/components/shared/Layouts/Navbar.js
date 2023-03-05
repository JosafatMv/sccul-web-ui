import { CustomDropdown } from './CustomDropdown';
import '../../../assets/css/components/shared/Layouts/Navbar.css';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar as NavbarBt } from 'react-bootstrap';
import {
	MdAssignmentTurnedIn,
	MdBook,
	MdCategory,
	MdHome,
} from 'react-icons/md';

export const Navbar = () => {
	return (
		<NavbarBt
			variant='dark'
			className='custom-navbar'
			expand='lg'
			sticky='top'
		>
			<Container>
				<NavbarBt.Brand href='#home'>React-Bootstrap</NavbarBt.Brand>
				<NavbarBt.Toggle aria-controls='basic-navbar-nav' />
				<NavbarBt.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<NavLink
							to='/home'
							className='d-flex align-items-center me-3 nav-link'
						>
							<MdHome className='me-1' />
							Home
						</NavLink>

						<NavLink
							to='/'
							className='d-flex align-items-center me-3 nav-link'
						>
							<MdBook className='me-1' />
							Cursos
						</NavLink>

						<NavLink
							to='/'
							className='d-flex align-items-center me-3 nav-link'
						>
							<MdCategory className='me-1' />
							Categorías
						</NavLink>

						<NavLink
							to='/'
							className='d-flex align-items-center me-3 nav-link'
						>
							<MdAssignmentTurnedIn className='me-1' />
							Encuestas
						</NavLink>
					</Nav>
					<Nav>
						<CustomDropdown />
					</Nav>
				</NavbarBt.Collapse>
			</Container>
		</NavbarBt>
	);
};
