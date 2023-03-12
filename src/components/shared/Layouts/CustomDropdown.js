import { useContext } from 'react';
import {useNavigate} from "react-router-dom";
import { AuthContext } from '../../../context/auth/authContext';

import { Col, Container, Dropdown, Row } from 'react-bootstrap';

import { MdAccountCircle, MdLogout } from 'react-icons/md';
import { MdArrowDropDown } from 'react-icons/md';

import { showConfirmDialog } from '../../../shared/plugins/alerts';

import '../../../assets/css/components/shared/Layouts/Dropdown.css';

export const CustomDropdown = () => {
	const navigate = useNavigate();
	const { logout } = useContext(AuthContext);

	const handleLogout = () => {
		showConfirmDialog(
			'Cerrar sesión',
			'¿Estás seguro que deseas cerrar sesión?',
			'Confirmar',
			'Cancelar',
			logout
		);
	};

	const handleProfile = () => {
		navigate('/profile')

	}

	return (
		<div className='dropdown__content'>
			<Container>
				<Row className='justify-content-center text-center'>
					<Col md={5}>
						<Dropdown className='custom-dropdown'>
							<Dropdown.Toggle className='d-flex align-items-center dropdown-link text-left'>
								<div className='profile-info'>
									<h3>Josafat</h3>
								</div>
								<MdArrowDropDown color='ccc' size='2em' />
							</Dropdown.Toggle>

							<Dropdown.Menu>
								<Dropdown.Item
									className='dropdown-item'
									onClick={handleProfile}
								>
									<MdAccountCircle className='me-1' />
									Mi perfil
								</Dropdown.Item>
								<Dropdown.Item
									className='dropdown-item'
									onClick={handleLogout}
								>
									<MdLogout className='me-1' />
									Log out
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
