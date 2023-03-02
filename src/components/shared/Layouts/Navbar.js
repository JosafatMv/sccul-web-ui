import { CustomDropdown } from './CustomDropdown';
import '../../../assets/css/components/shared/Layouts/Navbar.css';
import { Link } from 'react-router-dom';
import {
	Container,
	Nav,
	NavDropdown,
	Navbar as NavbarBt,
} from 'react-bootstrap';
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
						<Nav.Link
							href='/'
							className='d-flex align-items-center'
						>
							<MdHome className='me-1' />
							Home
						</Nav.Link>
						<Nav.Link
							href='/'
							className='d-flex align-items-center'
						>
							<MdBook className='me-1' />
							Cursos
						</Nav.Link>
						<Nav.Link
							href='#home'
							className='d-flex align-items-center'
						>
							<MdCategory className='me-1' />
							Categorías
						</Nav.Link>
						<Nav.Link
							href='#home'
							className='d-flex align-items-center '
						>
							<MdAssignmentTurnedIn className='me-1' />
							Encuestas
						</Nav.Link>
					</Nav>
					<Nav>
						<CustomDropdown />
					</Nav>
				</NavbarBt.Collapse>
			</Container>
		</NavbarBt>
	);
};
