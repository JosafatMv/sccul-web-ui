import { Col, Container, Dropdown, Row } from 'react-bootstrap';
// Icons
import { MdAccountCircle, MdLogout } from 'react-icons/md';
import { MdArrowDropDown } from 'react-icons/md';

import '../../../assets/css/components/shared/Layouts/Dropdown.css';

export const CustomDropdown = () => {
	// const { name, departament, img } = useSelector((state) => state.auth);

	const handleLogout = () => {
		console.log('Logout');
	};

	return (
		<div className='dropdown__content'>
			<Container>
				<Row className='justify-content-center text-center'>
					<Col md={5}>
						<Dropdown className='custom-dropdown'>
							<Dropdown.Toggle className='d-flex align-items-center dropdown-link text-left'>
								{/* <div className='profile-pic me-3'>
									<img src='' alt='Profile img' />
								</div> */}
								<div className='profile-info'>
									<h3>Josafat</h3>
								</div>
								<MdArrowDropDown color='ccc' size='2em' />
							</Dropdown.Toggle>

							<Dropdown.Menu>
								<Dropdown.Item
									className='dropdown-item'
									onClick={handleLogout}
								>
									<MdAccountCircle></MdAccountCircle>
									Mi perfil
								</Dropdown.Item>
								<Dropdown.Item
									className='dropdown-item'
									onClick={handleLogout}
								>
									<MdLogout></MdLogout>
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
